import { useEffect, useState } from 'react';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';

import useWallet from './hooks/useWallet';
import { Stack } from '@mui/system';
import { Button, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function App() {
  const [accountAddress, setAccountAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [haveMetamask, sethaveMetamask] = useState(false);

  const { ethereum } = window;
  const {
    loadBlockchainData,
    createSurvey
  } = useWallet(accountAddress);
  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccountAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };
  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      {!haveMetamask && <div>Metamask wallet not found!</div>}
      {haveMetamask && !isConnected && <Stack direction="column" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant='h2'>Welcome to RealReview!</Typography>
        <Button onClick={connectWallet} variant="contained" size='largegita '>Connect Wallet</Button>
        </Stack>}
      {isConnected && <Router createSurvey={createSurvey} accountAddress={accountAddress}/>}
    </ThemeProvider>
  );
}
