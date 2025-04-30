// src/pages/Help.tsx
import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import { ExpandMore, Send, HelpOutline } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: '20px',
  borderRadius: '12px',
  boxShadow: theme.shadows[2],
  marginBottom: '20px',
}));

const FAQ = [
  {
    question: 'How do I add a new agent?',
    answer: 'Go to the Agents page and click on the "Add Agent" button. Fill in the required details and submit the form.',
  },
  {
    question: 'Why is a transaction marked as failed?',
    answer: 'Transactions can fail due to various reasons like network issues, insufficient funds, or system errors. Check the transaction details for more information.',
  },
  {
    question: 'How often does the system sync with agents?',
    answer: 'By default, the system syncs every 5 minutes. You can change this in the Settings page.',
  },
  {
    question: 'How do I reset my password?',
    answer: 'Go to the Settings page and use the "Change Password" section to reset your password.',
  },
];

const Help: React.FC = () => {
  const [message, setMessage] = useState('');
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleSendMessage = () => {
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Help & Support
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <StyledCard>
          <Typography variant="h6" gutterBottom>
            Frequently Asked Questions
          </Typography>
          {FAQ.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </StyledCard>

        <StyledCard>
          <Typography variant="h6" gutterBottom>
            Contact Support
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={3}
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              disabled={!message}
              sx={{ alignSelf: 'flex-end' }}
            >
              <Send />
            </IconButton>
          </Box>
        </StyledCard>

        <Box
          sx={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              sx={{
                backgroundColor: '#e63946',
                color: 'white',
                width: '60px',
                height: '60px',
                boxShadow: '0 0 15px rgba(230, 57, 70, 0.5)',
              }}
            >
              <HelpOutline fontSize="large" />
            </IconButton>
          </motion.div>
        </Box>
      </motion.div>
    </div>
  );
};

export default Help;
