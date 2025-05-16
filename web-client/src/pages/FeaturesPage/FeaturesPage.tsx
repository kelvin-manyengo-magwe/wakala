// pages/FeaturesPage.tsx
import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon } from '@mui/material';
import { CheckCircle, Security, Assessment, Devices, Receipt, Support } from '@mui/icons-material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle color="primary" />,
      title: "Simplified Transactions",
      description: "Effortlessly manage Wakala transactions with our intuitive interface"
    },
    {
      icon: <Security color="primary" />,
      title: "Secure Platform",
      description: "Military-grade encryption protects all your transactions"
    },
    {
      icon: <Assessment color="primary" />,
      title: "Automated Reporting",
      description: "Generate detailed reports automatically for accounting and compliance"
    },
    {
      icon: <Devices color="primary" />,
      title: "Multi-Device Access",
      description: "Access your account from any device with full functionality"
    },
    {
      icon: <Receipt color="primary" />,
      title: "Real-Time Tracking",
      description: "Monitor transactions as they happen with live updates"
    },
    {
      icon: <Support color="primary" />,
      title: "Dedicated Support",
      description: "24/7 support from our team of Wakala experts"
    }
  ];

  return (
    <Box>
      <Header />
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Key Features
          </Typography>
          <Typography variant="h5">
            Transforming Wakala Transaction Monitoring
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {feature.icon}
                  </ListItemIcon>
                  <Typography variant="h5" fontWeight="bold">
                    {feature.title}
                  </Typography>
                </Box>
                <Typography>{feature.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            Automated Profit & Interest Calculation
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <List>
                {[
                  "Calculate profit and interest automatically",
                  "Customizable calculation formulas",
                  "100% accurate financial tracking",
                  "Real-time reports and statements"
                ].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="/images/calculation-feature.png"
                alt="Calculation Feature"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default FeaturesPage;
