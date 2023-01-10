import { useState, useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import TextField from '@mui/material/TextField';

// import type { event } from "../../../types/event";
// import type { activity } from '../../../types/activity';

interface Props {
    children?: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    handleValid: (activity: UfoActivity) => void;
    eventProp: UfoEvent;
    activityToEdit: UfoActivity
}

export default function FormEditActivity({ eventProp, open, handleClose, handleValid, activityToEdit }: Props) {

    const [activity, setActivity] = useState<UfoActivity>(activityToEdit);


    useEffect(() => {
        setActivity(activityToEdit)

    }, [activityToEdit])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActivity(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <>
            <Dialog
                // maxWidth={theme.breakpoints}
                open={open} 
                onClose={handleClose}
            >
                <DialogTitle>Modifier une activité</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Modifier l'activité {activity.name} de l'évènement {eventProp.name}.
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
                        value={activity.name}
                        name="name"
                        onChange={handleChange}
                    />

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="fields"
                        label="Nombre de terrains"
                        type="number"
                        fullWidth={true}
                        variant="standard"
                        value={activity.nb_fields}
                        name="nb_fields"
                        onChange={handleChange}
                    />

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="teams"
                        label="Nombre d'équipes'"
                        type="number"
                        fullWidth={true}
                        variant="standard"
                        value={activity.nb_teams}
                        name="nb_teams"
                        onChange={handleChange}
                    />
                    
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="points"
                        label="Nombre de points'"
                        type="number"
                        fullWidth={true}
                        variant="standard"
                        value={activity.nb_teams}
                        name="points"
                        onChange={handleChange}
                    />
                    {/* {!activities ? <p>Aucune activité</p> : <p>Des activités <ButtonEdit/></p>}

                    <ButtonAdd
                        onClick={handleClose}
                    /> */}
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
                        // color={colorButtonValid()}
                        endIcon={<EventAvailableRoundedIcon />}
                        onClick={() => handleValid(activity)}
                    // disabled={disabledButtonValid()}
                    >
                        Enregistrer
                    </Button>


                </DialogActions>
            </Dialog>
        </>
    )
}