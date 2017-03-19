import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

// Function to format names from ProPublica Top 20 response
    // const formatName = (str) => {
    //   let strArray = str.split('/');
    //   strArray.forEach()
    //   const re = /\s*,\s*/;
    // };
    // function toTitleCase(str) {
    //   return str.replace(/\w\S*/g, function(txt){
    // return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    // }

const dataSet = {
  labels: [],
  datasets: [
    {
      label: 'U.S. Dollars',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      hoverBorderWidth: 4,
      data: []
    }
  ]
};

const options = {};

const Top20Chart = (props) => {
  const metric = props.search;
  // console.log('---- In Top20Chart, props.search = ', props.search);

  dataSet.labels = props.data.map(
    (candidate, index) => `${index + 1}. ${candidate.name}`
  );

  dataSet.datasets[0].data = props.data.map(
    candidate => candidate[metric]
  );

  return (
    <HorizontalBar data={dataSet} options={options} />
  );
};

export default Top20Chart;
