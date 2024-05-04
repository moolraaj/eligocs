'use client'
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/all';
gsap.registerPlugin(TextPlugin);

function HeroSection({ ele }) {
  const [showInnovation, setShowInnovation] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
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


  return (
    <>
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
