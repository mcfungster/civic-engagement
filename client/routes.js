import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
// import Axios from 'axios';
import Req from './src/req';
import LocationBar from './components/locationBar';
import MenuContainer from './containers/sidebarContainer';
import MapContainer from './containers/GoogleMapContainer';
import Dashboard from './components/dashboard';
import News from './components/newsList';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import Signup from './components/Signup';
import Auth from './components/Auth';
import Top20 from './components/Top20Wrapper';
import HeaderContainer from './containers/headerContainer';
import Landing from './components/Landing';
import CongressContainer from './containers/congressMembersContainer';

const home = function home() {
  return (<div>
    <h1>welcome to the home page!</h1>
    <Link to="/location">Rep Lookup</Link>
    <br />
    <Link to="/menuAnd">Menu with header </Link>
    <br />
    <Link to="/news">News</Link>
    <br />
    <Link to="/dashboard">Dashboard</Link>
    <br />
    <Link to="/header">Header</Link>
    <br />
    <Link to="/login">Login</Link>
    <br />
    <Link to="/signup">Signup</Link>
    <br />
    <Link to="/congress">Congress!</Link>
    <br />
    <Link to="/top20">Campaign Finance Top 20 Lists</Link>
    <br />
    <Link to="/landing">Landing Page</Link>
  </div>);
};

const testing = function testing() {
  return (<div>
    <h1>Testing</h1>
    <Link to="/header">Header</Link>
  </div>);
};

export default (
  <Route path="/" >
    <IndexRoute component={Landing} />
    <Route path="req" component={Req} />
    <Route path="location" component={LocationBar} />
    <Route path="map" component={MapContainer} />
    <Route path="menuAnd" component={MenuContainer} />
    <Route path="news" component={News} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="testing" component={testing} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="auth" component={Auth} />
    <Route path="congress" component={CongressContainer} />
    <Route path="top20" component={Top20} />
    <Route path="header" component={HeaderContainer} />
    <Route path="directory" component={home} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
