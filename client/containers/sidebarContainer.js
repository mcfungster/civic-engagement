import React from 'react';
import HeaderContainer from '../containers/headerContainer';
import Menu from '../components/sidebar';
import ResultsComp from './reqContainer';
import Header from 'grommet/components/Header';


const divStyle = {
  paddingTop: '180px',
  width: '600',
  height: '40px',
  textAlign: 'right'
};

const iconUrls = [
  ["https://www.shareicon.net/data/128x128/2016/08/04/806712_megaphone_512x512.png", "  EVENTS", '/map'],
  ["http://icons.iconarchive.com/icons/designcontest/ecommerce-business/128/news-icon.png", "  NEWS", 'routeTBD'],
  ["http://icons.iconarchive.com/icons/webalys/kameleon.pics/128/Graph-Magnifier-icon.png", "  CHARTS", 'routeTBD'],
  ["http://icons.iconarchive.com/icons/aha-soft/large-home/128/Goverment-icon.png", "  REPS", 'routeTBD'],
  ["http://icons.iconarchive.com/icons/webalys/kameleon.pics/128/Settings-2-icon.png", "  PROFILE", 'routeTBD']
];


class SidebarContainer extends React.Component {

  render() {
    return (
      <div>
          <Header className="landing-main-nav" style={{ marginLeft: '40px'}}size="small" float={false} fixed={true}>
            <HeaderContainer />
          </Header>
          <ResultsComp />
      </div>
    );
  }
}

export default SidebarContainer;


// <div id="outer-container">
//   <header className="header-bar"></header>
//   <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } noOverlay />
//   <main id="page-wrap">
//     // Other stuff
//   </main>
// </div
