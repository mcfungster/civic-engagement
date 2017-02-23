import React from 'react';
import Map from '../containers/GoogleMapContainer-v2';
import Search from './meetupSearchBar';

const Dashboard = () =>
  (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>{'menu fill in'}</h2>
      </div>
      <div className="row">
        <Search className="dashboard-side" />
        <Map />
      </div>
    </div>
  );

export default Dashboard;
