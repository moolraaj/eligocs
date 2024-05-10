'use client'
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap'

import Formclose from '../../../assets/headerAssets/formclose.png';
import ApplyForJob from '@/app/forms/applyForJob';










function HeroSection({ ele, ParallaxContainer }) {
  const [showInnovation, setShowInnovation] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const [isApplyJobVisible, setIsApplyJobVisible] = useState(false);

  console.log(ele)
  







  useEffect(() => {
    setAnimateButton(true);
    const timer1 = setTimeout(() => {
      setAnimateButton(false);
    }, 500);
    const timer2 = setTimeout(() => {
      setShowButton(false);
    }, 500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInnovation(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

 

  const showApplyJob = () => {
    setIsApplyJobVisible(true);
  };

  const closeApplyJob = () => {
    setIsApplyJobVisible(false);
  };

  return (
    <>

      {isApplyJobVisible && (
        <div className="cf7_form_outer" style={{ animation: isApplyJobVisible ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
          <div className="cf7_form_inner">
            <div className="cf7_top_banner">

              <div className="cf7_left_section">
                <div className="form_banner_heading">

                  <h1>apply now</h1>
                </div>

                <div className="form_slider_wrapper">
                  <div className="_form_paragraph">
                    <p>
                      apply for job
                    </p>
                  </div>
                </div>


              </div>

              <div className="cf7_right_section">
                <div className="close_button">
                  <button onClick={closeApplyJob} className="close_button">
                    <img src={Formclose.src} alt="" srcset="" />
                  </button>
                </div>
              </div>

            </div>
            <div className="cf7_form_wrapper">
              <ApplyForJob />
            </div>
          </div>
        </div>
      )}


      <div className="parallax-container">
        <div className="container-1">

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
                        <button type="button" className={animateButton ? "animate" : ""} onClick={showApplyJob}>Apply Now</button>
                        <p>{ele.acf.innovation_heading}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default HeroSection;