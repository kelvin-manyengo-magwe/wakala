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
    question: 'Ninawezaje kuongeza wakala mpya?',
    answer: 'Nenda kwenye ukurasa wa "Wakala" na bofya kitufe cha "Ongeza Wakala". Jaza maelezo yanayohitajika kisha wasilisha fomu hiyo.',
  },
  {
    question: 'Kwa nini muamala umeashwa kuwa umeshindwa?',
    answer: 'Miamala inaweza kushindwa kwa sababu mbalimbali kama matatizo ya mtandao, fedha hazitoshi, au makosa ya mfumo. Angalia maelezo ya muamala kwa habari zaidi.',
  },
  {
    question: 'Mfumo husawazishwa mara ngapi na wakala?',
    answer: 'Kwa chaguo-msingi, mfumo husawazishwa kila baada ya dakika 5. Unaweza kubadilisha hii kwenye ukurasa wa Mipangilio.',
  },
  {
    question: 'Ninawezaje kubadilisha nenosiri langu?',
    answer: 'Nenda kwenye ukurasa wa Mipangilio na utumie sehemu ya "Badilisha Nenosiri" kuweka nenosiri jipya.',
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
    console.log('Ujumbe uliotumwa:', message);
    setMessage('');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Usaidizi & Msaada
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <StyledCard>
          <Typography variant="h6" gutterBottom>
            Maswali Yanayoulizwa Mara kwa Mara
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
            Wasiliana na Timu ya Usaidizi
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Andika ujumbe wako hapa..."
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
