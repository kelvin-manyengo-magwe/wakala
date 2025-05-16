import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const TopServicesChart = () => {
  const data = {
    labels: ['Ingiza Pesa', 'Toa Pesa', 'Tuma Pesa', 'Nunua Airtime', 'Malipo'],
    datasets: [
      {
        label: 'Idadi ya Manunuzi',
        data: [100, 0, 0, 0, 0],
        backgroundColor: [
          '#43A047',
          '#E53935',
          '#3949AB',
          '#FB8C00',
          '#8E24AA'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Huduma Zinazotumika Zaidi',
      },
    },
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Huduma Zinazotumika Zaidi
      </Typography>
      <Box sx={{ height: 400 }}>
        <Pie options={options} data={data} />
      </Box>
    </Paper>
  );
};

export default TopServicesChart;
