import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Header2 from '../../containers/headerContainer';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      location: '',
      issues: '',
      quote: '',
      aboutme: '',
      valid: false };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleIssuesChange = this.handleIssuesChange.bind(this);
    this.handleQuoteChange = this.handleQuoteChange.bind(this);
    this.handleAboutMeChange = this.handleAboutMeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  }

  handleLocationChange(event) {
    console.log(event.target.value);
    this.setState({ location: event.target.value });
  }

  handleIssuesChange(event) {
    console.log(event.target.value);
    this.setState({ issues: event.target.value });
  }

  handleQuoteChange(event) {
    console.log(event.target.value);
    this.setState({ quote: event.target.value });
  }

  handleAboutMeChange(event) {
    console.log(event.target.value);
    this.setState({ aboutme: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Email and pword submitted ', this.state.email + this.state.password);
    Axios.post('/api/users/signup', {
      username: this.state.email,
      password: this.state.password,
      location: this.state.location,
      issues: this.state.issues,
      quote: this.state.quote,
      aboutme: this.state.aboutme
    }).then((resp) => {
      Cookies.set('com.CivicsPortal', resp.data.token, { expires: 7 });
    }).then(() => {
      this.setState({ valid: true });
    }).catch((err) => {
      console.log(err);
    });
  }


  render() {
    return (
      <div>
        <Header2 />
          <div style={{ width: '800px', margin: '0 auto', border: '10px #35FEFE', paddingTop: '55px'}}>
            <form onSubmit={this.handleSubmit} >
              <h1 style={{ fontFamily: "Work Sans", fontWeight: '500', paddingTop: '30px'}} >Civics Portal </h1>
              <h4>let&apos;s make local politics sexy. </h4>
              <h2 style={{ paddingTop: '20px', color: '#35FEFE', fontWeight: '400' }}>Please signup</h2>
              <div style={{ paddingLeft: '10%', paddingRight: '25%' }}>
                <h3>E-mail</h3>
                <input type="text" name="username" placeholder="Email Address" onChange={this.handleEmailChange} />
                <br />
                <h3>Password</h3>
                <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} />
                <br />
                <h3>Location or Zip</h3>
                <textarea style={{ minWidth: '600px' }} type="text" name="location" placeholder="Location" onChange={this.handleLocationChange} />
                <br />
                <h3>Top 3 Issues I Care About</h3>
                <textarea style={{ minWidth: '600px' }} type="text" name="issues" placeholder="Issues" onChange={this.handleIssuesChange} />
                <br />
                <h3>Favorite Quote</h3>
                <textarea style={{ minWidth: '600px' }} type="text" name="quote" placeholder="Quote" onChange={this.handleQuoteChange} />
                <br />
                <h3>Who I Am</h3>
                <textarea style={{ minWidth: '600px' }} type="text" name="AboutMe" placeholder="About Me" onChange={this.handleAboutMeChange} />
                <br />
                <br />
                <input style={{ textAlign: 'center' }} type="submit" value="Signup" />
              </div>
            </form>
        </div>
      </div>);
  }
}

export default Signup;
