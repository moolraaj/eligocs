
'use client'
import React, { useEffect, useState } from 'react';

function HeroSection({ ele }) {
  const [showInnovation, setShowInnovation] = useState(false); // Set showInnovation to false by default
  const [showButton, setShowButton] = useState(false); // Control the visibility of the button
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimateButton(true);
    // Disable animation after a short delay
    const timer1 = setTimeout(() => {
      setAnimateButton(false);
    }, 500); // Adjust the delay as needed
    // Hide the button after 2 seconds
    const timer2 = setTimeout(() => {
      setShowButton(false);
    }, 500); // Adjust the delay as needed
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    // Hide the innovation heading after 2 seconds
    const timer = setTimeout(() => {
      setShowInnovation(true);
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="page_outer home_section_outer">
        <div className="page_inner home_section_inner">
          <div className="home_slider_wrapper">
            
            <h1>{ele.acf.slider_heading_first}</h1>
            <h1>{ele.acf.slider_heading_second}</h1>
            <div dangerouslySetInnerHTML={{ __html: ele.acf.slider_para }}></div>
          </div>
          <div className="home_slider_animate">
            <div className="innovation_wrapper">
              <h1 className={`innovation-heading ${showInnovation ? "hide" : ""}`}>
                {ele.acf.innovation}
              </h1>
              <div
                className={`innovation_content innovation_right ${showInnovation ? "show" : "hide"}`}
                style={{
                  transform: showInnovation ? "translateX(-35%)" : "translateX(100%)",
                  opacity: showInnovation ? 1 : 0,
                  pointerEvents: showInnovation ? "auto" : "none",
                }}
              >
                {showInnovation && (
                  <>
                    <button type="button" className={animateButton ? "animate" : ""}>Apply Now</button>
                    <p>{ele.acf.innovation_heading}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
