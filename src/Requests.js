import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import './Login.css';
import './Requests.css';

const Requests = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    alert('Are you sure you want to Logout you Account?');
    navigate('/');
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
            <button className='box1' onClick={handleDashboard}>Print Request</button>
            <button className='pr-box1' onClick={handleRequests}>Requests</button>
            <div className='box1'>Feedback</div>
            <div className='box1'>Communciation</div>
            <div className='box1'>Notification</div>
            <div className='box1'>Account</div>
        </div>

        <div className='rtop'>
            <div className='user'>24-2024-242</div>
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
                    <h1>STATUS</h1>
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

export default Requests;
