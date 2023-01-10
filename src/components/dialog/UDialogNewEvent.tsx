import React, { useState } from 'react';
import { event } from '../../types/event';

import UDialogEvent from "./UDialogEvent";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


interface Props {
    children?: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    handleValid: (event: any) => void;
}



export default function UDialogNewEvent({ open, handleClose, handleValid } : Props) {

    const event = {
        name: '',
        location: '',
        description: '',
        date_start: new Date(Date.now()).toISOString(),
        date_end: new Date(Date.now()).toISOString(),
        locked: false
    }

    return(
        <>
            <UDialogEvent 
                title="Nouvel évènement"
                description="Création d'un nouvel évènement, le nom, la date et le lieu sont obligatoire, le reste peut être ajouté plus tard."
                open={open}
                handleClose={handleClose}
                handleValid={handleValid}
                textButtonValid="Créer"
                eventProps={event}
            >

            </UDialogEvent>
        </>
    )
}