'use client';

import MultistepForm from '@/app/_forms/multistepForm';
import React, { useState, useEffect } from 'react';

function PopupForm() {
    const [isMounted, setIsMounted] = useState(false);

    const toggleFormVisibility = () => {
        setIsMounted(false); // Hide the form when the close button is clicked
    };

    const handleFormCompletion = () => {
        // Hide the form and set a session storage flag when the form is completed
        setIsMounted(false);
        sessionStorage.setItem('hasCompletedForm', 'true');
    };

    useEffect(() => {
        // Check if the popup has been shown or the form has been completed in this session
        const hasShownPopup = sessionStorage.getItem('hasShownPopup');
        const hasCompletedForm = sessionStorage.getItem('hasCompletedForm');

        if (!hasShownPopup && !hasCompletedForm) {
            const timer = setTimeout(() => {
                setIsMounted(true);
                // Set the flag to indicate that the popup has been shown
                sessionStorage.setItem('hasShownPopup', 'true');
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {isMounted && (
                <div className="multistep_popup_form">
                    <div className="cf7_form_outer" style={{ animation: isMounted ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
                        <div className="cf7_form_inner">
                            <div className="cf7_form_wrapper">
                                <MultistepForm onHideForm={toggleFormVisibility} onCompleteForm={handleFormCompletion} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PopupForm;
