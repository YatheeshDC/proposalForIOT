// client/src/App.js
// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/register';
import Status from './components/Status';
import CleaningConfirmation from './components/CleaningConfirmation';
import Announcement from './components/Announcement';
import PasswordPrompt from './components/Gpage';
import BathroomDetail from './components/Bathroomdetails';
import CleaningInProgress from './components/cleaningInProgress';
import './styles.css';
import Report from './components/Report';

const App = () => {
  // const [token, setToken] = useState('');

  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login setToken={setToken} />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/Gpage" element={<PasswordPrompt/>} />
        <Route path="/report" element={<Report/>} />


        <Route path="/bathroom/:id" element={<BathroomDetail/>} />
        <Route path="/clean/:id" element={<CleaningInProgress/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/status" element={<Status />} />
        {/* <Route path="/status" element={token ? <Status token={token} /> : <Navigate to="/login" />} /> */}
        <Route path="/cleaning-confirmation" element={<CleaningConfirmation />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
