import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'VIOLENCIA CONTRA LA MUJER',
    },
  },
};

const labels = ['Culpar', 'Chantaje', 'Bromas Hirientes', 'Descalificar', 'Intimidar', 'Ridiculizar' ];

export const data = {
  labels,
  datasets: [
    {
      label: 'Contabilidad',
      data: labels.map(() => Math.floor(Math.random() * 20)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Marketing',
      data: labels.map(() => Math.floor(Math.random() * 20)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Graph = () => {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  )
}

export default Graph

