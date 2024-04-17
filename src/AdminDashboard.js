import React, { } from 'react';
import {useNavigate } from 'react-router-dom';
import './Login.css';
import './Dashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    alert('Are you sure you want to Logout you Account?');
    navigate('/AdminLogin');
  };

  const handleRecords = () => {
    navigate('/AdminRecords');
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
            <button className='box1' onClick={handleRecords}>Request List</button>
            <div className='box1'>Feedbacks</div>
            <div className='box1'>Communciations</div>
            <div className='box1'>Notifications</div>
            <div className='box1'>Download/View Report</div>
            <div className='box1'>Accounts</div>
        </div>

        <div className='rtop'>
            <div className='user'>ADMIN</div>
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

export default AdminDashboard;
