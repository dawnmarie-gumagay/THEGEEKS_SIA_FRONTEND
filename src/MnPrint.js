import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import './Login.css';
import './MdPrint.css';
import './Printrequest.css';

const MnPrint = () => {
  const navigate = useNavigate();
  const [controlNumber] = useState(generateControlNumber());
  const [requestDate, setRequestDate] = useState(getFormattedDate(new Date()));
  const [requestTime, setRequestTime] = useState(getFormattedTime(new Date()));
  const [selectedPaperSize, setSelectedPaperSize] = useState('');
  
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

  function generateControlNumber() {
    const randomNumber = Math.floor(Math.random() * 99) + 1;
    return `Mn${randomNumber.toString().padStart(2, '0')}`;
  }

  const [showPaperSizeDropdown, setShowPaperSizeDropdown] = useState(false);

  const togglePaperSizeDropdown = (size) => {
    setSelectedPaperSize(size);
    setShowPaperSizeDropdown(!showPaperSizeDropdown);
  };

  const paperSizes = ['A4(8.27 x 11.69 inches)', 'Letter(8.5 x 11 inches)', 'Legal(8.5 x 14 inches)','A3 (11.69 x 16.54 inches)'];

  function getFormattedDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }

  function getFormattedTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  }

  const handleSubmit = () => {
    alert('Your request is been submited! Please wait for further notice.');
    };

  const handleCancel = () => {
    alert('Are you sure you want to cancel your request?');
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
            <div className='box1'>Request</div>
            <div className='box1'>Feedback</div>
            <div className='box1'>Communication</div>
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

            <div className='requestform'>

                <h2 className='type'>MANUAL PRINTING REQUEST FORM</h2>
                <div className='control-prop'>
                    <h1 className='control'>Request Control #:</h1>
                    <div className='control-number'>{controlNumber}</div>
                </div>

                <h1 className='print-details'>Manual Printing Details:</h1>
                <div className='file-prop'>
                    <h1 className='file-name'>Manual File Name:</h1>
                    <input
                    type="file"
                    placeholder="File Name"
                    className="file-upload-input"
                    />
                </div>
                <div className='num-prop'>
                    <h1 className='file-no-copies'>Number of Copies:</h1>
                    <input
                        type="number"
                        placeholder="0"
                        className="copies"
                    />
                </div>

                <div className='rows'>
                    <div className='row1'>
                        <h1 className='print-details'>Printing Specifications:</h1>
                        <div className='print-det-prop'>
                            <h1 className='file-name'>Printing Type:</h1>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="printingType"
                                        value="blackAndWhite"
                                    />
                                    Black and White
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="printingType"
                                        value="colored"
                                    />
                                    Colored
                                </label>
                            </div>
                        </div>

                        <div className='paper-size'>
                            <h1 className='file-name'>Paper Size:</h1>
                            <div className='size-box' onClick={() => togglePaperSizeDropdown('Select Paper Size')}>
                            {selectedPaperSize || 'Select Paper Size'}
                            </div>
                            {showPaperSizeDropdown && (
                            <div className='dropdown-content'>
                                {paperSizes.map((size, index) => (
                                <div key={index} className='size-option' onClick={() => togglePaperSizeDropdown(size)}>
                                    {size}
                                </div>
                                ))}
                            </div>
                            )}
                        </div>

                        <div className='print-det-prop'>
                            <h1 className='file-name'>Bind:</h1>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="printingType"
                                        value="blackAndWhite"
                                    />
                                    Yes
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="printingType"
                                        value="colored"
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='row2'>
                        <h1 className='contact-details'>Contact Information:</h1>
                        <div className='cont-prop'>
                            <h1 className='cont-name'>Name:</h1>
                            <input
                                type="text"
                                placeholder="Lastname, Firstname"
                                className="cont-input"
                            />
                        </div>
                        <div className='cont-prop'>
                            <h1 className='cont-name'>Email:</h1>
                            <input
                                type="email"
                                placeholder="cit@imprs.com"
                                className="cont-input"
                            />
                        </div>
                        <div className='cont-prop'>
                            <h1 className='cont-name'>Phone Number:</h1>
                            <input
                                type="text"
                                inputmode="numeric"
                                pattern="[0-9]*"
                                placeholder="+63......"
                                className="cont-input"
                            />
                        </div>
                        <div className='cont-prop'>
                            <h1 className='cont-name'>Department:</h1>
                            <input
                                type="text"
                                className="cont-input"
                            />
                        </div>
                    </div>
                </div>

                <h1 className='print-details'>Date & Time:</h1>
                <div className='dt-prop'>
                    <div className='date-prop'>
                    <h1 className='date-name'>Request Date:</h1>
                <input
                    className="date"
                    value={requestDate}
                    onChange={(e) => setRequestDate(e.target.value)}
                />
                <h1 className='time-name'>Request Time:</h1>
                <input
                    className="time"
                    value={requestTime}
                    onChange={(e) => setRequestTime(e.target.value)}
                    disabled
                />
                    </div> 
                </div>
                <div className='date-prop'>
                    <h1 className='date-name'>Date to Use:</h1>
                    <input
                        type='date'
                        className="usedate"
                    />
                </div> 

                <h1 className='print-details'>Additional Comments & Instructions:</h1>
                <div className='date-prop'>
                    <input
                        type="text"
                        placeholder="......"
                        className="com-and-ins"
                    />
                </div>

                <h1 className='print-details'>Additional Comments & Instructions:</h1>
                <div className='date-prop'>
                    <input
                        type="text"
                        placeholder="......"
                        className="com-and-ins"
                    />
                </div>

                <div className='buttons'>
                    <button className='cancel-btn' type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button className='submit-btn' type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>     

            </div>
        </div>

    );
}

export default MnPrint;