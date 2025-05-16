import React, { useState } from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Switch,
  Divider,
  TextField,
  Button,
  Grid,
  FormControlLabel,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: '20px',
  borderRadius: '12px',
  boxShadow: theme.shadows[2],
  marginBottom: '20px',
}));

interface SettingsProps {
  onThemeChange: (darkMode: boolean) => void;
}

const Settings: React.FC<SettingsProps> = ({ onThemeChange }) => {
  const [autoSync, setAutoSync] = useState(true);
  const [dataRetention, setDataRetention] = useState(30);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveSettings = () => {
    console.log('Mipangilio imehifadhiwa');
    // Add actual save logic here
  };

  const handleChangePassword = () => {
    console.log('Nenosiri limebadilishwa');
    // Add actual password change logic here
  };

  const handleDarkModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(e.target.checked);
    onThemeChange(e.target.checked);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Mipangilio
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <StyledCard>
          <Typography variant="h6" gutterBottom>
            Mipangilio ya Jumla
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Usawazishaji Otomatiki"
                secondary="Sawazisha data na wakala kiotomatiki"
              />
              <Switch
                checked={autoSync}
                onChange={(e) => setAutoSync(e.target.checked)}
                color="primary"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Uhifadhi wa Data"
                secondary="Idadi ya siku za kuhifadhi rekodi za manunuzi"
              />
              <TextField
                type="number"
                value={dataRetention}
                onChange={(e) => setDataRetention(Number(e.target.value))}
                size="small"
                sx={{ width: '80px' }}
                inputProps={{ min: 1, max: 365 }}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Hali ya Giza"
                secondary="Badilisha kati ya mandhari ya mwangaza na giza"
              />
              <Switch
                checked={darkMode}
                onChange={handleDarkModeChange}
                color="primary"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Arifa"
                secondary="Wezesha au zima arifa za mfumo"
              />
              <Switch
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                color="primary"
              />
            </ListItem>
          </List>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveSettings}
            >
              Hifadhi Mipangilio
            </Button>
          </Box>
        </StyledCard>

        <StyledCard>
          <Typography variant="h6" gutterBottom>
            Badilisha Nenosiri
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nenosiri la Sasa"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nenosiri Jipya"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Thibitisha Nenosiri Jipya"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleChangePassword}
            >
              Badilisha Nenosiri
            </Button>
          </Box>
        </StyledCard>
      </motion.div>
    </div>
  );
};

export default Settings;
