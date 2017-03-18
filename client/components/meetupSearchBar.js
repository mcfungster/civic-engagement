import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'grommet/components/Form';
import SearchInput from 'grommet/components/SearchInput';
// import Box from 'grommet/components/Box';
// import Button from 'grommet/components/Button';
// import FormFields from 'grommet/components/FormFields';
// import FormField from 'grommet/components/FormField';

import meetupSearch from '../actions/meetupSearchActions';

class MeetupSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.UserData) {
      this.props.meetupSearch(this.props.UserData.location);
    }
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.meetupSearch(this.state.input);
    console.log(this.state.input);
  }

  // render() {
  //   console.log('Render Meetup Search Bar');
  //   return (
  //     <form onSubmit={this.onSubmit}>
  //       <input
  //         className="meetup-searchbar"
  //         placeholder="Enter your address"
  //         onChange={this.onInputChange}
  //         value={this.state.input}
  //       />
  //       <span>
  //         <button type="submit">Search</button>
  //       </span>
  //     </form>
  //   );
  // }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        pad={{
          vertical: 'small',
          horizontal: 'small'
        }}
        plain={true}
      >
        <SearchInput
          className="meetup-searchbar"
          placeHolder="Enter Address"
          onDOMChange={this.onInputChange}
          value={this.state.input}
        />
      </Form>
    );
  }
}

// {/* <Box>
//   <Button
//   label='Submit'
//   type='submit'
//   onClick={this.onSubmit}
//   primary={true}
// />
// </Box> */}
// {/* <Box
//   pad={{
//     between: 'medium'
//   }}
//   focusable={false}
// >    </Box> */}

function mapStateToProps(state) { // Temporary state setup. Please feel free to modify this.
  return {
    EventLocation: state.input,
    UserData: state.LoggedIn.userData
  };
}

export default connect(mapStateToProps, { meetupSearch })(MeetupSearchBar);
