import logo from '../logo.svg';
import React, { useState, useEffect } from 'react';
import { event } from '../types/event';

import DialogNewEvent from '../components/DialogNewEvent';
import PaperEvent from '../components/PaperEvent';
import SnackAlert from '../components/SnackAlert';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



function Homepage() {

    // State to store the events fetched from the API
    const [events, setEvents] = useState<event[]>([]);

    // State to open or close the dialog to create new event
    const [openDNE, setOpenDNE] = useState(false);

    // State to open or close the snackbar
    const [openSnack, setOpenSnack] = useState(false);
    const [errorSnackMsg, setErrorSnackMsg] = useState('Error');
    const [alertType, setAlertType] = useState('error');


    // Get all events when the component is mounted
    useEffect(() => {

        fetchAllEvents();

    }, []);

    /**Fetch all events
     * @returns {void}
     */
    const fetchAllEvents = async () => {
        try {
            const response = await fetch(`http://localhost:3000/events/`);
            console.log(response)

            if (response.status !== 200) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            setEvents(result)
        }
        catch (err) {
            console.error("Error while fetching all events", err);
        }
    }

    /** Function to create a new event in the database
     * @param {event} event
     * @returns {void}
     */
    const createEvent = async (event: event) => {
        // Format the date to be compatible with the database
        const data = {
            name: event.name,
            location: event.location,
            start_date: new Date(event.date_start),
            end_date: new Date(event.date_end)
        }

        try {

            const response = await fetch('http://localhost:3000/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            console.log(response)

            if (response.status !== 200) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }

            const result = await response.json()
            console.log(result)
        }
        catch (err) {
            console.error("Error while creating a new event", err);
        }
        fetchAllEvents();
    }


    /** Function to delete an event
     * @param {number | undefined} id - The id of the event to delete
     * @returns {void}
     * 
     */
    const deleteEvent = async (id: number | undefined, name: string) => {
        console.log('deleting event ... event id :', id)

        try {
            const response = await fetch(`http://localhost:3000/events/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.status !== 200) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }

            const result = await response.json()
            console.log(result)

            // Update the events list to remove the deleted event
            fetchAllEvents();
            handleOpenSnack(`L'évènement "${name}" a bien été supprimé.`, 'success');


        }
        catch (err) {
            console.error("Error while deleting an event", err);
            handleOpenSnack(`Une erreur s'est produite, l'évènement "${name}" n'a pas pu etre supprimé.`, 'error');
            
        }
    }

    /** Function called when the user click on the button to delete an event
     * Delete the event in the database and update the state 
     * @param {number | undefined} id - The id of the event to delete
     * @returns {void}
     * 
    */
    const handleDeleteEvent = (id: number | undefined, name: string) => {
        deleteEvent(id, name)
    }


    /** 3 Functions to manage Dialog New Event display */
    const handleClickOpenDNE = () => {
        setOpenDNE(true);
    };
    const handleCloseDNE = () => {
        setOpenDNE(false);
    };

    /**
     * Function to handle the click on the button to create a new event from child component,
     * call the function to create the event in the database and update the state
     * and close the dialog 
     * @param {event} event - The event's data to create
     */
    const handleValidDNE = (event: event) => {
        createEvent(event);
        setOpenDNE(false);
    };

    const handleOpenSnack = (msg: string, type: string) => {
        setErrorSnackMsg(msg);
        setAlertType(type)
        setOpenSnack(true);
    
        console.log('open snack')
    }

    const handleCloseSnack = () => {
        setOpenSnack(false);
        console.log('close snack')
    }
    return (
        <>
            <SnackAlert open={openSnack} handleClose={handleCloseSnack} type={alertType} errorMessage={errorSnackMsg} />

            <DialogNewEvent open={openDNE} handleClose={handleCloseDNE} handleValid={handleValidDNE} />

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Button variant="contained" onClick={handleClickOpenDNE}>
                        Create new event
                    </Button>
                    <Button variant="contained" onClick={() => {handleOpenSnack("This is a success message", 'success')}}>
                        Open snackbar
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