
'use client'
import WorkingProcess from "./WorkingProcess";
import { useRouter } from "next/navigation";
import TestimonialSection from "../Home/home-sections/Testimonial";
import { allExportedApi } from "@/utils/apis/Apis";
import { useEffect, useState } from "react";
import { emptyImage } from "../../../../public/assets/images";
import CallToAction from "@/app/call-to-action/callToAction";




const AboutUs = () => {
  const [result, setResult] = useState([])
  const api = allExportedApi()

  const loadAboutPage = async () => {

    let data = await api.AboutApi();
    setResult(data)
  }

  useEffect(() => {
    loadAboutPage()
  }, [])
  let router = useRouter()


  return (
    <>

      {result && result.map((ele, index) => (
        <div id="about_us_cust" className="aboutpage-outer" key={index}>
          <div className="pages-inner about-inner">
            <div className="parallax-container">
              <div className="container-1">
                <div className="contents">
                  <div className="img-slider-container">
                    <div className="slider-inner">
                      <div className="marquee-container">
                        <div className="marquee">
                          {ele.acf.about_top_slider.map((slider, index) => (
                            <span key={index} style={{ display: "inline-block" }}>
                              <div className="slider">
                                <div style={{ display: "flex", }}>
                                  <img
                                    src={slider.top_slider_image_first || emptyImage.src}
                                    alt={`img${index + 1}`}
                                  />
                                  <div className="images-outer">
                                    <div></div>
                                    <div>
                                      <img
                                        src={slider.top_slider_image_second || emptyImage.src}
                                        alt={`img${index + 2}`}
                                      />
                                    </div>
                                    <div>
                                      <img
                                        src={slider.top_slider_image_third || emptyImage.src}
                                        alt={`img${index + 3}`}
                                      />
                                    </div>
                                    <div></div>
                                  </div>
                                  <img
                                    src={slider.top_slider_image_fourth || emptyImage.src}
                                    alt={`img${index + 4}`}
                                  />
                                </div>
                              </div>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="about-top-content">
                        <h1 className="uderline-text">
                          {ele.acf.top_heading_first}
                        </h1>
                        <h3>{ele.acf.top_heading_second}</h3>
                        <p>{ele.acf.top_para_first}</p>
                        <button id="get-in-tch" onClick={() => router.push('/contact')}>Get In Touch</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parallax-container" style={{ background: '#EAAA00' }}>
              <div className="container-2 about_vs" >
                <div className="content">
                  <div className="about-working-process">
                    <h3>
                      <strong>{ele.acf.working_process_heading}</strong>
                    </h3>
                    <WorkingProcess result={ele} />
                  </div>
                </div>
              </div>
            </div>
            <div className="parallax-container" style={{ background: "#fff" }}>
              <div className="container-3 about_vs" >
                <div className="content_mission_our content">
                  <h1 className="uderline-text our-misson">
                    {ele.acf.our_mission_heading}
                  </h1>
                  <div className="our-mission-outer">
                    <div className="mission-left">
                      <p dangerouslySetInnerHTML={{ __html: ele.acf.our_mission_description }}></p>
                    </div>
                    <div className="mission-right">
                      <img src={ele.acf.our_mission_image || emptyImage.src} alt="ourMissionImg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parallax-container about_call_to_action" style={{ background: "#191C1B" }}>
              <div className="container-4 about_vs">
                <div className="content call_action_wrapper">
                  <div className="about_call_action">
                    <div className="inner_call">
                      <div className="call_wrapper">
                        <div className="call_left_section">
                          <h1>{ele.acf.call_to_action_heading_first || "Looking For Reliable And Highly Skilled"}</h1>
                          <h1>{ele.acf.call_to_action_heading_second || " Web Development Company & Services"}</h1>
                          <p dangerouslySetInnerHTML={{ __html: ele.acf.call_to_action_description || "With Our Well-Researched Web Development Services, Your Business Can Attain Significant Online Presence While Meeting Its Goals Effectively." }}></p>
                          <div className="call_button">
                            <button id='sucess-journy-btn' onClick={() => router.push('/contact')}>call us now</button>
                          </div>
                        </div>
                        <CallToAction />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parallax-container" style={{ background: "#fff" }}>
              <div className="container-5">
                <div className="content about_page_testimonial">
                  <TestimonialSection ele={ele} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutUs;
