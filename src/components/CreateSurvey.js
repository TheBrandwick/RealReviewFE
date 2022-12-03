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
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function CreateSurveyForm({ createSurvey, addNewSurvey, onClose }) {
    const [step, setstep] = useState(0);
    const [questions, setQuestions] = useState([]);

    const addQuestions = () => {
        setQuestions(prev => ([...prev, {
            title: "",
            options: [
                {
                    "title": ""
                },
                {
                    "title": ""
                },
                {
                    "title": ""
                },
                {
                    "title": ""
                },
            ]
        }]))
    }
    const updateOptionField = (q_index, o_index, value) => {
        let temp_questions = [...questions];
        temp_questions[q_index].options[o_index].title = value
        setQuestions(temp_questions)
    }
    const updateQuestionField = (q_index, value) => {
        let temp_questions = [...questions];
        temp_questions[q_index].title = value
        setQuestions(temp_questions)
    }
    console.log({ createSurvey })
    return (
        <Box sx={style} >
            {step === 0 && <>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create Your Survey
                </Typography>
                <TextField fullWidth label="Name" id="name" margin="dense" />
                <TextField type="number" fullWidth label="Participants" id="name" margin="dense" />
                <TextField type="number" fullWidth label="Reward per participant" id="name" margin="dense" />

                {/* <DatePicker */}
                <TextField type="date" fullWidth label="" id="fullWidth" margin="dense" />
                <Stack margin="dense"><Button variant='contained' onClick={() => {setstep(step + 1); addQuestions();}}>Next</Button></Stack>
            </>}
            {step >=1 && <>
            {questions?.map((ques, q_index) => {
                if(step-1 === q_index){
                    return <>
                    <TextField type="text" fullWidth label={`Question no. ${q_index+1}`} value={questions[q_index]?.title} onChange={e => updateQuestionField(q_index, e.target.value)}/>
                   {ques?.options?.map((item, index) => {
                       return <Stack key={index} direction="row">
                           <Radio disabled />
                           <TextField type="text" fullWidth label={`Option ${index+1}`} id="fullWidth" margin="dense"  value={questions[q_index]?.options[index]?.title} onChange={e => updateOptionField(q_index, index, e.target.value)} />
                       </Stack>
                   })}
                   <Stack marginBottom={1} ><Button variant='outlined' onClick={()=>{setstep(step+1); addQuestions()}} >Add Question</Button></Stack>
                   <Stack margin="dense" ><Button variant='contained' onClick={()=>{addNewSurvey(questions)}} margin="dense">Finish</Button></Stack>
                   </>
                }

            })}
               
            </>}

        </Box>
    )
}

export default CreateSurveyForm