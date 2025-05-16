import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Line } from 'react-chartjs-2';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TransactionVolumeChart = () => {
  const data = {
    labels: ['Wiki 1', 'Wiki 2', 'Wiki 3', 'Wiki 4'],
    datasets: [
      {
        label: 'Jumla ya Miamala',
        data: [1250, 1890, 1780, 2100],
        borderColor: '#8E24AA',
        backgroundColor: '#8E24AA',
        tension: 0.3,
      },
      {
        label: 'Amana',
        data: [650, 920, 850, 1100],
        borderColor: '#43A047',
        backgroundColor: '#43A047',
        tension: 0.3,
      },
      {
        label: 'Makato',
        data: [600, 970, 930, 1000],
        borderColor: '#E53935',
        backgroundColor: '#E53935',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Mabadiliko Miamala Kwa Kila Mtandao kwa Muda',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Idadi ya Miamala',
        }
      },
      x: {
        title: {
          display: true,
          text: 'Muda (Wiki)',
        }
      }
    },
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Mabadiliko ya Miamala Kwa Kila Mtandao kwa muda
      </Typography>
      <Box sx={{ height: 400 }}>
        <Line options={options} data={data} />
      </Box>
    </Paper>
  );
};

export default TransactionVolumeChart;
