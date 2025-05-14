// src/components/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Tooltip
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Receipt as ReceiptIcon,
  Analytics as AnalyticsIcon,
  People as PeopleIcon,
  Sync as SyncIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const SidebarContainer = styled('div')(({ theme }) => ({
  width: '250px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(30, 30, 30, 0.8)'
    : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: theme.shadows[4],
  padding: '20px 0',
  borderRight: `1px solid ${theme.palette.divider}`,
  position: 'fixed',
  height: '100vh',
  zIndex: 1200,
  transition: 'width 0.3s ease, transform 0.3s ease',
  overflow: 'hidden',
}));

const Logo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  marginBottom: '20px',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  fontSize: '1.5rem',
  minHeight: '64px'
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  margin: '20px 8px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.light + '20',
    boxShadow: theme.shadows[2],
  },
  '&.active': {
    backgroundColor: theme.palette.primary.light + '40',
    color: theme.palette.primary.dark,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.dark,
    },
  },
}));

const navItems = [
  { path: '/', icon: <DashboardIcon />, text: 'Dashibodi' },
  { path: '/transactions', icon: <ReceiptIcon />, text: 'Miamala' },
  { path: '/analytics', icon: <AnalyticsIcon />, text: 'Taarifa za takwimu' },
  { path: '/agents', icon: <PeopleIcon />, text: 'Mawakala' },
  { path: '/sync-history', icon: <SyncIcon />, text: 'Historia ya Usawazishaji' },
  { path: '/settings', icon: <SettingsIcon />, text: 'Mipanglio' },
  { path: '/help', icon: <HelpIcon />, text: 'Msaada' },
];

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onToggle }) => {
  const location = useLocation();

  return (
    <SidebarContainer
      sx={{
        width: open ? 250 : 72,
        transform: open ? 'translateX(0)' : 'translateX(0)',
      }}
    >
      <Logo>
        {open ? 'Wakala' : (
          <IconButton onClick={onToggle}>
            <MenuIcon />
          </IconButton>
        )}
        {open && (
          <IconButton onClick={onToggle} size="small">
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Logo>

      <Divider />

      <List>
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              {open ? (
                <StyledListItem
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  <ListItemIcon sx={{ minWidth: '40px' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </StyledListItem>
              ) : (
                <Tooltip title={item.text} placement="right">
                  <StyledListItem
                    className={location.pathname === item.path ? 'active' : ''}
                    sx={{ justifyContent: 'center' }}
                  >
                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                      {item.icon}
                    </ListItemIcon>
                  </StyledListItem>
                </Tooltip>
              )}
            </motion.div>
          </Link>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
