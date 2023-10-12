import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function Graph() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Electricity Consumption',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  useEffect(() => {
    // Fetch Ethereum contract data or calculate data here
    // Replace the following lines with your actual data and logic
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const consumptionData = [50, 60, 45, 70, 55];

    setChartData({
      ...chartData,
      labels: labels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: consumptionData,
        },
      ],
    });
  }, []);

  return (
    <div>
      <h2>Energy Consumption Over Time</h2>
      <Line data={chartData} /> {/* Import Line component correctly */}
    </div>
  );
}

export default Graph;
