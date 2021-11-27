import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'VIOLENCIA CONTRA LA MUJER POR DEPARTAMENTOS',
    },
  },
};

const data = {
  labels: ['CONTABILIDAD', 'LEGAL', 'MARKETING',  'DESARROLLO', ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const PieGraph = () => {
  return (
    <div>
      <Pie data={data} options={options}/>
    </div>
  )
}

export default PieGraph
