// Lightbox.jsx

import React from 'react';

const Lightbox = ({ image, onClose }) => {
    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-container">
                <button className="close-btn" onClick={onClose}>Close</button>
                <img className="lightbox-image" src={image} alt="lightbox" />
            </div>
        </div>
    );
};

export default Lightbox;
