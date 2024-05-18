'use client'
import React, { useEffect, useState } from 'react';
 
 
import StepUpForm from './stepUpForm';
import Popup from './popup';

const ShowFrom = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup on page load
    setShowPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {showPopup && (
        <Popup onClose={handleClosePopup}>
          <StepUpForm onClose={handleClosePopup} />
        </Popup>
      )}
      <div id="popup-root"></div>
    </div>
  );
};

export default ShowFrom;
