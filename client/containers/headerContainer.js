import React from 'react';
import Header from '../components/HeaderView';
import ResultsComp from './reqContainer';

const divStyle = {
  paddingTop: '180px',
  width: '600',
  height: '40px',
  textAlign: 'right'
};

const iconUrls = [
  ["https://www.shareicon.net/data/128x128/2016/08/04/806712_megaphone_512x512.png", "  EVENTS", '/dashboard'],
  ["http://icons.iconarchive.com/icons/designcontest/ecommerce-business/128/news-icon.png", "  NEWS", '/menuAnd'],
  ["http://icons.iconarchive.com/icons/webalys/kameleon.pics/128/Graph-Magnifier-icon.png", "  CHARTS", '/top20'],
  ["http://icons.iconarchive.com/icons/aha-soft/large-home/128/Goverment-icon.png", "  REPS", '/congress'],
  ["http://icons.iconarchive.com/icons/webalys/kameleon.pics/128/Settings-2-icon.png", "  PROFILE", '/login']
];


class HeaderContainer extends React.Component {

  render() {
    return (
      <header style={{ paddingLeft: '130px', paddingBottom: '40px' }}><Header headerIcons={iconUrls} /></header>
    );
  }
}

export default HeaderContainer;
