import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../actions/locationBarActions';
// import GoogleList from '../components/googleListComponent';

import Header from 'grommet/components/Header';

import RepDisplay from '../components/congress/repDisplay';
import HeaderContainer from '../containers/headerContainer';

const CongressMembersContainer = () => (
  <div>
    <Header className="landing-main-nav" size="small" float={false} fixed={true}>
      <HeaderContainer />
    </Header>
    <div style={{ marginTop: "80px" }}>
      <RepDisplay />
    </div>
  </div>
);

export default CongressMembersContainer;
