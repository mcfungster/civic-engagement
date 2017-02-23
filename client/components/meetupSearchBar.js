import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.meetupSearch(this.state.input);
    console.log(this.state.input);
  }

  render() {
    console.log('Render Meetup Search Bar');
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="meetup-searchbar"
          placeholder="Enter your address"
          onChange={this.onInputChange}
          value={this.state.input}
        />
        <span>
          <button type="submit">Search</button>
        </span>
      </form>
    );
  }
}

function mapStateToProps(state) { // Temporary state setup. Please feel free to modify this.
  return {
    EventLocation: state.input
  };
}

export default connect(mapStateToProps, { meetupSearch })(MeetupSearchBar);
