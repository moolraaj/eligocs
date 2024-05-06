'use client'
import React from 'react';

function HeroSection({ ele }) {

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
              <h1 className="innovation-heading">
                {ele.acf.innovation}
              </h1>
              <div
                className="innovation_content innovation_right"
                style={{
                  transform: "translateX(100%)",
                  opacity: 0,
                  pointerEvents: "none",
                }}
              >
                <button type="button">Apply Now</button>
                <p>{ele.acf.innovation_heading}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
