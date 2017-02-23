import React from 'react';
import Header from '../components/HeaderView';
import Menu from '../components/sidebar';
import ResultsComp from './reqContainer';

const divStyle = {
  paddingTop: '180px',
  width: '600',
  height: '40px',
  textAlign: 'right'
};

const iconUrls = [
  ["http://www.webarti.com/projects/images/palette-ninja.png", "Profile", 'routeTBD'],
  ["http://www.webarti.com/projects/images/palette-ninja.png", "Your Reps", 'routeTBD'],
  ["http://www.webarti.com/projects/images/palette-ninja.png", "Map", '/map'],
  ["http://www.webarti.com/projects/images/palette-ninja.png", "Events", 'routeTBD'],
  ["http://www.webarti.com/projects/images/palette-ninja.png", "Friends", 'routeTBD']
];


class SidebarContainer extends React.Component {

  render() {
    return (
      <div id="outer-container">
        <header><Header headerIcons={iconUrls} /></header>
        <Menu pageWrapID={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap" style={divStyle} >
          <ResultsComp />
        </div>
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
