import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './Login.css';
import Register from './Register'; 
import { FaUser, FaLock } from 'react-icons/fa';
import Dashboard from './Dashboard';
import PrintRequest from './PrintRequest';
import MdPrint from './MdPrint';
import MnPrint from './MnPrint';
import ExPrint from './ExPrint';
import OfPrint from './OfPrint';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import AdminRecords from './AdminRecords';
import Requests from './Requests';

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
  
    const handleLogin = () => {
      if (username === 'user' && password === 'password') {
        setLoggedIn(true);
      } else {
        alert('Invalid credentials. Please try again.');
        navigate('/Dashboard');
      }
    };
  
    const handleClear = () => {
      setUsername('');
      setPassword('');
    };

    const handleRegister = () => {
      navigate('/Register');
      };
  
    return (
      <div className='main'>
          <div className='boxup'>
          <div className='citlogo'></div>
          <div className='cit-text'></div>
          </div>
       
          <div className='title'>
            <h1>INSTRUCTIONAL MATERIAL PRINTING</h1>
            <h1 className='sub-title'>REQUEST SYSTEM</h1>
        </div>
        <div className='login-container'>
          <h2>User Authentication</h2>
          {isLoggedIn ? (
            <p>You are logged in!</p>
          ) : (
            <form>
              <label>
                <FaUser />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </label>
              <label>
                <FaLock />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </label>
              <button className='login-btn' type="button" onClick={handleLogin}>
                LOGIN
              </button>
              <button className='clear-btn' type="button" onClick={handleClear}>
                CLEAR ENTITIES
              </button>
              <div className='note'>You do not have an account, Register First</div>
              <button className='register-btn' type="button" onClick={handleRegister}>
                REGISTER
              </button>
              <div className='fpass'>
                <p>Forgot Password? <a href="#">Click here</a></p>
              </div>
            </form>
          )}
        </div>
        <div className='cit-bglogo'></div>
        <div className='yellowbox'>
          <div className='link'>citu@imprs.com</div>
        </div>
      </div>
    );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/PrintRequest" element={<PrintRequest />} />
        <Route path="/Requests" element={<Requests />} />
        <Route path="/MdPrint" element={<MdPrint />} />
        <Route path="/MnPrint" element={<MnPrint />} />
        <Route path="/ExPrint" element={<ExPrint />} />
        <Route path="/OfPrint" element={<OfPrint />} />

        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AdminRecords" element={<AdminRecords />} />
      </Routes>
    </Router>
  );
}

export default App;
