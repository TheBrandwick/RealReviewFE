import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

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
  
function CreateSurveyForm() {
    return (
        <Box sx={style} >
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Create Your Survey
            </Typography>
            <TextField fullWidth label="Name" id="name" />
            <TextField type="number" fullWidth label="Partcipants" id="name" />

            <TextField fullWidth label="Type Your Question" id="fullWidth" />
        </Box>
    )
}

export default CreateSurveyForm