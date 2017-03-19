import React from 'react';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
// import Title from 'grommet/components/Title';
import Map from './eventsMap';
import Search from './eventsSearchBar';
import EventList from './eventsList';
import HeaderContainer from '../../containers/headerContainer';

const EventsDisplay = () =>
  (
    <Box
      full="true"
      className="events"
    >

      <Header className="landing-main-nav" size="small" float={false} fixed={true}>
        <HeaderContainer />
      </Header>

      <Header
        className="events-header"
        fixed={false}
      >
        {/* <Title>
          Civic Meetup Event Search
        </Title> */}
      </Header>
      <Split
        fixed={false}
        flex="right"
        className="events-split"
      >
        <Sidebar
          className="events-side"
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

export default EventsDisplay;
