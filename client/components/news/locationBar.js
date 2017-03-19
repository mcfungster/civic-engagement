import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import submitLoc from '../../actions/locationBarActions';

class LocationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchLocation: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ searchLocation: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.submitLoc(this.state.searchLocation);
    console.log(this.state.searchLocation);
  }

  render() {
    console.log("in locbar");
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          placeholder="Get info for which area?"
          onChange={this.onInputChange}
          value={this.state.searchLocation}
        />
        <span>
          <button type="submit">Submit</button>
        </span>
      </form>
    );
  }
}


function mapStateToProps(state) {
  return {
    Location: state.searchLocation
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitLoc }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationBar);
