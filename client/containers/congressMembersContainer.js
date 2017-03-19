import React, { Component } from 'react';

import Header from 'grommet/components/Header';

import RepDisplay from '../components/congress/repDisplay';
import HeaderContainer from '../containers/headerContainer';

const CongressMembersContainer = () => (
  <div>
    <Header className="home-main-nav" size="small" float={false} fixed={true}>
      <HeaderContainer />
    </Header>
    <div style={{ marginTop: "80px" }}>
      <RepDisplay />
    </div>
  </div>
);

export default CongressMembersContainer;
