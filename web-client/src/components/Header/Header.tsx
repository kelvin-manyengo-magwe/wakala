import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { AccountBalanceWallet } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccountBalanceWallet color="primary" sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Wakala Transaction
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/features">Features</Button>
          <Button color="inherit" href="/contact">Contact</Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
            href="/login"
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
