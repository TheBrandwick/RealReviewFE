import { useWeb3 } from '@openzeppelin/network/react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
// components
import Iconify from '../components/iconify';
// sections

import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

const infuraProjectId = process.env.PRIVATE_GOERLI_ACCOUNT_KEY;
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const web3Context = useWeb3(`wss://ropsten.infura.io/ws/v3/${infuraProjectId}`);
  const { networkId, networkName, providerName } = web3Context;
  return (
    <>
      <Helmet>
        <title> Dashboard | RealReview </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome to RealReview
          <div className="App">
	<div>
	<h1>Infura + IPFS dApp</h1>
		<div>
    	Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}
		</div>
		<div>
		Provider: {providerName}
		</div>
	</div>
</div>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Review Given" total={714000} icon={'ant-design:book-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Earnings" total={1352831} color="info" icon={'ant-design:dollar-circle-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Nft Collected" total={1723315} color="warning" icon={'ant-design:smile-filled'} />
          </Grid>

          

          <ProductList products={PRODUCTS} />
        </Grid>
      </Container>
    </>
  );
}
