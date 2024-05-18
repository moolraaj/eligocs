'use client'
import React from 'react';
import { createPortal } from 'react-dom';

const Popup = ({ children, onClose }) => {
  return createPortal(
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};

export default Popup;
