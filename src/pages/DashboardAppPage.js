import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';


// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography,Stack,Button ,Modal,Box,TextField} from '@mui/material';
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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function DashboardAppPage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
         <Button onClick={handleOpen} variant="contained">Create Survey</Button>
            
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

      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} >
  <Typography id="modal-modal-title" variant="h6" component="h2">
      Create Your Survey
    </Typography>
    <TextField fullWidth label="Name" id="name" />
    <TextField type="number" fullWidth label="Partcipants" id="name" />

  <TextField fullWidth label="Type Your Question" id="fullWidth" />
  </Box>
</Modal>
    </>
  );
}
