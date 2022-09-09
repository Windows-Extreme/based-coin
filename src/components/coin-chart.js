import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export class NewChart extends React.Component {

  render() {
    const data = {
      labels: this.props.data?.map(item => new Date(item.date)),
      datasets: [
        {
          label: this.props.title,
          fill: true,
          pointBackgroundColor: '#aaddaa',
          pointBorderColor: '#aaddaa',
          pointRadius: 0,
          pointHoverRadius: 7,
          data: this.props.data?.map(item => item.price),
          borderColor: '#ddaadd',
          backgroundColor: '#ddaadd',
        },
      ]
    }

    const options = {
        responsive: true,
        interaction: {
          mode: 'nearest',
          intersect: false,
        },
        scales: {
          xAxis: {
            type: 'time',
          }
        },
        plugins: {
          legend: {
            display: false,
          },
      }
    }

    return (
      <Line options={options} data={data} />
    )
  }
}

