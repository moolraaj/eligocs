'use client'
import React, { useState } from 'react';

export const ToasterWrapper = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const SuccessToaster = () => {
        return (
            <div className={showSuccess ? "toaster success" : "toaster"}>
                <h1>Data sent successfully...</h1>
            </div>
        );
    };

    const ErrorToaster = () => {
        return (
            <div className={showError ? "toaster error" : "toaster"}>
                <h1>There is a problem sending data...</h1>
            </div>
        );
    };

    const showToast = (type) => {
        if (type === "success") {
            setShowSuccess(true);
            setShowError(false);
        } else if (type === "error") {
            setShowSuccess(false);
            setShowError(true);
        }
        setTimeout(() => {
            setShowSuccess(false);
            setShowError(false);
        }, 3000);
    };

    return {
        SuccessToaster,
        ErrorToaster,
        showToast
    };
};
