import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  Avatar,
  Chip,
  Typography,
  TablePagination,
  IconButton,
} from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface Agent {
  id: string;
  name: string;
  phone: string;
  status: 'Active' | 'Inactive' | 'Suspended';
  totalTransactions: number;
  lastSync: string;
  avatar?: string;
}

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: theme.shadows[2],
  '& .MuiTableRow-root:hover': {
    backgroundColor: theme.palette.primary.light + '20',
  },
}));

const statusColors = {
  Active: 'success',
  Inactive: 'default',
  Suspended: 'error',
} as const;

const statusLabels: Record<Agent["status"], string> = {
  Active: 'Anatumika',
  Inactive: 'Haitumiki',
  Suspended: 'Imesimamishwa',
};

const Agents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const agents: Agent[] = [
    {
      id: 'AG001',
      name: 'Kelvin Magwe',
      phone: '+255 712 345 678',
      status: 'Active',
      totalTransactions: 124,
      lastSync: 'Dakika 4 zilizopita',
      avatar: 'KM',
    },
    /*{
      id: 'AG002',
      name: 'Jane Smith',
      phone: '+255 713 456 789',
      status: 'Active',
      totalTransactions: 89,
      lastSync: 'Dakika 10 zilizopita',
      avatar: 'JS',
    },
    {
      id: 'AG003',
      name: 'Mike Johnson',
      phone: '+255 714 567 890',
      status: 'Inactive',
      totalTransactions: 45,
      lastSync: 'Masaa 2 yaliyopita',
      avatar: 'MJ',
    },
    {
      id: 'AG004',
      name: 'Sarah Williams',
      phone: '+255 715 678 901',
      status: 'Suspended',
      totalTransactions: 67,
      lastSync: 'Siku 1 iliyopita',
      avatar: 'SW',
    },*/
    // Add more agents...
  ];

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.phone.includes(searchTerm) ||
    agent.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ width: '80vw', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Mawakala
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Paper
          sx={{
            p: 2,
            mb: 3,
            borderRadius: '12px',
            boxShadow: `0 0 15px rgba(230, 57, 70, 0.1)`,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Tafuta wakala..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Paper>

        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Wakala</TableCell>
                <TableCell>Simu</TableCell>
                <TableCell>Hali</TableCell>
                <TableCell>Miamala</TableCell>
                <TableCell>Usawazishaji wa Mwisho</TableCell>
                <TableCell>Vitendo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAgents
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((agent) => (
                  <TableRow key={agent.id}>
                    <TableCell>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Avatar sx={{ bgcolor: '#e63946' }}>
                          {agent.avatar}
                        </Avatar>
                        <div>
                          <div>{agent.name}</div>
                          <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>
                            {agent.id}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{agent.phone}</TableCell>
                    <TableCell>
                      <Chip
                        label={statusLabels[agent.status]}
                        color={statusColors[agent.status]}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{agent.totalTransactions}</TableCell>
                    <TableCell>{agent.lastSync}</TableCell>
                    <TableCell>
                      <IconButton>
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            labelRowsPerPage="Safu kwa kila ukurasa:"
            count={filteredAgents.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </StyledTableContainer>
      </motion.div>
    </div>
  );
};

export default Agents;
