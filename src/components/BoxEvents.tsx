import { Box } from "@mui/material";
import { ReactElement } from "react";

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

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
                {events.length > 0 ? events.map((event: any, i: number) => { return <PaperEvent key={i} isAdmin={isAdmin} event={event} deleteEvent={handleDeleteEvent} /> }) : null}
            </Box>
        </Box>
    )
}