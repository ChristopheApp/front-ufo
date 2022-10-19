import * as React from 'react';
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
    handleValid: () => void;
}

export default function DialogNewEvent({ open, handleClose, handleValid }: Props) {

    const [name, setName] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');


    const validForm = () => {
        console.log(name)
        console.log(location)
        console.log(startDate, new Date(startDate))
        console.log( new Date(endDate))
        console.log(JSON.stringify(new Date(Date.now())))
        const date1 = new Date(startDate)
        const date2 = new Date(endDate)
        if(date1 > date2){
            console.log("La date de début doit être inférieure à la date de fin")
        }else{
            console.log("La date de début est inférieure à la date de fin")
            handleValid()
            submitEvent()

        }

    }

    const submitEvent = async () => { 
        const data = {
            name: name,
            location: location,
            start_date: new Date(startDate),
            end_date: new Date(endDate)
        }
        const response = await fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result)
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
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setName(event.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lieu"
                        label="Lieu"
                        type=""
                        fullWidth
                        variant="standard"
                        value={location}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setLocation(event.target.value);
                        }}
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
                        value={startDate}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setStartDate(event.target.value);
                        }}
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
                        value={endDate}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setEndDate(event.target.value);
                        }}
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
