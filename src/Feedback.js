import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './Dashboard.css';
import './Feedback.css'; // Assuming you have a Feedback.css file

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0); // Assuming you want to collect a rating as well

  const handleLogout = () => {
    alert('Are you sure you want to Logout you Account?');
    navigate('/');
  };

  const handleDashboard = () => {
    navigate('/Dashboard');
  };

  const handlePrintRequest = () => {
    navigate('/PrintRequest');
  };

  const handleFeedback = () => {
    navigate('/Feedback'); // Navigate to the Feedback page when Feedback button is clicked
  };

  const handleSubmitFeedback = () => {
    console.log('Submitted feedback:', feedback);
    console.log('Rating:', rating);
    alert('Thank you for your feedback!');
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
          <button className='pr-box1' onClick={handlePrintRequest}>Print Request</button>
          <div className='box1' onClick={handleFeedback}>Feedback</div> {/* Handle click event for Feedback button */}
          <div className='box1'>Chat</div>
          <div className='box1'>Notification</div>
          <div className='box1'>Account</div>
      </div>

      <div className='rtop'>
          <div className='user'>24-2024-242</div>
          <button className='logout' onClick={handleLogout}>LogOut</button>
      </div>
      
      <div className='yellowbox'>
        <div className='link'>citu@imprs.com</div>
      </div>

      <div className='feedback-form'>
        <h2 className='feedback-header'>User Feedback Form</h2>
        <textarea
          className='feedback-input'
          rows='5'
          placeholder='Please provide your feedback...'
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        {/* Assuming you want to collect a rating */}
        <label className='rating-label'>Rating:</label>
        <input
          type='number'
          min='1'
          max='5'
          className='rating-input'
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button className='submit-btn' onClick={handleSubmitFeedback}>Submit Feedback</button>
      </div>
    </div>
  );
}

export default FeedbackForm;
