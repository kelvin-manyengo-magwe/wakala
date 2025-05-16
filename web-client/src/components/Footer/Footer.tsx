import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Wakala Transaction Monitoring
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Empowering agents with real-time transaction insights and management tools.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block">Home</Link>
            <Link href="/features" color="inherit" display="block">Features</Link>
            <Link href="/contact" color="inherit" display="block">Contact</Link>
            <Link href="/login" color="inherit" display="block">Login</Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dar es Salaam, Tanzania
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@wakalatransaction.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +255 123 456 789
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ pt: 4, mt: 4, borderTop: '1px solid rgba(0,0,0,0.12)' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Wakala Transaction Monitoring. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
