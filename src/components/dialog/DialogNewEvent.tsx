import React, { useState, useEffect } from 'react';
import { event } from '../../types/event';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';

import { convertToObject } from 'typescript';
import { isDisabled } from '@testing-library/user-event/dist/utils';


interface Props {
    children?: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    handleValid: (event: event) => void;
}

export default function DialogNewEvent({ open, handleClose, handleValid }: Props) {

    const [bool] = useState(true);

    // State to store the new event
    const [event, setEvent] = useState<event>({
        name: '',
        location: '',
        description: '',
        date_start: '',
        date_end: '',
        locked: false
    });

    // Function to handle the change of the inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEvent(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    /**
     * Function to handle the click on the button to create a new event
     * @returns {void}
     */
    const validForm = () => {
        console.log(event.name)
        console.log(event.location)
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

    const disabledButtonCreate = () => {
        if (event.name !== '' && event.location !== '' && event.date_start !== '' && event.date_end !== '')
            return false
        else
            return true
    }

    const colorButtonCreate = () => {
        if (event.date_end >= event.date_start)
            return "success"
        else
            return "warning"
    }

    return (
        <div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Nouvel évènement</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Création d'un nouvel évènement, le nom, la date et le lieu sont obligatoire, le reste peut être ajouté plus tard.
                    </DialogContentText>
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
                        autoFocus
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
                            autoFocus
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

                                autoFocus
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
                                value={event.date_start}
                                name="date_start"
                                onChange={handleChange}
                            />
                            <TextField
                                autoFocus
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
                                value={event.date_end}
                                name="date_end"
                                onChange={handleChange}
                            />
                        </Box>
                    </Box>


                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<CloseRoundedIcon />}
                        onClick={handleClose}
                    >
                        Annuler
                    </Button>

                    <Button
                        variant="contained"
                        color={colorButtonCreate()}
                        endIcon={<EventAvailableRoundedIcon />}
                        onClick={validForm}
                        disabled={disabledButtonCreate()}
                    >
                        Créer
                    </Button>


                </DialogActions>
            </Dialog>
        </div>
    );
}
