import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveBump } from '@nivo/bump';

const DashboardLineChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getSubViews();
  }, []);

  const getSubViews = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/bigquery_integration/line-views/');
      const data = response.data;
      console.log('API Data:', data); // Log API data

      if (data.length > 0) {
        const formattedData = data.map(item => ({
          id: item.id,
          data: item.data.map((d, index) => ({ x: index, y: d }))
        }));
        console.log('Formatted Data:', formattedData); // Log formatted data
        setChartData(formattedData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ height: 400 }}>
      {chartData.length > 0 ? (
        <ResponsiveBump
          data={chartData}
          margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
          colors={{ scheme: 'nivo' }}
          lineWidth={3}
          activeLineWidth={6}
          inactiveLineWidth={3}
          inactiveOpacity={0.15}
          pointSize={10}
          activePointSize={16}
          inactivePointSize={0}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={3}
          activePointBorderWidth={3}
          pointBorderColor={{ from: 'serie.color' }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40
          }}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DashboardLineChart;
