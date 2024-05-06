'use client'
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap'

import Formclose from '../../../assets/headerAssets/formclose.png';
import ApplyForJob from '@/app/forms/applyForJob';
 
 
 


 




function HeroSection({ ele,ParallaxContainer }) {
  const [showInnovation, setShowInnovation] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const [isApplyJobVisible, setIsApplyJobVisible] = useState(false);
  const sliderRef = useRef(null);
 


  

 

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

  useEffect(() => {
    const sliderElement = sliderRef.current;
    const [headingFirst, headingSecond, paragraph] = sliderElement.children;

    const animateScrambleText = (element) => {
      gsap.fromTo(element, {
        opacity: 0,
        y: 20,
        scrambleText: { text: element.textContent, chars: 'lowerCase', speed: 0.5 },
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      });
    };

    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });
    tl.from(headingFirst, { opacity: 0, y: 20 })
      .call(() => animateScrambleText(headingFirst))
      .from(headingSecond, { opacity: 0, y: 20 }, '-=0.5')
      .call(() => animateScrambleText(headingSecond))
      .from(paragraph, { opacity: 0, y: 20 }, '-=0.5')
      .call(() => animateScrambleText(paragraph));

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

   
   
     <ParallaxContainer speed={0.5} className="container-1">

      <div className="page_outer home_section_outer">
        <div className="page_inner home_section_inner">
         
          <div className="home_slider_wrapper" ref={sliderRef}>
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
      </ParallaxContainer>

    
    </>
  );
}

export default HeroSection;






import React from 'react';

const Map = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.925872859087!2d77.17611227611414!3d31.08398886857124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057f4e876894e5%3A0xe790fbd458be4c7c!2sEligo%20Creative%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1714930037488!5m2!1sen!2sin"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);

export default Map;