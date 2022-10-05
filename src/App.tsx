import './App.css';

import Homepage from './screens/Homepage';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Homepage /> */}
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
    </>
  );
}

export default App;
