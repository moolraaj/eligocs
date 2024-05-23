import Link from 'next/link';
import React from 'react';


function CareerPage({data}) {
  return (
   <>
   <div className="page_top">
    <div id="career_section" className="career_page_outer">
        <div className="career_page_inner">
            {data.map((ele,index)=>{
                return  <div key={index} className="product-page-top-section">
                <div className="product-top-image-section">
                  <div className="product_heading_left"><h3>{ele.acf.career_page_tittle}</h3></div>
                  <div className="product_image_right">
                    <img src={ele.acf.career_page_header_image} alt="product_page_image" />
                    <span></span>
                  </div>
                </div>
                <div className="product-top-info-section">
                  <div className="product-page-left-info">
                    <h1>{ele.acf.career_page_tittle}</h1>
                    <p dangerouslySetInnerHTML={{__html: ele.acf.career_page_description}}></p>
                  </div>
                  <div className="product-page-right-info">
                    <div className="product_right_info_inner">
                      <p>{ele.acf.button_heading}</p>
                      <Link href={`/career`} >{ele.acf.button_name}</Link>
                    </div>
                  </div>
                </div>
                <div className="current_opening_section_wrapper">
                    <h2>{ele.acf.current_openings_points_heading}</h2>
                    <div className='covering_both'>
                    <div className="current_opening_left">
                        <p dangerouslySetInnerHTML={{__html: ele.acf.current_openings_points}}></p>

                        <Link className='apply_now_career' href={`/career`} >{ele.acf.button_name}</Link>
                    </div>
                    <div className="current_opening_right">
                        <img src={ele.acf.current_openings_image} alt="current_openings_image" />
                    </div>
                    </div>
                 
                </div>
                <div className="experience_section_wrapper">
                    <h2>{ele.acf.require_experience_skills_heading}</h2>
                    <div className="experience_skill_left">
                        <p dangerouslySetInnerHTML={{__html: ele.acf.require_experience_skills_points}}></p>
                    </div>
                </div>
                <div className="duties_section_wrapper">
                    <h2>{ele.acf.responsibilities_and_duties_heading}</h2>
                    <div className="duties_left">
                        <p dangerouslySetInnerHTML={{__html: ele.acf.responsibilities_and_duties_points}}></p>
                    </div>
                </div>
                <div className="how_to_apply_section_wrapper">
                    <h3>{ele.acf.how_to_apply_heading}</h3>
                    <div className="apply_left">
                        <p>{ele.acf.how_to_apply_description}</p>
                    </div>
                    <Link className='apply_now_career' href={`/career`} >{ele.acf.button_name}</Link>
                </div>
              </div>
            }) 
            }
        </div>
    </div>
   </div>
   </>
  )
}

export default CareerPage