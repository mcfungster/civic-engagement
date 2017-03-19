import _ from 'lodash';
import shortid from 'shortid';
import React from 'react';

import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import NewsItem from './newsItem';

const NewsList = (props) => {
  const { articles } = props.news;

  if (articles.length > 0) {
    const NewsItems = _.map((articles), (article, index) => {
      const key = shortid.generate();
      const { title, blurb, thumb, url } = article;
      return (
        <ListItem>
          <NewsItem
            key={key}
            title={title}
            blurb={blurb}
            thumb={thumb}
            url={url}
          />
        </ListItem>
      );
    });
    return (
      <List>{ NewsItems }</List>
    );
  }
  return <div>news items: nothing!</div>;
};

export default NewsList;
