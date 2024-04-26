// AboutUs.jsx
import React, { useEffect, useState } from "react";

import ParallaxContainer from "./ParallaxContainer";

import JournyImageSlider from "./JournyImageSlider";
import WorkingProcess from "./WorkingProcess";
import Testimoinals from "../../common/Testimoinals";
import { AboutApi } from "@/utils/apis/Apis";



const AboutUs = () => {
  const [result, setResult] = useState([]);

  const loadData = async () => {
    let data = await AboutApi();
    setResult(data);
    console.log(data);
  };

  useEffect(() => {
    loadData();
    
  }, []);

  return (
    <>
      {result.map((ele, index) => (
        <div className="aboutpage-outer" key={index}>
          <div className="pages-inner about-inner">
            <ParallaxContainer
              speed={0.5}
              className="container-1"
              backgroundColor="#ffffff">
              <div className="contents">
                <div className="img-slider-container">
                  <div className="slider-inner">
                    <marquee
                      behavior="scroll"
                      direction="left"
                      scrollamount="11">
                      {ele.acf.about_top_slider.map((slider, index) => (
                        <span key={index} style={{ display: "inline-block" }}>
                          <div className="slider">
                            <div style={{ display: "flex" }}>
                              <img
                                src={slider.top_slider_image_first}
                                alt={`img${index + 1}`}
                              />
                              <div className="images-outer">
                                <div></div>
                                <div>
                                  <img
                                    src={slider.top_slider_image_second}
                                    alt={`img${index + 2}`}
                                  />
                                </div>
                                <div>
                                  <img
                                    src={slider.top_slider_image_third}
                                    alt={`img${index + 3}`}
                                  />
                                </div>
                                <div></div>
                              </div>
                              <img
                                src={slider.top_slider_image_fourth}
                                alt={`img${index + 4}`}
                              />
                            </div>
                          </div>
                        </span>
                      ))}
                    </marquee>

                    <div className="about-top-content">
                      <h1 className="uderline-text">
                        {ele.acf.top_heading_first}
                      </h1>
                      <h3>{ele.acf.top_heading_second}</h3>
                      <p>{ele.acf.top_para_first}</p>
                      <button id="get-in-tch"><a href={ele.acf.get_in_touch_button}  target="_blank">Get In Touch</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxContainer>
            <ParallaxContainer
              speed={3}
              className="container-2"
              backgroundColor="#EAAA00">
              <div className="content">
                <div className="about-working-process">
                  <h3>
                    <strong>{ele.acf.working_process_heading}</strong>
                  </h3>
                  <WorkingProcess result={ele} />
                </div>
              </div>
            </ParallaxContainer>
            <ParallaxContainer
              speed={3.5}
              className="container-3"
              backgroundColor="#ffffff">
              <div className="content_mission_our content">
                <h1 className="uderline-text our-misson">
                  {ele.acf.our_mission_heading}
                </h1>
                <div className="our-mission-outer">
                  <div className="mission-left">
                    <p>
                      As a company offering{" "}
                      <span className="uderline-para">
                        professional web development
                      </span>{" "}
                      and{" "}
                      <span className="uderline-para">
                        web hostingservices,
                      </span>{" "}
                      <span className="uderline-para">
                        Eligo Creative Services
                      </span>{" "}
                      mission is to design unique, creative and innovative
                      products, as well as{" "}
                      <span className="uderline-para">
                        technological solutions
                      </span>
                      , for our clients. Our dedication to quality and{" "}
                      <span className="uderline-para">
                        customer satisfaction
                      </span>{" "}
                      ensures that we strive to meet tha needs and expectations
                      of our clients to nurture strong, long-term relationships
                      while adding more value to our business
                    </p>
                  </div>
                  <div className="mission-right">
                    <img src={ele.acf.our_mission_image.url} alt="ourMissionImg" />
                  </div>
                </div>
              </div>
            </ParallaxContainer>
            <ParallaxContainer
              speed={4}
              className="container-4"
              backgroundColor="#191C1B">
              <div className="content">
                <div className="success-journy-outer">
                  <div className="success-journy-left">
                    <h2>
                      Join Us on the Journey to Success with Our Tailored
                      Solutions and Expert Guidance.
                    </h2>
                    <button id="sucess-journy-btn"><a href={ele.acf.unlock_success_now_button} target="_blank"></a>Unlock Success Now</button>
                  </div>
                  <div className="success-journy-right">
                    <JournyImageSlider result={ele} />
                  </div>
                </div>
              </div>
            </ParallaxContainer>
            <ParallaxContainer
              speed={4.5}
              className="container-5"
              backgroundColor="#ffffff">
              <div className="content">
                <Testimoinals />
              </div>
            </ParallaxContainer>

          </div>
        </div>
      ))}
    </>
  );
};

export default AboutUs;
