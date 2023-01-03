import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';

import ButtonAdd from '../buttons/ButtonAdd';
import ButtonEdit from '../buttons/ButtonEdit';


import type { event } from "../../types/event";
import { activity } from '../../types/activity';

interface Props {
    children?: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    handleValid: () => void;
    handleAddActivity: () => void;
    eventProp: event;
    activities?: activity
}

export default function FormActivities({ eventProp, open, handleClose, handleValid, handleAddActivity, activities }: Props) {

    // function handleAddActivity() {
    //     console.log("open add activity form")
    // }

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Activités</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ajouter, supprimer ou modifier des activités.
                    </DialogContentText>

                    {!activities ? <p>Aucune activité</p> : <p>Des activités <ButtonEdit/></p>}

                    <ButtonAdd
                        onClick={handleAddActivity}
                    />
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
                        onClick={handleValid}
                        // disabled={disabledButtonValid()}
                    >
                        Enregistrer
                    </Button>


                </DialogActions>
            </Dialog>
        </>
    )
}