import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
// import Axios from 'axios';
import LocationBar from './components/news/locationBar';
import MenuContainer from './containers/sidebarContainer';
import MapContainer from './components/events/eventsMap';
import Events from './components/events/eventsDisplay';
import News from './components/news/newsList';
import PageNotFound from './components/PageNotFound';
import Login from './components/profile/Login';
import Signup from './components/profile/Signup';
import Auth from './components/profile/Auth';
import Top20 from './components/charts/top20Wrapper';
import HeaderContainer from './containers/headerContainer';
import HomePage from './components/Landing';
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
    <Link to="/events">Events</Link>
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

// const testing = function testing() {
//   return (<div>
//     <h1>Testing</h1>
//     <Link to="/header">Header</Link>
//   </div>);
// };

export default (
  <Route path="/" >
    <IndexRoute component={HomePage} />
    <Route path="location" component={LocationBar} />
    <Route path="map" component={MapContainer} />
    <Route path="menuAnd" component={MenuContainer} />
    <Route path="news" component={News} />
    <Route path="events" component={Events} />
    {/* <Route path="testing" component={testing} /> */}
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
