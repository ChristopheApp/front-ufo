import { Box } from "@mui/material";
import { ReactElement } from "react";

import BoxEvent from './BoxEvent'

import styled from "@emotion/styled";

import type { event } from "../types/event";

import PaperEvent from './PaperEvent'

interface Props {
    children?: ReactElement
    title: string
    events: event[]
    isAdmin: boolean
    handleDeleteEvent: (id: number, name: string) => void;

}

export default function BoxEvents({ children, title, events,  isAdmin, handleDeleteEvent}: Props) {

    const H2 = styled.h2`

    `;
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',

            color: 'white',
            background: '#1E2732',
            borderRadius: '15px',
            marginX: '20px',
            // width: '80%',
            // ml: '10%'
        }}
        >
            <h2>
                {title}
            </h2>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // width: '80%',
                    //ml: '20px'
                }}
            >
                {/* <BoxEvent event={events[0]} isAdmin={isAdmin} handleDeleteEvent={handleDeleteEvent} /> */}
                {/* {events.length > 0 ?  <BoxEvent  event={events[0]} isAdmin={isAdmin} handleDeleteEvent={handleDeleteEvent} /> : null} */}
                {events.length > 0 ? events.map((event: any, i: number) => { return <BoxEvent key={i} event={event} isAdmin={isAdmin} handleDeleteEvent={handleDeleteEvent} /> }) : null}
                {/* {events.length > 0 ? events.map((event: any, i: number) => { return <PaperEvent key={i} isAdmin={isAdmin} event={event} deleteEvent={handleDeleteEvent} /> }) : null} */}
            </Box>
        </Box>
    )
}