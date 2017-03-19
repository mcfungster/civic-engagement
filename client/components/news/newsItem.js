// import React, { Component } from 'react';
import React from 'react';

import Title from 'grommet/components/Title';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import LinkIcon from 'grommet/components/icons/base/Link';

// class NewsItem extends Component {
const NewsItem = (props) => {
  const { title, blurb, thumb, url } = props;
  // console.log('news items props: ', props);
  return (
    <div>
      <img alt="thumbnail" src={thumb} />
      <h3>{ title }</h3>
      <Paragraph>{ blurb }</Paragraph>
      <Anchor
        icon={<LinkIcon />}
        label={'Read more...'}
        target={'_blank'}
        reverse={true}
        size={'large'}
        animateIcon={true}
        href={`${url}`}
      />
    </div>
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
