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
  Box,
  Grid
} from '@mui/material';
import { Search, DateRange } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface Transaction {
  id: string;
  date: string;
  agent: string;
  phone: string;
  amount: number;
  type: string;
  status: 'Imefanikiwa' | 'Imeshindwa' | 'Inasubiri';
  commission: number;
}

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: theme.shadows[2],
  '& .MuiTableRow-root:hover': {
    backgroundColor: theme.palette.action.hover,
    cursor: 'pointer',
  },
  width: '100%',
  maxHeight: 'calc(100vh - 300px)',
  overflow: 'auto',
}));

const statusColors = {
  'Imefanikiwa': 'success',
  'Imeshindwa': 'error',
  'Inasubiri': 'warning',
} as const;

const transactionTypes = {
  'Amana': '#4caf50',
  'Makato': '#f44336',
  'Uhamisho': '#2196f3',
  'Malipo': '#ff9800'
} as const;

const Transactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // Data ya manunuzi
  const transactions: Transaction[] = [
    {
      id: 'TX1001',
      date: '2023-05-15 13:30:45',
      agent: 'Kelvin Magwe',
      customer: 'James Nasuwa',
      phone: '+254712345678',
      amount: 500,
      type: 'Amana',
      status: 'Imefanikiwa',
      commission: 125
    },
    {
      id: 'TX1002',
      date: '2025-04-15 10:15:22',
      agent: 'Kelvin Magwe',
      customer: 'Polycarp Joseph',
      phone: '+254723456789',
      amount: 8500,
      type: 'Amana',
      status: 'Imefanikiwa',
      commission: 85
    },
    {
      id: 'TX1003',
      date: '2025-05-08 11:05:33',
      agent: 'Kelvin Magwe',
      customer: 'Neema Shillingi',
      phone: '+254734567890',
      amount: 15000,
      type: 'Amana',
      status: 'Inasubiri',
      commission: 150
    },
    {
      id: 'TX1004',
      date: '2025-05-15 14:30:18',
      agent: 'Kelvin Magwe',
      customer: 'James Ludovick',
      phone: '+254745678901',
      amount: 500,
      type: 'Amana',
      status: 'Imeshindwa',
      commission: 46
    },
    // ... more transactions
  ];

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
      tx.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.agent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.phone.includes(searchTerm) ||
      tx.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDate = (
      (!fromDate || new Date(tx.date) >= new Date(fromDate)) &&
      (!toDate || new Date(tx.date) <= new Date(toDate))
    );

    return matchesSearch && matchesDate;
  });

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{
      width: '80vw',
      height: '100vh',
      p: 3,
      overflow: 'auto',
      backgroundColor: 'background.default',
    }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
        Historia ya Manunuzi
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Sehemu ya Utafutaji na Kuchagua */}
        <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Tafuta manunuzi..."
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
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                variant="outlined"
                type="date"
                label="Kuanzia Tarehe"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRange />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                variant="outlined"
                type="date"
                label="Hadi Tarehe"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRange />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Jedwali la Manunuzi */}
        <StyledTableContainer component={Paper}>
          <Table stickyHeader aria-label="jedwali la manunuzi">
            <TableHead>
              <TableRow>
                <TableCell>Kitambulisho</TableCell>
                <TableCell>Tarehe & Muda</TableCell>
                <TableCell>Wakala</TableCell>
                <TableCell>Mteja</TableCell>
                <TableCell>Simu</TableCell>
                <TableCell>Kiasi (Tsh)</TableCell>
                <TableCell>Aina</TableCell>
                <TableCell>Ushuru</TableCell>
                <TableCell>Hali</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((tx) => (
                  <TableRow hover key={tx.id}>
                    <TableCell>{tx.id}</TableCell>
                    <TableCell>{tx.date}</TableCell>
                    <TableCell>{tx.agent}</TableCell>
                    <TableCell>{tx.customer}</TableCell>
                    <TableCell>{tx.phone}</TableCell>
                    <TableCell>{tx.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Chip
                        label={tx.type}
                        sx={{
                          backgroundColor: transactionTypes[tx.type as keyof typeof transactionTypes] + '20',
                          color: transactionTypes[tx.type as keyof typeof transactionTypes]
                        }}
                      />
                    </TableCell>
                    <TableCell>{tx.commission.toLocaleString()}</TableCell>
                    <TableCell>
                      <Chip
                        label={tx.status}
                        color={statusColors[tx.status]}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredTransactions.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}
          />
        </StyledTableContainer>
      </motion.div>
    </Box>
  );
};

export default Transactions;
