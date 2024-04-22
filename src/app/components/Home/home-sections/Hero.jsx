'use client'
import React, { useEffect, useState } from 'react'

function HeroSection({ele,isScrolled}) {
    const [showInnovation, setShowInnovation] = useState(false);   

    useEffect(() => {
        setShowInnovation(isScrolled);
      }, [isScrolled]);
    
      const handleScroll = () => {
        setShowInnovation(window.scrollY > 0);
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
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
                <div className={`home_slider_animate ${isScrolled ? "scrolled" : ""}`}>
                  <div className="innovation_wrapper">
                    <h1
                      className={`innovation-heading ${showInnovation ? "hide" : ""}`}
                    >
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
                          <button type="button" >Apply Now</button>
                          <p>{ele.acf.innovation_heading}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
 </>
  )
}

export default HeroSection
