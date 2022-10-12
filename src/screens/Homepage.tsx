import logo from '../logo.svg';
import React, {useState, useEffect} from 'react';

import DialogNewEvent from '../components/DialogNewEvent';
import PaperEvent from '../components/PaperEvent';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';




function Homepage() {

    // State to open or close the dialog create new event
    const [openDNW, setOpenDNW] = useState(false);
    const [events, setEvents] = useState([]);

    const [eventsList, setEventsList] = useState([])

    useEffect(() => {
    var data = async () => {
        var rawResponse = await fetch(`http://localhost:3000/events/`);
        console.log(rawResponse)
        var response = await rawResponse.json();
        console.log(response);
        setEvents(response)
        // récuperation spécifique du tableau de couleur
        // setColorsList(response.article.colors);
        // setModelList(response.article.model);
        // SetMatiereList(response.article.material);
        // setInscriptionList(response.article.inscription);
        // setLogoList(response.article.logo);

        // setDescription(response.article.description);
        // setStock(response.article.stock)

        // setUsername(response.seller.username);
        // setAvatar(response.seller.avatar);
    }
         data();
     }, []);

     useEffect(() => {
        if(events.length > 0){

            console.log('y a des events')
            const list = events.map((event: any, i) => {
                console.log('test', i, event.name)
                return  <PaperEvent>salut{event.name}</PaperEvent>
            })
            setEventsList(list)
        }
     }, [events])

    const handleClickOpenDNW = () => {
        setOpenDNW(true);
    };

    const handleCloseDNW = () => {
        setOpenDNW(false);
    };

    const handleValidDNW = () => {
        setOpenDNW(false);
    };

    return (
        <>
            <DialogNewEvent open={openDNW} handleClose={handleCloseDNW} handleValid={handleValidDNW} />

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Button variant="outlined" onClick={handleClickOpenDNW}>
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
                        <Paper elevation={3} sx={{width: '100vh', marginBottom: "20px"}}>
                            Un event
                            </Paper>
                        
                        <PaperEvent>
                            Un Event styled 

                        </PaperEvent>
                        {eventsList}
                    </Box>

                </header>
            </div>
        </>
    );
}

export default Homepage;