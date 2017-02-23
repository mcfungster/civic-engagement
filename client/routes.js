import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

// import ReqContainer from './containers/ReqContainer'
import Req from './src/req';

// import MapContainer from './containers/GoogleMapContainer';
import LocationBar from './components/locationBar';
import MenuContainer from './containers/sidebarContainer';
import MapContainer from './containers/GoogleMapContainer-v2';
import News from './components/newsList';
import Dashboard from './components/dashboard';
// import MapContainer from './containers/GoogleMapContainer';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';

  // <Route path="map" component={MapContainer} />
const home = function home() {
  return (<div>
    <h1>welcome to the home page!</h1>
    <Link to="/counter">Counter</Link>
    <br />
    <Link to="/req">Go to request</Link>
    <br />
    <Link to="/map">Google Map</Link>
    <br />
    <Link to="/location">Rep Lookup</Link>
    <br />
    <Link to="/menuAnd">Menu with header </Link>
    <br />
    <Link to="/header">Header</Link>
    <br />
    <Link to="/news">News</Link>
    <br />
    <Link to="/dashboard">Dashboard</Link>
    <br />
    <Link to="/header">Header</Link>
    <br />
    <Link to="/testing">Testing</Link>
    <br />
    <Link to="/login">Login</Link>
  </div>);
};

const testing = function testing() {
  return (<div>
    <h1>Testing</h1>
  </div>);
};


export default (
  <Route path="/">
    <IndexRoute component={home} />
    <Route path="req" component={Req} />
    <Route path="location" component={LocationBar} />
    <Route path="menuAnd" component={MenuContainer} />
    <Route path="news" component={News} />
    <Route path="map" component={MapContainer} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="testing" component={testing} />
    <Route path="login" component={Login} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
