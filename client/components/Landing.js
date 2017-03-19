import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import Article from 'grommet/components/Article';
import Footer from 'grommet/components/Footer';
import Hero from 'grommet/components/Hero';
import Section from 'grommet/components/Section';
import Image from 'grommet/components/Image';
import Headline from 'grommet/components/Headline';
import Animate from 'grommet/components/Animate';
import Form from 'grommet/components/Form';
import SearchInput from 'grommet/components/SearchInput';
import Heading from 'grommet/components/Heading';
import HeaderContainer from '../containers/headerContainer';

import meetupSearch from '../actions/meetupSearchActions';
import locationSearch from '../actions/locationBarActions';


class Landing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      input: '',
      searchVisibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.meetupSearch(this.state.input);
    this.props.locationSearch(this.state.input);
    this.context.router.push('/events');
  }

  toggleVisibility() {
    this.setState({
      searchVisibility: true
    });
  }

  render() {
    return (
      <Article scrollStep={false}>
        <Header size="small" float={false} fixed={true}>
          <Box direction="row" align="center" pad={{ between: "small" }} className="landing-login-header">
            <Button label="Login" href="/login" path="login" />
            <Button label="Sign Up" href="/signup" path="signup" />
          </Box>
        </Header>

        <Header className="landing-main-nav" size="small" float={false} fixed={true}>
          <HeaderContainer />
        </Header>

        <Hero className="landing-hero" background={<Image src={'../media/landing.jpg'} fit="cover" full={true} />}>
          <Box align="center" justify="center" full="horizontal">
            <Headline align="center">
              Your personal politics agency
            </Headline>
            <Box align="center" justify="center" pad={{ between: 'medium' }}>
              <Button
                label="Get Started"
                primary={true}
                onClick={this.toggleVisibility}
                className="landing-toggle"
              />
              <Animate
                enter={{ animation: 'slide-up', duration: 1000, delay: 300 }}
                visible={this.state.searchVisibility}
              >
                <Box>
                  <Form onSubmit={this.onSubmit} plain={true}>
                    <SearchInput
                      className="landing-searchbar"
                      placeHolder="Enter Address"
                      onDOMChange={this.onInputChange}
                      value={this.state.input}
                    />
                  </Form>
                </Box>
              </Animate>
            </Box>
          </Box>
        </Hero>

        <Section align="center" justify="center" colorIndex="grey-4-a" size="full" className="landing-panel2">
          <Headline align="center" size="small">
            We can’t change the country without changing our state—and we can’t change our state without changing our towns and cities. CivicsPortal is today’s soapbox meant to help you both speak up in and listen to your communitites. Sign up, and make local politics sexy again.
          </Headline>
        </Section>
        <Section align="center" justify="center" colorIndex="neutral-1-a" size="full" className="landing-team">
          <Heading align="center" className="landing-team-header" tag="h3" uppercase={true}>
            Meet The Team
          </Heading>
          <Box direction="row" size="full" pad={{ between: 'large' }} className="landing-bio-container">
            <Box pad={{ between: 'small' }}>
              <img src={'../media/nino.jpg'} className="landing-bio-img" />
              <Heading tag="h3" className="landing-bio-name">Nino Rekhviashivili</Heading>
              <h4>Fullstack Developer</h4>
            </Box>
            <Box pad={{ between: 'small' }}>
              <img src={'../media/kevin.jpg'} className="landing-bio-img" />
              <Heading tag="h3" className="landing-bio-name">Kevin Fung</Heading>
              <h4>Fullstack Developer</h4>
            </Box>
            <Box pad={{ between: 'small' }}>
              <img src={'../media/rishi.jpg'} className="landing-bio-img" />
              <Heading tag="h3" className="landing-bio-name">Rishi Shah</Heading>
              <h4>Fullstack Developer</h4>
            </Box>
          </Box>
        </Section>
        <Footer align="center" justify="center">
          Copyright Boolean Bobcats 2017
        </Footer>
      </Article>
    );
  }
}

Landing.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) { // Temporary state setup. Please feel free to modify this.
  return {
    EventLocation: state.input
  };
}

export default connect(mapStateToProps, { locationSearch, meetupSearch })(Landing);
