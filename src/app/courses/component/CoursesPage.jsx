'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function CoursesPage({ CoursesPageData, AllCourses }) {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');

  // Get unique categories from AllCourses
  const categories = ['All Courses', ...new Set(AllCourses.map(course => course.course_category))];

  // Handler to filter courses by category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter courses based on selected category
  const filteredCourses = selectedCategory === 'All Courses' ? AllCourses : AllCourses.filter(course => course.course_category.includes(selectedCategory));

  return (
    <>
      <div className="courses-page-outer page_top">
        <div className="courses-page-inner">
          {CoursesPageData.map((coursesData, index) => {
            return (
              <div key={index} className="course-page-top-section">
                <h1>{coursesData.acf.courses_page_heading_first}</h1>
                <h2>{coursesData.acf.courses_page_heading_second}</h2>
                <p>{coursesData.acf.courses_page_description}</p>
                <Link className='button_global' href={`/`}>Get In Touch</Link>
                <img src={coursesData.acf.courses_page_image.url} alt="courses_page_image" />
              </div>
            );
          })}

          <div className="filter_courses_outer">
            <div className='filter_course_top_left'>
                <h1>EligoCs</h1>
            </div>
            <div >
            <select
            className='filter_course_top_right'
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
            </div>
            
          </div>

          <div className="courses-posts-outer">
            {filteredCourses.map((course, index) => (
              <ul key={index} className='course'>
                <li><img src={course.acf.course_logo.url} alt="course_logo" /></li>
                <li><h1>{course.acf.course_tittle}</h1></li>
                <li> <span dangerouslySetInnerHTML={{__html:course.acf.course_short_intro.slice(0,100)}}></span>..</li>
           
                <li><Link href={`/courses/${course.slug}`}>Read More</Link></li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesPage;
