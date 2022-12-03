import { DatePicker } from '@mui/lab';
import { Box, Button, Radio, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import { te } from 'date-fns/locale';
import { options } from 'numeral';
import React, { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    minHeight: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AttemptSurveyForm({ surveyData, onClose }) {
    const [step, setstep] = useState(0);
    
    return (
        <Box sx={style} >
            {step === 0 && <>
            <Stack direction="column">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Attempt Survey: {surveyData?.name}
                </Typography>
                <Stack>Please ensure the information provided is true.</Stack>
                <Stack margin="dense"><Button variant='contained' onClick={() => {setstep(step + 1);}}>Start Survey</Button></Stack>
                </Stack>
            </>}
            {step >=1 && <>
            {surveyData?.questions?.map((ques, q_index) => {
                if(step-1 === q_index){
                    return <>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    {ques?.title}
                </Typography>
                   {ques?.options?.map((item, index) => {
                       return <Stack key={index} direction="row">
                           <Radio />
                           <Stack >{item?.title}</Stack>
                       </Stack>
                   })}
                   {q_index !== surveyData?.questions.length-1 && <Stack marginBottom={1} ><Button variant='outlined' onClick={()=>{setstep(step+1);}} >Next</Button></Stack>}
                   {q_index === surveyData?.questions.length-1 && <Stack marginBottom={1} ><Button variant='outlined' onClick={()=>{onClose()}} >Submit</Button></Stack>}
                   </>
                }

            })}
               
            </>}

        </Box>
    )
}

export default AttemptSurveyForm