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
  constructor(props) {
    super(props)
    this.state = {
      data: {
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
      },
      options: {
        interaction: {
          mode: 'nearest',
          intersect: false,
        },
        scales: {
          xAxis: {
            type: 'time',
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      }
    }
  }
  render() {
    console.log(this.props.data?.map(item => new Date(item.date)))
    console.log(this.props.data?.map(item => item.price))
    return (
      <Line options={this.state.options} data={this.state.data} />
    )
  }
}

