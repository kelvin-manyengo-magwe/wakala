import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: '20px',
  borderRadius: '12px',
  boxShadow: theme.shadows[2],
  height: '100%',
}));

const Analytics: React.FC = () => {
  const agentPerformanceData = {
    labels: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'David Brown'],
    datasets: [
      {
        label: 'Transactions',
        data: [120, 90, 75, 110, 85],
        backgroundColor: 'rgba(230, 57, 70, 0.7)',
      },
    ],
  };

  const dailyProfitData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Profit',
        data: [450, 600, 300, 750, 500, 650, 400],
        borderColor: 'rgba(58, 134, 255, 1)',
        backgroundColor: 'rgba(58, 134, 255, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const transactionTypeData = {
    labels: ['Deposit', 'Withdrawal', 'Transfer', 'Payment'],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          'rgba(230, 57, 70, 0.7)',
          'rgba(58, 134, 255, 0.7)',
          'rgba(75, 181, 67, 0.7)',
          'rgba(255, 204, 0, 0.7)',
        ],
      },
    ],
  };

  return (
    <Box sx={{
      width: '80vw',
      margin: '0 auto',
      padding: '20px 0'
    }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Analytics
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <StyledCard>
              <Typography variant="h6" gutterBottom>
                Agent Performance
              </Typography>
              <Box sx={{ height: '400px' }}>
                <Bar
                  data={agentPerformanceData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                    },
                    animation: {
                      duration: 2000,
                    },
                  }}
                />
              </Box>
            </StyledCard>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <StyledCard>
              <Typography variant="h6" gutterBottom>
                Transaction Types
              </Typography>
              <Box sx={{ height: '400px' }}>
                <Pie
                  data={transactionTypeData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom',
                      },
                    },
                    animation: {
                      duration: 2000,
                    },
                  }}
                />
              </Box>
            </StyledCard>
          </motion.div>
        </Grid>
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <StyledCard>
              <Typography variant="h6" gutterBottom>
                Weekly Profit Trend
              </Typography>
              <Box sx={{ height: '400px' }}>
                <Line
                  data={dailyProfitData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                    },
                    animation: {
                      duration: 2000,
                    },
                  }}
                />
              </Box>
            </StyledCard>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
