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
import numeral from 'numeral';

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
      datasets: [
        {
          fill: true,
          pointBackgroundColor: '#aaddaa',
          pointBorderColor: '#aaddaa',
          pointRadius: 0,
          pointHoverRadius: 7,
          data: this.props.data?.map(item => {
            return {
              x: item.date,
              y: item.price,
            }
          }),
          borderColor: '#ddaadd',
          backgroundColor: '#ddaadd',
        },
      ]
    }

    const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          xAxis: {
            alignToPixels: true,
            type: 'time',
            time: {
              displayFormats: {
                hour: 'MMM d - ha'
              }
            }

          },
          yAxis: {
            ticks: {
              // Format y axis with dollar values.
              callback: function(value, index, values) {
                return numeral(value).format('$0.00a')
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            position: 'nearest',
            caretPadding: 18,
            displayColors: false,
            callbacks: {
              // Format tooltip with dollar values.
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': '
                }
                if (context.parsed.y !== null) {
                  label += numeral(context.parsed.y).format('$0,.00')
                }
                return label;
              }
            }
          }
        },
        elements: {
          point: {
            // Change hover point on chart to circle.
            pointStyle: 'circle'
          }
        }
    }

    return (
      <Line options={options} data={data} />
    )
  }
}

