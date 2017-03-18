import React from 'react';

import { Doughnut } from 'react-chartjs-2';
import { DoughnutTemplate } from '../../components/graphTemplates';

const RepVoteStatsDoughnut = ({ rep }) => {
  const doughnutGraphData = Object.assign({}, DoughnutTemplate);
  doughnutGraphData.labels = ['Yes', 'No', 'Present'];
  doughnutGraphData.datasets[0].data = [0, 0, 0];
  
  const options = {
    animationSteps: 1000,
    animationEasing: 'easeInElastic',
    animateRotate: true,
    responsive: false,
    maintainAspectRatio: false
  };

  if (rep && rep.votes && rep.roles) {
    const { votes } = rep;

    votes.forEach((vote) => {
      let { data } = doughnutGraphData.datasets[0];
      if (vote.position === 'Yes') data[0] += 1;
      if (vote.position === 'No') data[1] += 1;
      if (vote.position === 'Present') data[2] += 1;
    });
  }

  return (
    <Doughnut
      data={doughnutGraphData}
      options={options}
      height={300}
    />
  );
}

RepVoteStatsDoughnut.propTypes = {
};
RepVoteStatsDoughnut.defaultProps = {
};
export default RepVoteStatsDoughnut;
