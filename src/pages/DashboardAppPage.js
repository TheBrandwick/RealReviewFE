import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';


// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Button, Modal, Box, TextField } from '@mui/material';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock

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

import CreateSurveyForm from 'src/components/CreateSurvey';


const infuraProjectId = process.env.PRIVATE_GOERLI_ACCOUNT_KEY;
// ----------------------------------------------------------------------

const init_data = [
  {
    name: "Survey #1",
    reward: "0.5",
    participant_count: "9",
    status: 'Active',

  },
  {
    name: "Survey #3",
    reward: "0.01",
    participant_count: "22",
    status: 'Active'
  },
  {
    name: "Survey #4",
    reward: "0.001",
    participant_count: "5",
    status: 'Closed'
  },
  {
    name: "Survey #7",
    reward: "0.8",
    participant_count: "1",
    status: 'Claim'
  },
  {
    name: "Survey #9",
    reward: "0.001",
    participant_count: "5",
    status: 'Active'
  },
  {
    name: "Survey #10",
    reward: "0.8",
    participant_count: "1",
    status: 'Active'
  },
]

export default function DashboardAppPage({ createSurvey }) {
  const [surveys, setSurveys] = useState(init_data)
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addNewSurvey = (metadata, questions) => {
    let new_data = {
      name: metadata.name,
      reward: metadata.reward_per_participants,
      participant_count: metadata.no_of_participants,
      status: 'Active',
      questions: questions
    }
    setTimeout(()=>{
      handleClose()
      setTimeout(()=>{
        setSurveys(prev => ([new_data, ...prev]))
      },1000)
      
    },1000)
   
  }
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



          <ProductList products={surveys} />
        </Grid>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateSurveyForm createSurvey={createSurvey} addNewSurvey={addNewSurvey} />
      </Modal>
    </>
  );
}
