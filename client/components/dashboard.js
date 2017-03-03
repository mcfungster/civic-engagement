import React from 'react';
import Map from '../containers/GoogleMapContainer';
import Search from './meetupSearchBar';
import EventList from './MeetupEventsList';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import HeaderContainer from '../containers/headerContainer';

const Dashboard = () =>
  (
    <Box
      full="true"
      className="dashboard"
    >

      <Header className="landing-main-nav" size="small" float={false} fixed={true}>
        <HeaderContainer />
      </Header>

      <Header
        className="dashboard-header"
        fixed={false}
      >
        {/* <Title>
          Civic Meetup Event Search
        </Title> */}
      </Header>
      <Split
        fixed={false}
        flex="right"
        className="dashboard-split"
      >
        <Sidebar
          className="dashboard-side"
          size="large"
          full={true}
        >
          <Search className="meetup-search" />
          <EventList className="meetup-list" />
        </Sidebar>
        <Map />
      </Split>
      <div />
    </Box>
  );

export default Dashboard;
