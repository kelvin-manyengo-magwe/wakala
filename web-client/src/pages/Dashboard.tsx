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
  TrendingUp,
  AccountBalance,
  AttachMoney,
  ShowChart
} from '@mui/icons-material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Import the new chart components
import DailyMnoTransactions from '../components/Graphs/DailyMnoTransactions/DailyMnoTransactions';
import TransactionVolumeChart from '../components/Graphs/TransactionVolumeChart/TransactionVolumeChart';
import TopServicesChart from '../components/Graphs/TopServicesChart/TopServicesChart';

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
}));

const Dashboard: React.FC = () => {
  // Financial Data
  const financialData = [
    { title: 'Jumla ya Amana', value: 'Tsh 4,693,500', change: '+12%', icon: <AccountBalance />, color: '#4caf50' },
    { title: 'Jumla ya Makato', value: 'Tsh 189,500', change: '+8%', icon: <AttachMoney />, color: '#f44336' },
    { title: 'Salio la Sasa', value: 'Tsh 8,538', change: '+5%', icon: <ShowChart />, color: '#2196f3' },
    { title: 'Faida ya Wiki', value: 'Tsh 38,750', change: '+15%', icon: <TrendingUp />, color: '#ff9800' }
  ];

  // Recent Activities Data
  const activities = [
    { id: 1, user: 'James Nasuwa', action: 'amemaliza muamala', amount: 500, time: 'Dakika 2 zilizopita', icon: <Payment /> },
    { id: 2, user: 'Mfumo', action: 'umemaliza usawazishaji wa usiku', amount: null, time: 'Saa 1 iliyopita', icon: <Sync /> }
    /*{ id: 3, user: 'Sarah Smith', action: 'amemsajili wakala mpya', amount: null, time: 'Dakika 15 zilizopita', icon: <AccountCircle /> },
    { id: 4, user: 'Mike Johnson', action: 'amefanya makato', amount: 2500, time: 'Dakika 32 zilizopita', icon: <TrendingUp /> },
    */
  ];

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      overflow: 'auto',
      p: 3,
      backgroundColor: 'background.default',
    }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Ukurasa wa Uchambuzi
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Notifications color="action" />
          <Avatar sx={{ bgcolor: 'primary.main' }}>AD</Avatar>
        </Box>
      </Box>

      {/* Financial Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {financialData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledCard>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: `${item.color}20`, color: item.color }}>
                  {item.icon}
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">{item.title}</Typography>
                  <Typography variant="h5" fontWeight="bold">{item.value}</Typography>
                  <Typography variant="caption" sx={{
                    color: item.change.startsWith('+') ? 'success.main' : 'error.main',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {item.change.startsWith('+') ? <ArrowUpward fontSize="small" /> : <ArrowDownward fontSize="small" />}
                    {item.change}
                  </Typography>
                </Box>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'action.hover', color: 'text.primary' }}>
                <AccountBalanceWallet />
              </Avatar>
              <Box>
                <Typography variant="body2" color="text.secondary">Jumla ya Miamala</Typography>
                <Typography variant="h4" fontWeight="bold">80</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <ArrowUpward color="success" fontSize="small" />
                  <Typography variant="caption" color="success.main" sx={{ ml: 0.5 }}>
                    12% kutoka wiki iliyopita
                  </Typography>
                </Box>
              </Box>
            </Box>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'action.hover', color: 'text.primary' }}>
                <People />
              </Avatar>
              <Box>
                <Typography variant="body2" color="text.secondary">Wakala Waliopo</Typography>
                <Typography variant="h4" fontWeight="bold">1</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <ArrowDownward color="error" fontSize="small" />
                  <Typography variant="caption" color="error.main" sx={{ ml: 0.5 }}>
                    3% kutoka jana
                  </Typography>
                </Box>
              </Box>
            </Box>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'action.hover', color: 'text.primary' }}>
                <Sync />
              </Avatar>
              <Box>
                <Typography variant="body2" color="text.secondary">Usawazishaji wa Mwisho</Typography>
                <Typography variant="h4" fontWeight="bold">Dakika 5 zilizopita</Typography>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{ mt: 2, height: 6, borderRadius: 3 }}
                />
              </Box>
            </Box>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'action.hover', color: 'text.primary' }}>
                <MonetizationOn />
              </Avatar>
              <Box>
                <Typography variant="body2" color="text.secondary">Jumla ya Ushuru</Typography>
                <Typography variant="h4" fontWeight="bold">Tsh8,245</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <ArrowUpward color="success" fontSize="small" />
                  <Typography variant="caption" color="success.main" sx={{ ml: 0.5 }}>
                    24% kutoka mwezi uliopita
                  </Typography>
                </Box>
              </Box>
            </Box>
          </StyledCard>
        </Grid>
      </Grid>

      {/* Main Content with New Charts */}
      <Grid container spacing={3}>
        {/* Charts Section */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DailyMnoTransactions />
            </Grid>
            <Grid item xs={12}>
              <TransactionVolumeChart />
            </Grid>
          </Grid>
        </Grid>

        {/* Right Sidebar */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TopServicesChart />
            </Grid>
            <Grid item xs={12}>
              <StyledCard>
                <Typography variant="h6" gutterBottom>
                  Shughuli za Hivi Punde
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
                              {activity.amount && ` (Tsh ${activity.amount.toLocaleString()})`}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
