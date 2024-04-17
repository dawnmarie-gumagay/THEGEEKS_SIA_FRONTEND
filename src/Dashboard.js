import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import './Login.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Are you sure you want to Logout you Account?');
    navigate('/');
  };

  const handlePrintRequest = () => {
    navigate('/PrintRequest');
  };

  const handleRequests = () => {
    navigate('/Requests');
  };

  const handleDashboard = () => {
    navigate('/Dashboard');
  };

    return (
      <div className='main'>
        <div className='boxup'>
          <button className='citlogo' onClick={handleDashboard}></button>
          <div className='cit-text'></div>
          </div>

        <div className='goldbox'></div>

        <div className='graybox'>
            <button className='box1' onClick={handlePrintRequest}>Print Request</button>
            <button className='box1' onClick={handleRequests}>Requests</button>
            <div className='box1'>Feedback</div>
            <div className='box1'>Communication</div>
            <div className='box1'>Notification</div>
            <div className='box1'>Account</div>
        </div>

        <div className='rtop'>
            <div className='user'>24-2024-242</div>
            <button className='logout' onClick={handleLogout}>LogOut</button>
        </div>

        <div className='dtitle'>
            <h1> WELCOME TO</h1>
            <h1 className='dsub-title1'>INSTRUCTIONAL MATERIAL PRINTING</h1>
            <h1 className='dsub-title2'>REQUEST SYSTEM</h1>
        </div>

        <div className='cit-bglogo'></div>
        <div className='yellowbox'>
          <div className='link'>citu@imprs.com</div>
        </div>
      </div>
    );
}

export default Dashboard;