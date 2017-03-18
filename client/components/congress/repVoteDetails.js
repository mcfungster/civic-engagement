import React from 'react';

import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

const VoteDetails = ({ vote }) => {
  const { description, question, date, position } = vote;

  return (
    <div>
      { date } <br />
      Voted: { position } { question } for { description }
    </div>
  );
};

export default VoteDetails;
