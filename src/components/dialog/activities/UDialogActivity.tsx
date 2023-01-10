import { useState } from 'react'

import UDialog from '../UDialog'

import { activity, newActivity } from '../../../types/activity';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface Props {
    children?: React.ReactNode;
    open: boolean;
    title: string;
    description: string;
    handleClose: () => void;
    handleValid: () => void;
    activityProps: activity | newActivity;
}

export default function UDialogActivity({ open, title, description, handleClose, handleValid, activityProps} : Props) {

    const [activity, setActivity] = useState(activityProps);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActivity(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return(
        <>
            <UDialog 
                title={title}
                description={description}
                open={open}
                colorButtonValid="succes"
                textButtonValid="Enregistrer"
                disabledButtonValid={false}
                handleClose={handleClose}
                handleValid={handleValid}
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
                        value={activity.points}
                        name="points"
                        onChange={handleChange}
                    />

            </UDialog>
        </>
    )
}