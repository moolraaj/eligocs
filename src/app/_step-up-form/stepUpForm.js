'use client'
import React, { useState } from 'react';

const StepUpForm = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
    onClose();
  };

  return (
    <div className="step-up-form">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="step">
            <h2>Step 1</h2>
            <input type="text" placeholder="Name" required />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div className="step">
            <h2>Step 2</h2>
            <input type="email" placeholder="Email" required />
            <button type="button" onClick={handlePrev}>Previous</button>
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 3 && (
          <div className="step">
            <h2>Step 3</h2>
            <input type="password" placeholder="Password" required />
            <button type="button" onClick={handlePrev}>Previous</button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default StepUpForm;
