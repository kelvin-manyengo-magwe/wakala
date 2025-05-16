import React from 'react';
import { Box, Button, Container, Grid, Typography, Paper, Avatar, useTheme } from '@mui/material';
import { AccountBalanceWallet, People, Sync, ArrowForward } from '@mui/icons-material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff'
    }}>
        
    </Box>
  );
};

export default HomePage;
