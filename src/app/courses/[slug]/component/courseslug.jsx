'use client'
import React, { useState } from 'react';
import CallToAction from "@/app/call-to-action/callToAction";
import Link from "next/link";

export default function CourseSlug({ data, courseFaq }) {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  console.log(courseFaq)
  return (
    <>
      <div className="single_course_outer page_top">
        <div className="single_course_inner">
          {data.map((singleCourse, index) => {
            return (
              <div className="single_course" key={index}>
                <div className="course_post_wrapper">
                  <div className="course_image">
                    <img
                      src={singleCourse.acf.course_image.url}
                      alt="course_image"
                    />
                    <span></span>
                  </div>
                  <div className="course_intro_join_section">
                    <div className="course_intro_wrapper">
                      <h1>{singleCourse.acf.corse_introduction_heading}</h1>
                      <p>{singleCourse.acf.course_introduction}</p>
                    </div>
                    <div className="course_join_wrapper">
                      <div className="course_join_inner">
                        <p>{singleCourse.acf.join_course_heading}</p>
                        <Link href={`/`}>JOin Course Now</Link>
                      </div>
                    </div>
                  </div>
                  {singleCourse.acf.what_you_will_learn_heading && (
                    <div className="what_u_learn_section">
                      <h2>What You'll Learn</h2>
                      <p>{singleCourse.acf.what_you_will_learn_heading}</p>
                      {singleCourse.acf.course_points_ &&
                        singleCourse.acf.course_points_.map(
                          (coursePoints, index) => {
                            return (
                              <ul
                                key={index}
                                className="course_points"
                              >
                                <li>
                                  <h3
                                    dangerouslySetInnerHTML={{
                                      __html: coursePoints.course_point_tittle,
                                    }}
                                  ></h3>
                                </li>
                                <li>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: coursePoints.course_point_explanation,
                                    }}
                                  ></p>
                                </li>
                              </ul>
                            );
                          }
                        )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
      <div className="course_call_to_action">
            <div className="inner_call">
              <CallToAction />
            </div>
          </div>
          <div className="course_page_faq_Section">
          <div className="inner_call">
            <h1 className='course_faq_heading'>Why Choose Our <span>Back-End Development</span> Course</h1>
            {
              courseFaq.map((ele) => {
                return <div key={ele.id} className="course_page_faq_inner">
                  {
                    ele.acf.couerse_page_faq.map((cFaq, index) => {
                      return <div key={index} className="course_faq">
                        <div className='course_faq_title_btn'>
                          
                          <h2>{cFaq.course_faq_tittle}</h2>
                          <div onClick={() => toggleAccordion(index)} className={`faq_arrow-icon ${activeIndex === index ? 'active' : ''}`}>{activeIndex === index ? '-' : '+'}</div>
                        </div>
                        {activeIndex === index && (
                          <div className="faq_ans_section">
                            <p>{cFaq.course_faq_description}</p>
                          </div>
                        )}
                      </div>
                    })
                  }
                </div>
              })
            }
            </div>
          </div>
    </>
  );
}
