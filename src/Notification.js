import React, { useState } from 'react';
import './Notification.css';

const Notification = ({ message }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className={`notification ${show ? 'show' : ''}`}>
      <div className="notification-content">{message}</div>
      <button className="close-notification" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default Notification;
