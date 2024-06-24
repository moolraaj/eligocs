'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { allExportedApi } from '@/utils/apis/Apis';
import { useRouter } from 'next/navigation';
import { emptyImage, formClose } from '../../../../public/assets/images';
import JoinCourse from '@/app/_forms/JoinCourse';

function CoursesPage() {
  const router = useRouter();
  const api = allExportedApi();
  const [coursesPageData, setCoursesPageData] = useState([]);
  const [result, setResult] = useState({ course_categories: [], courses: [] });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [noCoursesFound, setNoCoursesFound] = useState(false);
  const [filteredCoursesData, setFilteredCoursesData] = useState([]);
  const [isApplyJobVisible, setIsApplyJobVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const [courseName, setCourseName] = useState('');

  const toggleFormVisibility = (courseName) => {
    setIsApplyJobVisible(!isApplyJobVisible);
    setCourseName(courseName);
  };

  const closeApplyJob = () => {
    setIsApplyJobVisible(false);
  };

  const loadCoursePageData = async () => {
    try {
      let data = await api.CoursesPageApi();
      setCoursesPageData(data);
    } catch (error) {
      // Handle error if needed
    } finally {
      setLoading(false); // Set loading to false after data is loaded
    }
  };

  const loadAllCourses = async () => {
    try {
      let response = await api.AllCourses();
      setResult(response);
    } catch (error) {
      // Handle error if needed
    } finally {
      setLoading(false); // Set loading to false after data is loaded
    }
  };

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching data
    loadCoursePageData();
    loadAllCourses();
  }, []);

  useEffect(() => {
    setFilteredCoursesData(filteredCourses());
  }, [result, selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCourses = () => {
    let filtered = selectedCategory
      ? result.courses.filter((course) => course.course_category.includes(selectedCategory))
      : result.courses;
    setNoCoursesFound(filtered.length === 0);
    return filtered;
  };

  const renderCourses = () => {
    return filteredCoursesData.map((course, index) => (
      <ul key={index} className="course">
        <li>
          <img src={course.acf.course_logo.url || emptyImage.src} alt="course_logo" />
        </li>
        <li>
          <h1>{course.acf.course_tittle}</h1>
        </li>
        <li>
          <span className='course_short_intro_section'
            dangerouslySetInnerHTML={{
              __html: course.acf.course_short_intro
            }}
          ></span>
        </li>
        <span className='course_card_btns'>
          <span id='course_join_btn' onClick={() => toggleFormVisibility(course.acf.course_tittle)}>Join Course</span>
          <Link id='course_cirect_connect_btn' href="https://api.whatsapp.com/send/?phone=%2B919317215300&text&type=phone_number&app_absent=0" target='_blank'>Direct Connect</Link>
        </span>
      </ul>
    ));
  };

  return (
    <>
      {isApplyJobVisible && (
        <div className="join_course_form">
          <div className="cf7_form_outer" style={{ animation: isApplyJobVisible ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
            <div className="cf7_form_inner">
              <div className="cf7_top_banner">
                <div className="cf7_left_section">
                  <div className="form_banner_heading">
                    <h1>Join Course</h1>
                  </div>
                  <div className="form_slider_wrapper">
                    <div className="_form_paragraph">
                      <p> <span>Apply for</span> {courseName ? `${courseName} course` : 'course'}</p>
                    </div>
                  </div>
                </div>
                <div className="cf7_right_section">
                  <div className="close_button">
                    <button onClick={closeApplyJob} className="close_button" aria-label='close popup form'>
                      <img src={formClose.src || emptyImage.src} alt="formClose" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="cf7_form_wrapper">
                <JoinCourse courseName={courseName} />
              </div>
            </div>
          </div>
        </div>
      )}

      {loading ? ( // Show loading indicator while loading
        <div className="page_top">
          <p className="loading_data">Loading...</p>
        </div>
      ) : (
        <div className="courses-page-outer page_top">
          <div className="courses-page-inner">
            {coursesPageData && coursesPageData.map((coursesData, index) => (
              <div key={index} className="course-page-top-section">
                <h1>{coursesData.acf.courses_page_heading_first}</h1>
                <h2>{coursesData.acf.courses_page_heading_second}</h2>
                <p>{coursesData.acf.courses_page_description}</p>
                <button className="button_global" onClick={() => router.push('/contact')}>
                  Get In Touch
                </button>
                <img src={coursesData.acf.courses_page_image.url || emptyImage.src} alt="courses_page_image" />
              </div>
            ))}

            <div className="filter_courses_outer">
              <div className="filter_course_top_left">
                <h1>EligoCs</h1>
              </div>
              <div className='filter_course_dropdown'>
                <select
                  className="filter_course_top_right"
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                >
                  <option value="">All Courses</option>
                  {result.course_categories.map((category, index) => (
                    <option value={category} key={index}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={`courses-posts-outer ${noCoursesFound ? 'no-courses' : ''}`}>

              {filteredCoursesData.length > 0 ? (
                renderCourses()
              ) : (
                <p>No courses found for selected category.</p>
              )}
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default CoursesPage;
