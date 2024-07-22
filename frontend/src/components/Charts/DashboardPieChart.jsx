import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const DashboardPieChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["2024-07-01", "2024-07-02", "2024-07-03", "2024-07-04", "2024-07-05"],
    datasets: [
      {
        label: 'Total Views',
        data: [150, 200, 180, 220, 170],
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
    getTotalViews();
  }, []);

  const getTotalViews = () => {
    axios.get('http://127.0.0.1:8000/bigquery_integration/total-views/')
      .then(response => response.data)
      .then(data => {
        if (data.labels.length > 0 && data.data.length > 0) {
          setChartData({
            labels: data.labels,
            datasets: [
              {
                label: 'Total Views',
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

  return <Pie data={chartData} />;
};

export default DashboardPieChart;
