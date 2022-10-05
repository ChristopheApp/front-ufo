import logo from '../logo.svg';
import * as React from 'react';

import DialogNewEvent from '../components/DialogNewEvent';

import Button from '@mui/material/Button';





function Homepage() {

    // State to open or close the dialog create new event
    const [openDNW, setOpenDNW] = React.useState(false);

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
                    <button onClick={handleClickOpenDNW}>Créer un nouvel évènement</button>
                    <p>
                        Liste des évènements...
                    </p>

                </header>
            </div>
        </>
    );
}

export default Homepage;