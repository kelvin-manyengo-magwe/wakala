// src/App.tsx
import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Analytics from './pages/Analytics';
import Agents from './pages/Agents';
import SyncHistory from './pages/SyncHistory';
import Settings from './pages/Settings';
import Help from './pages/Help';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Memoize theme to prevent unnecessary recreations
  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#e63946',
        light: '#f8a5a5',
        dark: '#c1121f',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#3a86ff',
        light: '#a8d1ff',
        contrastText: '#ffffff',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f7fa',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      allVariants: {
        color: darkMode ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: 'background-color 0.3s ease',
          },
        },
      },
    },
  }), [darkMode]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleThemeChange = (darkMode: boolean) => {
    setDarkMode(darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Router>
        <div style={{
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default
        }}>
          <Sidebar open={sidebarOpen} onToggle={toggleSidebar} />
          <main
            style={{
              flex: 1,
              padding: '24px',
              marginLeft: sidebarOpen ? '250px' : '100px',
              transition: 'margin-left 0.3s ease, background-color 0.3s ease',
              backgroundColor: theme.palette.background.default,
              minHeight: '100vh',
              overflow: 'auto',
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/sync-history" element={<SyncHistory />} />
              <Route
                path="/settings"
                element={<Settings onThemeChange={handleThemeChange} />}
              />
              <Route path="/help" element={<Help />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
