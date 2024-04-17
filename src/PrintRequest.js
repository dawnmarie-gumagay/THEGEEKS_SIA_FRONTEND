import React, {  } from 'react';
import {useNavigate } from 'react-router-dom';
import './Login.css';
import './Dashboard.css';
import './Printrequest.css';

const PrintRequest = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    alert('Are you sure you want to Logout you Account?');
    navigate('/');
  };

  const handleDashboard = () => {
    navigate('/Dashboard');
  };

  const handleMdPrint = () => {
    navigate('/MdPrint');
  };

  const handleMnPrint = () => {
    navigate('/MnPrint');
  };

  const handleExPrint = () => {
    navigate('/ExPrint');
  };

  const handleOfPrint = () => {
    navigate('/OfPrint');
  };

    return (
      <div className='main'>
        <div className='boxup'>
          <button className='citlogo' onClick={handleDashboard}></button>
          <div className='cit-text'></div>
          </div>

        <div className='goldbox'></div>
        
        <div className='graybox'>
            <button className='pr-box1' onClick={handleDashboard}>Print Request</button>
            <div className='box1'>Request</div>
            <div className='box1'>Feedback</div>
            <div className='box1'>Communciation</div>
            <div className='box1'>Notification</div>
            <div className='box1'>Account</div>
        </div>

        <div className='rtop'>
            <div className='user'>24-2024-242</div>
            <button className='logout' onClick={handleLogout}>LogOut</button>
        </div>

        <div className='whitebox'>
            <button className='prbox1' onClick={handleMdPrint}>Module Printing Request</button>
            <button className='prbox1' onClick={handleMnPrint}>Manual Printing Request</button>
            <button className='prbox1' onClick={handleExPrint}>Examination Printing Request</button>
            <button className='prbox1' onClick={handleOfPrint}>Office Forms Printing Request</button>
        </div>
        
        <div className='cit-bglogo'></div>
        <div className='yellowbox'>
          <div className='link'>citu@imprs.com</div>
        </div>
      </div>
    );
}

export default PrintRequest;
