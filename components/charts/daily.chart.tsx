import React, { useRef, useEffect } from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

const BubbleChart = ({ dataset }) => {
  
  const data = {
    datasets: [
      {
        label: 'Daily Smoke Log',
        data: dataset,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    scales: {
       x: {
         min : 0,
         max: 24,
         ticks : {
           stepSize: 1
         },
         title: {
          display: true,
          text: 'Hours'
        }
       },
      y: {
        min: 0,
        max: 60,
         ticks : {
           stepSize: 5
         },
        title: {
          display: true,
          text: 'Minutes'
        }
      }
    },
  };
  
  return (
      <Bubble data={data} options={options} />
  );
};
Chart.register(...registerables);
export default BubbleChart;
