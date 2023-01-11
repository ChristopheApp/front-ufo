import { useState } from 'react'

import UDialog from '../UDialog'

// import { activity, newActivity } from '../../../types/activity';

import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';

import { categories } from '../../../utils/ActivityCategories';

interface Props {
    children?: React.ReactNode;
    open: boolean;
    title: string;
    description: string;
    handleClose: () => void;
    handleValid: () => void;
    activityProps: UfoActivity | UfoNewActivity;
}

export default function UDialogActivity({ open, title, description, handleClose, handleValid, activityProps }: Props) {

    const [activity, setActivity] = useState(activityProps);

    const [age, setAge] = useState('');

    const handleChangeAge = (event: SelectChangeEvent) => {
        setActivity(prev => ({ ...prev, [event.target.name]: event.target.value as string }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActivity(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <>
            <UDialog
                title={title}
                description={description}
                open={open}
                colorButtonValid="primary"
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
                    id="category"
                    label="Catégorie"
                    type="select"
                    fullWidth={true}
                    variant="standard"
                    value={activity.nb_fields}
                    name="category"
                    onChange={handleChange}
                />
                <FormControl fullWidth>

                    <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
                    <Select
                        id="category"
                        value={activity.category}
                        label="Catégorie"
                        name="category"
                        onChange={handleChangeAge}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </UDialog>
        </>
    )
}