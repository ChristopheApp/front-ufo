import React, {useState, useEffect} from 'react';
import {event} from '../types/event';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { convertToObject } from 'typescript';


interface Props {
    children?: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    handleValid: (event: event) => void;
}

export default function DialogNewEvent({ open, handleClose, handleValid }: Props) {

    // State to store the new event
    const [event, setEvent] = useState<event>({
        name: '',
        location: '',
        date_start: '',
        date_end: ''
    });

    // Function to handle the change of the inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEvent(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    /**
     * Function to handle the click on the button to create a new event
     * @returns {void}
     */
    const validForm = () => {
        console.log(event.name)
        console.log(event.location)
        console.log(typeof(event.date_start), new Date(event.date_start))
        console.log( new Date(event.date_end))
        console.log(JSON.stringify(new Date(Date.now())))
        const date1 = new Date(event.date_start)
        const date2 = new Date(event.date_end)
        if(date1 > date2){
            console.log("La date de début doit être inférieure à la date de fin")
        }else{
            console.log("La date de début est inférieure à la date de fin")
            handleValid(event)
            console.log(event)

        }

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
                        margin="dense"
                        id="name"
                        label="Nom"
                        type="title"
                        fullWidth
                        variant="standard"
                        value={event.name}
                        name="name"
                        onChange={handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lieu"
                        label="Lieu"
                        type=""
                        fullWidth
                        variant="standard"
                        value={event.location}
                        name="location"
                        onChange={handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="startDate"
                        label="Date Début"
                        type="date"
                        fullWidth
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
                        margin="dense"
                        id="endDate"
                        label="Date Fin"
                        type="date"
                        fullWidth
                        variant="standard"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        value={event.date_end}
                        name="date_end"
                        onChange={handleChange}
                    />
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={validForm}>Créer</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
