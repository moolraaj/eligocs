
'use client';
import React, { useState } from 'react';

function ServicesSlugFaq({ ele }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndexSecond, setActiveIndexSecond] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const toggleAccordionSecond = (index) => {
        setActiveIndexSecond(activeIndexSecond === index ? null : index);
    };

    const servicesInnerFaqSection = Array.isArray(ele.acf?.services_inner_faq_section) ? ele.acf.services_inner_faq_section : [];
    const servicesInnerFaqSectionSecond = Array.isArray(ele.acf?.services_inner_faq_section_second) ? ele.acf.services_inner_faq_section_second : [];

    const hasFirstFaqSection = servicesInnerFaqSection.length > 0;
    const hasSecondFaqSection = servicesInnerFaqSectionSecond.length > 0;

    return (
        <>
            <div className="services_faq_section_first" style={{ display: hasFirstFaqSection ? 'block' : 'none' }}>
                <h1>{ele.acf.faq_tittle || ""}</h1>
                <div className="services_inner_page_faq_wrapper">
                    {servicesInnerFaqSection.map((e, index) => (
                        e.faq_tittle && e.faq_description ? (
                            <div key={index} className="inner_service_faq">
                                <div
                                    onClick={() => toggleAccordion(index)}
                                    className={`services_inner_question arrow-icon ${activeIndex === index ? 'open' : 'closed'}`}
                                >
                                    <h2>{e.faq_tittle}</h2>
                                    <div
                                        onClick={() => toggleAccordion(index)}
                                        className={`arrow-icon ${activeIndex === index ? 'open' : 'closed'}`}
                                    >
                                        {activeIndex === index ? (
                                            <svg style={{ width: '20px', height: '20px' }} className="closed-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                                            </svg>
                                        ) : (
                                            <svg style={{ width: '20px', height: '20px' }} className="open-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                {activeIndex === index && (
                                    <div className="services_inner_answer">
                                        <span dangerouslySetInnerHTML={{ __html: e.faq_description }}></span>
                                    </div>
                                )}
                            </div>
                        ) : null
                    ))}
                </div>
            </div>

            <div className="services_faq_section_second" style={{ display: hasSecondFaqSection ? 'block' : 'none' }}>
                <p id="faq_second_title_one">{ele.acf.faq_second_headong_one || ""}</p>
                <h2 id="faq_second_title_two">{ele.acf.faq_second_heading_two || ""}</h2>
                <div className="services_inner_page_faq_wrapper">
                    {servicesInnerFaqSectionSecond.map((e, index) => (
                        e.faq_tittle && e.faq_description ? (
                            <div key={index} className="inner_service_faq">
                                <div
                                    onClick={() => toggleAccordionSecond(index)}
                                    className={`services_inner_question arrow-icon ${activeIndexSecond === index ? 'open' : 'closed'}`}
                                >
                                    <h2>{e.faq_tittle}</h2>
                                    <div
                                        onClick={() => toggleAccordionSecond(index)}
                                        className={`arrow-icon ${activeIndexSecond === index ? 'open' : 'closed'}`}
                                    >
                                        {activeIndexSecond === index ? (
                                            <svg style={{ width: '20px', height: '20px' }} className="closed-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                                            </svg>
                                        ) : (
                                            <svg style={{ width: '20px', height: '20px' }} className="open-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                {activeIndexSecond === index && (
                                    <div className="services_inner_answer">
                                        <span dangerouslySetInnerHTML={{ __html: e.faq_description }}></span>
                                    </div>
                                )}
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        </>
    );
}

export default ServicesSlugFaq;
