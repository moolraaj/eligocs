"use client";
import React, { useEffect, useState } from "react";


import Testimonial from "./Testimonial";
import ParallaxContainer from "../About/ParallaxContainer";
import Services from "../services/Services";

function Home() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrolling, setScrolling] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const loadData = async () => {
    setLoading(true);
    const url = await fetch(
      `https://api.eligo.cloud/wp-json/wp/v2/pages?slug=home`
    );
    let data = await url.json();
    setResult(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    loadData();
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      let posY = window.scrollY;
      let positions = result.map(
        (_, index) => posY + index * window.innerHeight
      );
      setScrolling(positions);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      {result.map((ele) => (
        <div className="home_wrapper" key={ele.id}>
            <ParallaxContainer  speed={0.5}
              className="container-1">
            <div className="page_outer home_section_outer">
            <div className="page_inner home_section_inner">
              <div className="home_slider_wrapper">
                <h1>{ele.acf.slider_heading_first}</h1>
                <h1>{ele.acf.slider_heading_second}</h1>
                <p
                    dangerouslySetInnerHTML={{
                      __html: ele.acf.slider_para,
                    }}></p>

                    
                    </div>
              <div
                className={`home_slider_animate ${
                  isScrolled ? "scrolled" : ""
                }`}>
                <div className={`innovation_left ${isScrolled ? "hide" : ""}`}>
                  <h1 className={`innovation-heading`}>{ele.acf.innovation}</h1>
                </div>
                <div
                  className={`innovation_right ${
                    !isScrolled ? "hide" : "show"
                  }`}>
                  {isScrolled && (
                    <>
                      <button type="button">apply now</button>
                      <p>{ele.acf.innovation_heading}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
            </ParallaxContainer>
         

          {/*about us section starts*/}
       
          <div className="page_outer about_section_outer scrolling">
            <div className="page_inner about_section_inner">
              <div className="home_about_wrapper">
                <div className="home_about_left">
                  <h1>{ele.acf.about_heading}</h1>
                </div>
                <div className="home_about_right">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: ele.acf.about_para_first,
                    }}></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: ele.acf.about_para_second,
                    }}></p>

                     <a className="meet_our_team" href="/team">Meet Our Team</a>
                   
                </div>
              </div>
            </div>
          </div>
        
          

          {/*about us section ends*/}

          {/*transformation section starts*/}

          <div className="page_outer transform_section_outer scrolling">
            <div className="page_inner transform_section_inner">
              <div className="home_transformation_wrapper">
                <div className="trans_flex">
                  <div className="trans_left_section">
                    <h1>{ele.acf.transformation_top_heading}</h1>
                  </div>
                  <div className="trans_right_section">
                    <Services/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*transformation section starts*/}

          {/*company section starts*/}
          <div className="page_outer  company_section_outer scrolling">
            <div className="page_inner company_section_inner">
              <div className="home_company_wrapper">
                <div className="company_flex">
                  <div className="company_left_section">
                    
                    <h1
                    dangerouslySetInnerHTML={{
                      __html: ele.acf.our_company_heading,
                    }}></h1>

                    
                    <p>{ele.acf.our_company_para}</p>
                  </div>

                  <div className="company_right_section">
                    {ele.acf.our_compnay_repeater.map((items, index) => (
                      <div className="company_scroll_wrapper" key={index}>
                        <div className="company_faq_wrapper">
                          <div
                            className="company_question"
                            onClick={() => onTitleClick(index)}>
                            <h4>{items.faq_question}</h4>
                            <i
                              className={`fa ${
                                activeIndex === index ? "fa-minus" : "fa-plus"
                              }`}></i>
                          </div>
                          {activeIndex === index && (
                            <div className="company_answers">
                              <p>{items.faq_answer}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*company process section ends*/}

          {/*our development process starts*/}
          <div className="page_outer development_section_outer scrolling">
            <div className="page_inner development_section_inner">
              <div className="home_development_wrapper">
                <div className="development_flex">
                  <div
                    className={`development_left_section ${
                      window.scrollY <= scrolling[0] ? "sticky" : ""
                    }`}>
                    <h1>{ele.acf.our_development_heading}</h1>
                  </div>
                  <div className="development_right_section">
                    {ele.acf.our_development_repeater.map((items, index) => {
                      return (
                        <div
                          className={`development_scroll ${
                            window.screenY <= scrolling[index] ? "sticky" : ""
                          }`}
                          style={{ top: index * 100 + " vh" }}>
                          <div className="develop_number">
                            <h4>{items.development_serial_number}</h4>
                          </div>
                          <div className="develop_heading">
                            <h4>{items.development_heading}</h4>
                          </div>
                          <div className="develop_para">
                            <p>{items.development_paragraph}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*our development process ends*/}

          {/*testimonial section starts*/}
          <div className="content">
            <Testimonial />
          </div>

          {/* <div className="page_outer testimonial_section_outer scrolling">
                            <div className="page_inner testimonial_section_inner">
                                <div className="home_testimonial_wrapper">
                                    <div className="testimonial_flex">
                                        <div className="testimonial_left_section">
                                            <h1>testimonials
                                                from our
                                                valued clients</h1>
                                        </div>
                                        
                                        <div className="testimonial_right_section">
                                            <div className="testimonial_inner_flex">

                                                <Testimonial
                                                />

                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
 */}

          {/*testimonial section ends*/}

          <div className="page_outer quote_section_outer scrolling">
            <div className="page_inner quote_section_inner">
              <div className="home_quote_wrapper">
                <div className="qoute_para">
                  <p>{ele.acf.quote_para}</p>
                </div>
                <div className="quote_button">
                  <button className="quote_redirection">get a quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;
