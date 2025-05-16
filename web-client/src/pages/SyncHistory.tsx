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
  Chip,
  Typography,
  TablePagination,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Search, Sync, MoreVert, CloudDownload } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface SyncEvent {
  id: string;
  timestamp: string;
  agent: string;
  records: number;
  status: 'Imekamilika' | 'Imeshindwa' | 'Inaendelea';
}

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: theme.shadows[2],
  '& .MuiTableRow-root:hover': {
    backgroundColor: theme.palette.primary.light + '20',
  },
}));

const statusColors = {
  'Imekamilika': 'success',
  'Imeshindwa': 'error',
  'Inaendelea': 'warning',
} as const;

const SyncHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSync, setSelectedSync] = useState<string | null>(null);

  const syncEvents: SyncEvent[] = [
    {
      id: 'SYNC001',
      timestamp: '2023-05-01 09:30:45',
      agent: 'Kelvin Magwe',
      records: 124,
      status: 'Imekamilika',
    },
    {
      id: 'SYNC002',
      timestamp: '2023-05-01 10:15:22',
      agent: 'Kelvin Magwe',
      records: 89,
      status: 'Imekamilika',
    },
    {
      id: 'SYNC003',
      timestamp: '2023-05-02 11:20:33',
      agent: 'Kelvin Magwe',
      records: 0,
      status: 'Imeshindwa',
    },
    /*{
      id: 'SYNC004',
      timestamp: '2023-05-02 14:45:18',
      agent: 'Kelvin Magwe',
      records: 67,
      status: 'Inaendelea',
    },*/
    // Add more sync events...
  ];

  const filteredSyncEvents = syncEvents.filter((event) =>
    event.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.agent.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.status.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedSync(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedSync(null);
  };

  const handleRetry = () => {
    console.log(`Rudia usawazishaji ${selectedSync}`);
    handleMenuClose();
  };

  const handleDownload = () => {
    console.log(`Pakua hati za usawazishaji ${selectedSync}`);
    handleMenuClose();
  };

  return (
    <div style={{ margin: '0 auto', width: '80vw' }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Historia ya Usawazishaji
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
            placeholder="Tafuta matukio ya usawazishaji..."
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
                <TableCell>Kitambulisho</TableCell>
                <TableCell>Muda</TableCell>
                <TableCell>Wakala</TableCell>
                <TableCell>Rekodi</TableCell>
                <TableCell>Hali</TableCell>
                <TableCell>Vitendo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSyncEvents
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>{event.id}</TableCell>
                    <TableCell>{event.timestamp}</TableCell>
                    <TableCell>{event.agent}</TableCell>
                    <TableCell>{event.records}</TableCell>
                    <TableCell>
                      <Chip
                        label={event.status}
                        color={statusColors[event.status]}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={(e) => handleMenuOpen(e, event.id)}>
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
            count={filteredSyncEvents.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </StyledTableContainer>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleRetry}>
            <Sync fontSize="small" sx={{ mr: 1 }} />
            Rudia Usawazishaji
          </MenuItem>
          <MenuItem onClick={handleDownload}>
            <CloudDownload fontSize="small" sx={{ mr: 1 }} />
            Pakua Hati
          </MenuItem>
        </Menu>
      </motion.div>
    </div>
  );
};

export default SyncHistory;
