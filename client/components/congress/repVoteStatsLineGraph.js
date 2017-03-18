import React from 'react';

import Label from 'grommet/components/Label';
import Title from 'grommet/components/Title';

import { Line } from 'react-chartjs-2';
import { LineGraphTemplate } from '../../components/graphTemplates';


const RepVoteStatsLineGraph = ({ rep }) => {
  const lineGraphData = Object.assign({}, LineGraphTemplate);
  lineGraphData.labels = [];
  lineGraphData.datasets[0].data = [];
  lineGraphData.datasets[0].label = '% of votes missed';

  const options = {
    animationSteps: 1000,
    animationEasing: 'easeOutBounce',
    animateRotate: true,
    responsive: false,
    maintainAspectRatio: false,
    legend: { display: false }
  };

  const { roles } = rep;
  if (roles) {
    roles.forEach((session) => {
      if (session.missed_votes_pct !== undefined) {
        const { congress, missed_votes_pct } = session;

        lineGraphData.labels.unshift(congress);
        lineGraphData.datasets[0].data.unshift(missed_votes_pct);
      }
    });
  }

  return (
    <div>
      <Title>% of Votes Missed</Title>
      <Line
        data={lineGraphData}
        options={options}
        height={250}
      />
    </div>
  );
}

RepVoteStatsLineGraph.propTypes = {
};
RepVoteStatsLineGraph.defaultProps = {
};
export default RepVoteStatsLineGraph;

