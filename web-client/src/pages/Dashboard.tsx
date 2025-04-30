import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Avatar,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  AccountBalanceWallet,
  People,
  Sync,
  MonetizationOn,
  ArrowUpward,
  ArrowDownward,
  Notifications,
  AccountCircle,
  Payment,
  TrendingUp
} from '@mui/icons-material';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: '24px',
  borderRadius: '12px',
  boxShadow: theme.shadows[2],
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 5px 20px ${theme.palette.primary.light}`,
  },
}));

const Dashboard: React.FC = () => {
  // Chart Data
  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Transactions',
        data: [120, 190, 130, 170, 150, 200, 180],
        backgroundColor: 'rgba(230, 57, 70, 0.7)',
        borderColor: 'rgba(230, 57, 70, 1)',
        borderWidth: 1,
      },
      {
        label: 'Commissions',
        data: [80, 120, 100, 110, 90, 140, 130],
        backgroundColor: 'rgba(58, 134, 255, 0.7)',
        borderColor: 'rgba(58, 134, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Success', 'Failed', 'Pending'],
    datasets: [
      {
        data: [75, 15, 10],
        backgroundColor: [
          'rgba(75, 181, 67, 0.7)',
          'rgba(255, 51, 51, 0.7)',
          'rgba(255, 204, 0, 0.7)',
        ],
        borderColor: [
          'rgba(75, 181, 67, 1)',
          'rgba(255, 51, 51, 1)',
          'rgba(255, 204, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Recent Activities Data
  const activities = [
    { id: 1, user: 'John Doe', action: 'completed transaction', amount: 1500, time: '2 mins ago', icon: <Payment /> },
    { id: 2, user: 'Sarah Smith', action: 'registered new agent', amount: null, time: '15 mins ago', icon: <AccountCircle /> },
    { id: 3, user: 'Mike Johnson', action: 'processed withdrawal', amount: 2500, time: '32 mins ago', icon: <TrendingUp /> },
    { id: 4, user: 'System', action: 'completed nightly sync', amount: null, time: '1 hour ago', icon: <Sync /> }
  ];

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      overflow: 'auto',
      p: 3,
      backgroundColor: 'background.default'
    }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Dashboard Overview
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Notifications color="action" />
          <Avatar sx={{ bgcolor: 'primary.main' }}>AD</Avatar>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item={true} xs={12} sm={6} md={3}>
          <StyledCard>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'rgba(230, 57, 70, 0.1)', color: '#e63946' }}>
                <AccountBalanceWallet />
              </Avatar>
              <Box>
                <Typography variant="body2" color="text.secondary">Total Transactions</Typography>
                <Typography variant="h4" fontWeight="bold">1,245</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <ArrowUpward color="success" fontSize="small" />
                  <Typography variant="caption" color="success.main" sx={{ ml: 0.5 }}>
                    12% from last week
                  </Typography>
                </Box>
              </Box>
            </Box>
          </StyledCard>
        </Grid>

        <Grid item={true} xs={12} sm={6} md={3}>
          <StyledCard>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'rgba(58, 134, 255, 0.1)', color: '#3a86ff' }}>
                <People />
              </Avatar>
              <Box>
                <Typography variant="body2" color="text.secondary">Agents Online</Typography>
                <Typography variant="h4" fontWeight="bold">42</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <ArrowDownward color="error" fontSize="small" />
                  <Typography variant="caption" color="error.main" sx={{ ml: 0.5 }}>
                    3% from yesterday
                  </Typography>
                </Box>
              </Box>
            </Box>
          </StyledCard>
        </Grid>

        <Grid item={true} xs={12} sm={6} md={3}>
          <StyledCard>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'rgba(75, 181, 67, 0.1)', color: '#4bb543' }}>
                <Sync />
              </Avatar>
              <Box>
                <Typography variant="body2" color="text.secondary">Last Sync</Typography>
                <Typography variant="h4" fontWeight="bold">5 min ago</Typography>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{ mt: 2, height: 6, borderRadius: 3 }}
                />
              </Box>
            </Box>
          </StyledCard>
        </Grid>

        <Grid item={true} xs={12} sm={6} md={3}>
          <StyledCard>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'rgba(255, 204, 0, 0.1)', color: '#ffcc00' }}>
                <MonetizationOn />
              </Avatar>
              <Box>
                <Typography variant="body2" color="text.secondary">Total Commissions</Typography>
                <Typography variant="h4" fontWeight="bold">$8,245</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <ArrowUpward color="success" fontSize="small" />
                  <Typography variant="caption" color="success.main" sx={{ ml: 0.5 }}>
                    24% from last month
                  </Typography>
                </Box>
              </Box>
            </Box>
          </StyledCard>
        </Grid>
      </Grid>

      {/* Main Content */}
      <Grid container spacing={3}>
        {/* Charts Section */}
        <Grid item={true} xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item={true} xs={12}>
              <StyledCard>
                <Typography variant="h6" gutterBottom>
                  Weekly Performance
                </Typography>
                <Box sx={{ height: 300 }}>
                  <Bar
                    data={barData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                      },
                    }}
                  />
                </Box>
              </StyledCard>
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <StyledCard>
                <Typography variant="h6" gutterBottom>
                  Transaction Status
                </Typography>
                <Box sx={{ height: 250 }}>
                  <Pie
                    data={pieData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom',
                        },
                      },
                    }}
                  />
                </Box>
              </StyledCard>
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <StyledCard>
                <Typography variant="h6" gutterBottom>
                  System Health
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" gutterBottom>Server Load</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={65}
                    sx={{ height: 10, borderRadius: 5, mb: 3 }}
                  />
                  <Typography variant="body2" gutterBottom>Database Usage</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={45}
                    sx={{ height: 10, borderRadius: 5, mb: 3 }}
                  />
                  <Typography variant="body2" gutterBottom>Network Latency</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={25}
                    color="success"
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                </Box>
              </StyledCard>
            </Grid>
          </Grid>
        </Grid>

        {/* Recent Activities Section */}
        <Grid item={true} xs={12} md={4}>
          <StyledCard>
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            <List>
              {activities.map((activity, index) => (
                <React.Fragment key={activity.id}>
                  <ListItem alignItems="flex-start" sx={{ py: 1.5 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'action.hover' }}>
                        {activity.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body2" fontWeight="medium">
                          {activity.user} {activity.action}
                          {activity.amount && ` (Ksh ${activity.amount.toLocaleString()})`}
                        </Typography>
                      }
                      secondary={activity.time}
                    />
                  </ListItem>
                  {index < activities.length - 1 && <Divider variant="inset" component="li" />}
                </React.Fragment>
              ))}
            </List>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
