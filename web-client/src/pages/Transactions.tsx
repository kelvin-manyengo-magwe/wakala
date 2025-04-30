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
  status: 'Success' | 'Failed' | 'Pending';
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
  Success: 'success',
  Failed: 'error',
  Pending: 'warning',
} as const;

const transactionTypes = {
  Deposit: '#4caf50',
  Withdrawal: '#f44336',
  Transfer: '#2196f3',
  Payment: '#ff9800'
} as const;

const Transactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // Complete transaction data
  const transactions: Transaction[] = [
    {
      id: 'TX1001',
      date: '2023-06-15 09:30:45',
      agent: 'John Mwangi',
      phone: '+254712345678',
      amount: 12500,
      type: 'Deposit',
      status: 'Success',
      commission: 125
    },
    {
      id: 'TX1002',
      date: '2023-06-15 10:15:22',
      agent: 'Sarah Kamau',
      phone: '+254723456789',
      amount: 8500,
      type: 'Withdrawal',
      status: 'Success',
      commission: 85
    },
    {
      id: 'TX1003',
      date: '2023-06-15 11:05:33',
      agent: 'David Ochieng',
      phone: '+254734567890',
      amount: 15000,
      type: 'Transfer',
      status: 'Pending',
      commission: 150
    },
    {
      id: 'TX1004',
      date: '2023-06-15 14:30:18',
      agent: 'Grace Wambui',
      phone: '+254745678901',
      amount: 5000,
      type: 'Payment',
      status: 'Failed',
      commission: 50
    },
    {
      id: 'TX1005',
      date: '2023-06-16 08:45:52',
      agent: 'Michael Njoroge',
      phone: '+254756789012',
      amount: 18000,
      type: 'Deposit',
      status: 'Success',
      commission: 180
    },
    {
      id: 'TX1006',
      date: '2023-06-16 12:20:37',
      agent: 'Esther Muthoni',
      phone: '+254767890123',
      amount: 7500,
      type: 'Withdrawal',
      status: 'Success',
      commission: 75
    },
    {
      id: 'TX1007',
      date: '2023-06-17 10:10:15',
      agent: 'Peter Kariuki',
      phone: '+254778901234',
      amount: 22000,
      type: 'Transfer',
      status: 'Success',
      commission: 220
    },
    {
      id: 'TX1008',
      date: '2023-06-17 15:45:29',
      agent: 'Lilian Atieno',
      phone: '+254789012345',
      amount: 3000,
      type: 'Payment',
      status: 'Pending',
      commission: 30
    },
    {
      id: 'TX1009',
      date: '2023-06-18 09:15:42',
      agent: 'James Mutua',
      phone: '+254790123456',
      amount: 12000,
      type: 'Deposit',
      status: 'Success',
      commission: 120
    },
    {
      id: 'TX1010',
      date: '2023-06-18 13:30:55',
      agent: 'Nancy Wanjiru',
      phone: '+254701234567',
      amount: 9500,
      type: 'Withdrawal',
      status: 'Failed',
      commission: 95
    },
    {
      id: 'TX1011',
      date: '2023-06-19 11:20:18',
      agent: 'Robert Omollo',
      phone: '+254712345678',
      amount: 16000,
      type: 'Transfer',
      status: 'Success',
      commission: 160
    },
    {
      id: 'TX1012',
      date: '2023-06-19 16:10:33',
      agent: 'Cynthia Achieng',
      phone: '+254723456789',
      amount: 7000,
      type: 'Payment',
      status: 'Success',
      commission: 70
    }
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
        Transaction History
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Search and Filter Section */}
        <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search transactions..."
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
                label="From Date"
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
                label="To Date"
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

        {/* Transactions Table */}
        <StyledTableContainer component={Paper}>
          <Table stickyHeader aria-label="transactions table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date & Time</TableCell>
                <TableCell>Agent</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Amount (Ksh)</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Commission</TableCell>
                <TableCell>Status</TableCell>
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
