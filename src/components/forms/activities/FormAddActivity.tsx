import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


// import type { event } from "../../../types/event";
// import type { activity } from '../../../types/activity';

interface Props {
    children?: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    handleValid: (eventId: number, activity: any) => void;
    eventProp: UfoEvent;
    activities: UfoActivity[]
}

export default function FormAddActivity({ eventProp, open, handleClose, handleValid, activities }: Props) {

    const defaultProps = {
        options: activities,
        getOptionLabel: (option: UfoActivity) => option.name + " - " + option.nb_fields + " terrains - " + option.nb_teams + " équipes - ",
    };

    const [value, setValue] = useState<UfoActivity | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [event, setEvent] = useState<UfoEvent>(eventProp);
    const [activity, setActivity] = useState({
        name: "",
        nb_fields: 0,
        nb_teams: 0,
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActivity(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const autoFillActivity = (activity: UfoActivity | null) => {
        if (activity) {
            console.log(activity)
            setActivity({
                name: activity.name,
                nb_fields: activity.nb_fields,
                nb_teams: activity.nb_teams,
            })
        }
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Ajouter une activité à l'évènement {eventProp.name}.</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ajouter une activité, vous pouvez pré-remplir les champs avec une activité déjà existante.
                    </DialogContentText>

                    <Autocomplete
                        id="combo-box-demo"
                        {...defaultProps}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        value={value}
                        onChange={(event: any, newValue: UfoActivity | null) => {
                            autoFillActivity(newValue);
                            //setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />

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
                        onClick={() => handleValid(event._id, activity)}
                    // disabled={disabledButtonValid()}
                    >
                        Enregistrer
                    </Button>


                </DialogActions>
            </Dialog>
        </>
    )
}