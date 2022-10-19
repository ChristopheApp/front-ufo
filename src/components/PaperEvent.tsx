import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

interface Props {
    children?: React.ReactNode;
    event: any;
    deleteEvent: any;
}

export default function PaperEvent({ children, event, deleteEvent }: Props) {

    const PaperStyled = styled(Paper)`
    max-width: 100%; 
    margin-bottom: 20px;
    `

    return(
        <>
        <PaperStyled elevation={4}>
            {event ? event.name + " à " + event.location + ", Début : " + new Date(event.date_start).toLocaleDateString() + " - Fin : " + new Date(event.date_end).toDateString() : children}
            <DeleteForeverRoundedIcon onClick={()=>{deleteEvent(event._id)}} />
        </PaperStyled>
        </>
    )
}