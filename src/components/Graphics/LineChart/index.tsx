import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: 'REINCIDENCIAS',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Contabilidad',
      data: labels.map(() => Math.floor(Math.random() * 20)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Marketing',
      data: labels.map(() => Math.floor(Math.random() * 20)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Desarrollo',
      data: labels.map(() => Math.floor(Math.random() * 20)),
      borderColor: 'rgb(53, 62, 235)',
      backgroundColor: 'rgba(53, 62, 235, 0.5)',
    },
  ],
};


const LineChart = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}

export default LineChart
