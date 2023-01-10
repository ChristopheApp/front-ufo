import React, { useState } from 'react';
import { event } from '../../types/event';

import UDialog from "./UDialog";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


interface Props {
    children?: React.ReactNode;
    open: boolean;
    title: string;
    description: string;
    textButtonValid: string;
    handleClose: () => void;
    handleValid: (event: any) => void;
    eventProps: newEvent | event;
}
type newEvent = {
    name: string,
    location: string,
    description: string,
    date_start: string,
    date_end: string,
    locked: boolean
}

export default function UDialogEvent({ open, title, description, textButtonValid, eventProps, handleClose, handleValid } : Props) {

     // State to store the new event
     const [event, setEvent] = useState(eventProps);

    // Function to handle the change of the inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEvent(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    /**
     * Function to handle the click on the button valid
     * @returns {void}
     */
    const validForm = () => {
        console.log(event.name)
        console.log(event.location)
        console.log(event.date_start)
        console.log(typeof (event.date_start), new Date(event.date_start))
        console.log(new Date(event.date_end))
        console.log(JSON.stringify(new Date(Date.now())))
        const date1 = new Date(event.date_start)
        const date2 = new Date(event.date_end)
        if (date1 > date2) {
            console.log("La date de début doit être inférieure à la date de fin")
        } else {
            console.log("La date de début est inférieure à la date de fin")
            handleValid(event)
            console.log(event)

        }

    }

    const disabledButtonValid = () => {
        if (event.name !== '' && event.location !== '' && event.date_start !== '' && event.date_end !== '')
            return false
        else
            return true
    }

    const colorButtonValid = () => {
        if (event.date_end >= event.date_start)
            return "success"
        else
            return "warning"
    }

    return(
        <>
            <UDialog 
                title={title}
                description={description}
                open={open}
                handleClose={handleClose}
                handleValid={validForm}
                disabledButtonValid={disabledButtonValid()}
                colorButtonValid={colorButtonValid()}
                textButtonValid={textButtonValid}
            >
                
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="Nom"
                        type="title"
                        fullWidth={true}
                        variant="standard"
                        value={event.name}
                        name="name"
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="lieu"
                        label="Lieu"
                        type=""
                        fullWidth={true}
                        variant="standard"
                        value={event.location}
                        name="location"
                        onChange={handleChange}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <TextField
                            margin="dense"
                            id="description"
                            label="Description"
                            multiline
                            rows={4}
                            type=""
                            fullWidth={true}
                            variant="standard"
                            value={event.description}
                            name="description"
                            onChange={handleChange}
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >

                            <TextField
                                required
                                margin="dense"
                                id="startDate"
                                label="Date Début"
                                type="date"
                                fullWidth={false}
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={new Date(event.date_start).toISOString().split('T')[0]}
                                name="date_start"
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                margin="dense"
                                id="endDate"
                                label="Date Fin"
                                type="date"
                                fullWidth={false}
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={new Date(event.date_end).toISOString().split('T')[0]}
                                name="date_end"
                                onChange={handleChange}
                            />
                        </Box>
                    </Box>

            </UDialog>
        </>
    )
}