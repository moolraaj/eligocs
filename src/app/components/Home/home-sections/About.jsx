import Link from 'next/link'
import React from 'react'

function AboutSection({ele}) {
  return (
    <>
    
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

                  <Link className="meet_our_team" href="/team">Meet Our Team</Link>

                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default AboutSection
