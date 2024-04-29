import Link from 'next/link'
import React from 'react'

function CoursesPage({CoursesPageData,AllCourses}) {
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
            {AllCourses.map((course, index)=>{
                return(
                    <ul key={index} className='course'>
                        <li><img src={course.acf.course_logo.url} alt="course_logo"/></li>
                        <li><h1>{course.acf.course_tittle}</h1></li>
                        <li>{course.acf.course_short_intro}</li>
                        <li><Link href={`/`}>Read More</Link></li>
                    </ul>
                )
            })}
        </div>
    </div>
   </div>
   </>
  )
}

export default CoursesPage