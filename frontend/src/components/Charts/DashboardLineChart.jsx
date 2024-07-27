import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const DashboardLineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Line Chart',
        data: [],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  });

  useEffect(() => {
    getLineChart();
  }, []);

  const getLineChart = () => {
    axios.get('http://127.0.0.1:8000/bigquery_integration/charts-line/')
      .then(response => response.data)
      .then(data => {
        if (data.labels.length > 0 && data.data.length > 0) {
          setChartData({
            labels: data.labels,
            datasets: [
              {
                label: 'Line Chart',
                data: data.data,
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#4BC0C0',
                  '#9966FF',
                ],
              },
            ],
          });
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  return <Line data={chartData} />;
};

export default DashboardLineChart;
