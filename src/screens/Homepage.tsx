import logo from '../logo.svg';
import React, { useState, useEffect } from 'react';
import {event} from '../types/event';

import DialogNewEvent from '../components/DialogNewEvent';
import PaperEvent from '../components/PaperEvent';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



function Homepage() {

    const [events, setEvents] = useState<event[]>([]);

    // State to open or close the dialog to create new event
    const [openDNE, setOpenDNE] = useState(false);


    // Get all events when the component is mounted
    useEffect(() => {

        fetchAllEvents();

    }, []);

    /**Fetch all events
     * @returns {void}
     */
    const fetchAllEvents = async () => {
        var rawResponse = await fetch(`http://localhost:3000/events/`);
        console.log(rawResponse)
        var response = await rawResponse.json();
        console.log(response);
        setEvents(response)
    }

    /** Function to create a new event in the database
     * @param {event} event
     * @returns {void}
     */
    const createEvent = async (event: event) => {
        const data = {
            name: event.name,
            location: event.location,
            start_date: new Date(event.date_start),
            end_date: new Date(event.date_end)
        }
        const response = await fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result)
        fetchAllEvents();
    }


    /** Function to delete an event
     * @param {number | undefined} id - The id of the event to delete
     * @returns {void}
     * 
     */
    const deleteEvent = async (id: number | undefined) => {
        console.log('delete event', id)
        const response = await fetch(`http://localhost:3000/events/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json()
        console.log(result)
    }

    /** Function called when the user click on the button to delete an event
     * Delete the event in the database and update the state 
     * @param {number | undefined} id - The id of the event to delete
     * @returns {void}
     * 
    */
    const handleDeleteEvent = (id: number | undefined) => {
        deleteEvent(id);
        fetchAllEvents();
    }


    /** 3 Functions to manage displaying Dialog New Event */
    const handleClickOpenDNE = () => {
        setOpenDNE(true);
    };
    const handleCloseDNE = () => {
        setOpenDNE(false);
    };

    const handleValidDNE = (event: event) => {
        setOpenDNE(false);
        createEvent(event);
    };

    return (
        <>
            <DialogNewEvent open={openDNE} handleClose={handleCloseDNE} handleValid={handleValidDNE} />

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Button variant="outlined" onClick={handleClickOpenDNE}>
                        Create new event
                    </Button>
                    <button >Get all events</button>
                    <p>
                        Liste des évènements...
                    </p>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >

                        {events.length > 0 ? events.map((event: any, i: number) => { return <PaperEvent key={i} event={event} deleteEvent={handleDeleteEvent} /> }) : null}
                    </Box>

                </header>
            </div>
        </>
    );
}

export default Homepage;