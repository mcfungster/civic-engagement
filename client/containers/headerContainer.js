import React from 'react';
import Header from '../components/HeaderView';

const iconUrls = [
  ["https://www.shareicon.net/data/128x128/2016/08/04/806712_megaphone_512x512.png", "  EVENTS", '/dashboard'],
  ["http://icons.iconarchive.com/icons/designcontest/ecommerce-business/128/news-icon.png", "  NEWS", '/menuAnd'],
  ["http://icons.iconarchive.com/icons/webalys/kameleon.pics/128/Graph-Magnifier-icon.png", "  CHARTS", '/top20'],
  ["http://icons.iconarchive.com/icons/aha-soft/large-home/128/Goverment-icon.png", "  REPS", '/congress'],
  ["http://icons.iconarchive.com/icons/webalys/kameleon.pics/128/Settings-2-icon.png", "  PROFILE", '/login']
];

const HeaderContainer = () => (
  <Header style={{ paddingLeft: '130px', paddingBottom: '40px' }} headerIcons={iconUrls} />
);

export default HeaderContainer;
