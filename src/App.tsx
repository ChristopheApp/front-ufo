import './App.css';
import React, {useState} from 'react';

import Homepage from './screens/Homepage';
import Event from './screens/Event';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [admin, setAdmin] = useState(true);

  return (
    <>
      {/* <Homepage /> */}
    <Routes>
      <Route path="/" element={<Homepage isAdmin={admin} />} />
      <Route path="/event/:id" element={<Event />} />
    </Routes>
    </>
  );
}

export default App;
