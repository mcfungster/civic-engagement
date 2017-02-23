import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/locationBarActions';
import GoogleList from '../components/googleListComponent';
import LocationBar from '../components/locationBar';

class ResultsComp extends React.Component {
  componentWillMount() {
    console.log('ResultsComp will mount')
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <LocationBar />
        <GoogleList GoogleResults={data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.GoogleResults.GoogleResults
  };
}


export default connect(mapStateToProps)(ResultsComp);
