import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ButtonAdd from '../../buttons/ButtonAdd';
import ButtonEdit from '../../buttons/ButtonEdit';
import ButtonTrash from '../../buttons/ButtonTrash';


import type { event } from "../../../types/event";
import { activity } from '../../../types/activity';

interface Props {
    children?: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    handleValid: () => void;
    handleAddActivity: () => void;
    handleRemoveActivity : (eventId: number, activity: any) => void;
    handleEditActivity: (activity: activity) => void;
    eventProp: event;
    activities: activity[]
}

export default function FormActivities({ eventProp, open, handleClose, handleValid, handleAddActivity, handleRemoveActivity, handleEditActivity, activities }: Props) {

    // function handleAddActivity() {
    //     console.log("open add activity form")
    // }

    console.log(activities)
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Activités</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ajouter, supprimer ou modifier des activités à l'évènement {eventProp.name}.
                    </DialogContentText>
                    
                    {activities.length > 0 ?
                        <List>
                            {activities.map((activity, i) => (
                                <ListItem key={i} disableGutters>
                                    <ListItemButton onClick={() => console.log(activity.name)} key={i}>
                                        <ButtonEdit onClick={() => handleEditActivity(activity)} />
                                        <ListItemText primary={activity.name} />
                                        <ButtonTrash onClick={() => handleRemoveActivity(eventProp._id, activity) } />
                                    </ListItemButton>

                                </ListItem>
                            ))}
                        </List>
                        :
                        <DialogContentText>
                            Aucune activité sur cet événement.
                        </DialogContentText>
                    }
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