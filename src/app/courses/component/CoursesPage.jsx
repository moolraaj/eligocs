import Link from 'next/link'
import React from 'react'

function CoursesPage({CoursesPageData}) {
  return (
   <>
   <div className="courses-page-outer">
    <div className="courses-page-inner">
        {CoursesPageData.map((coursesData,index)=>{
            return(
                <div key={index} className="course-page-top-section">
                    <h1>{coursesData.acf.courses_page_heading_first}</h1>
                    <h2>{coursesData.acf.courses_page_heading_second}</h2>
                    <p>{coursesData.acf.courses_page_description}</p>
                    <Link href={`/`}>Get In Touch</Link>
                    <img src={coursesData.acf.courses_page_image.url} alt="courses_page_image" />
                </div>
            )
        })}

        <div className="courses-posts-outer">
            
        </div>
    </div>
   </div>
   </>
  )
}

export default CoursesPage