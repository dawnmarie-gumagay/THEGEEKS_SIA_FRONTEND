import React, { } from 'react';
import {useNavigate } from 'react-router-dom';
import './Login.css';
import './Dashboard.css';

const AdminRecords = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    alert('Are you sure you want to Logout you Account?');
    navigate('/AdminLogin');
  };

  const handleRecords = () => {
    navigate('/AdminRecords');
  };

  const handleDashboard = () => {
    navigate('/AdminDashboard');
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
            <div className='box1'>Communications</div>
            <div className='box1'>Notifications</div>
            <div className='box1'>Download/View Report</div>
            <div className='box1'>Accounts</div>
        </div>

        <div className='rtop'>
            <div className='user'>ADMIN</div>
            <button className='logout' onClick={handleLogout}>LogOut</button>
        </div>

        <div className='doc-requests'>
            <div className='labels'>
                <div className='label-1'>
                    <h1>DOCUMENT CONTROL #</h1>
                </div>
                <div className='label-2'>
                    <h1>DOCUMENT FILE NAME</h1>
                </div>
                <div className='label-3'>
                    <h1>REQUEST DATE</h1>
                </div>
                <div className='label-4'>
                    <h1>DATE TO USE</h1>
                </div>
                <div className='label-5'>
                    <h1>REVIEW</h1>
                </div>
            </div>

            <div className='request-list'>
                <div className='label-1'></div>
                <div className='label-2'></div>
                <div className='label-3'></div>
                <div className='label-4'></div>
                <div className='label-5'></div>
            </div>

            <div className='request-list'>
                <div className='label-1'></div>
                <div className='label-2'></div>
                <div className='label-3'></div>
                <div className='label-4'></div>
                <div className='label-5'></div>
            </div>

            <div className='request-list'>
                <div className='label-1'></div>
                <div className='label-2'></div>
                <div className='label-3'></div>
                <div className='label-4'></div>
                <div className='label-5'></div>
            </div>
        </div>
        
        <div className='cit-bglogo'></div>
        <div className='yellowbox'>
          <div className='link'>citu@imprs.com</div>
        </div>
      </div>
    );
}

export default AdminRecords;
