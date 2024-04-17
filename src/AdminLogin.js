import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn] = useState(false);
  
  const handleLogin = () => {
    navigate('/AdminDashboard');
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
        <h2>Admin</h2>
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

export default AdminLogin;
