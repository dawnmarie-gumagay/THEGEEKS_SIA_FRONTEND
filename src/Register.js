import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Login.css';
import './Register.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const handleRegister = () => {
    alert('Register Succesfully ');
    navigate('/');
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
          <h2>Registration</h2>
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
        <label>
          <FaLock />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </label>
        <label>
          <FaUser />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
              <button className='r-btn' type="button" onClick={handleRegister}>
              REGISTER
              </button>
            </form>
        </div>
        <div className='cit-bglogo'></div>
        <div className='yellowbox'>
          <div className='link'>citu@imprs.com</div>
        </div>
      </div>
    );
}

export default Register;
