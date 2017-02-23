// import React, { Component } from 'react';
import React from 'react';

// class NewsItem extends Component {
const NewsItem = (props) => {
  const debugStyle = {
    border: 'solid blue 2px'
  };
  const { title, blurb, thumb, url } = props;

  return (
    <li style={debugStyle}>
      <img alt="thumbnail" src={thumb} />
      <h1>{ title }</h1>
      <span>{ blurb }</span>
      <a href={url}>Link</a>
    </li>
  );
};

NewsItem.propTypes = {
  title: React.PropTypes.string,
  blurb: React.PropTypes.string,
  thumb: React.PropTypes.string
};

NewsItem.defaultProps = {
  title: 'title',
  blurb: 'blurb',
  thumb: 'thumb'
};

export default NewsItem;
