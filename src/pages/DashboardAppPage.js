import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography,Stack,Button } from '@mui/material';
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

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | RealReview </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome to RealReview
        </Typography>
        <Stack direction="row" alignItems={"flex-end"} justifyContent={"flex-end"} spacing={1} flexShrink={0} sx={{ my: 2 }}>
         <Button variant="contained">Create Survey</Button>
            
          </Stack>
        <Grid container spacing={3} sx={{ my: 2 }}>
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
