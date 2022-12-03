import { useEffect, useState } from 'react';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';


// ----------------------------------------------------------------------

export default function App() {
  const [accountAddress, setAccountAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [haveMetamask, sethaveMetamask] = useState(false);

  const { ethereum } = window;

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
      {haveMetamask && !isConnected && <button className="btn" onClick={connectWallet}>
  Connect
</button>}
      {isConnected && <Router />}
    </ThemeProvider>
  );
}
