// BarGraph.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = ({ data }) => {
  const barData = {
    labels: data.map(({ activity }) => activity),
    datasets: [
      {
        label: 'Calories Burned',
        data: data.map(({ caloriesBurned }) => caloriesBurned),
        backgroundColor: '#36A2EB',
      },
    ],
  };

  return (
    <div >
      <h2 className="text-4xl font-serif font-extrabold  text-pink-700 mb-4">Calories Burned per Activity</h2>
      <div className='w-[70%]' >
      <Bar data={barData} />
      </div>
    </div>
  );
};

export default BarGraph;
