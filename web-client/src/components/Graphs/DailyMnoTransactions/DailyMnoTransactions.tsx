import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DailyMnoTransactions = () => {
  const data = {
    labels: ['Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi', 'Jumapili'],
    datasets: [
      {
        label: 'Vodacom',
        data: [120, 190, 130, 170, 150, 200, 180],
        backgroundColor: '#E53935',
      },
      {
        label: 'Tigo',
        data: [80, 120, 100, 110, 90, 140, 130],
        backgroundColor: '#3949AB',
      },
      {
        label: 'Halotel',
        data: [40, 60, 50, 70, 60, 80, 75],
        backgroundColor: '#43A047',
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
        text: 'Chati ya Jumla ya miamala kwa kila mtandao',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Idadi ya Miamalai',
        }
      },
      x: {
        title: {
          display: true,
          text: 'Siku za Wiki',
        }
      }
    },
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Jumla ya miamala kwa kila mtandao
      </Typography>
      <Box sx={{ height: 400 }}>
        <Bar options={options} data={data} />
      </Box>
    </Paper>
  );
};

export default DailyMnoTransactions;
