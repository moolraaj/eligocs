'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { COURSE_PAGE_SIZE, allExportedApi } from '@/utils/apis/Apis';
import { useRouter } from 'next/navigation';
import { emptyImage } from '../../../../public/assets/images';


function CoursesPage() {
  const router = useRouter();
  const api = allExportedApi();
  const [coursesPageData, setCoursesPageData] = useState([]);
  const [result, setResult] = useState({ course_categories: [], courses: [] });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [noCoursesFound, setNoCoursesFound] = useState(false);
  const [filteredCoursesData, setFilteredCoursesData] = useState([]);

  const loadCoursePageData = async () => {
    let data = await api.CoursesPageApi();
    setCoursesPageData(data);
  };

  const loadAllCourses = async () => {
    let response = await api.AllCourses();
    setResult(response);
  };

  useEffect(() => {
    loadCoursePageData();
    loadAllCourses();
  }, []);

  useEffect(() => {
    setFilteredCoursesData(filteredCourses());
  }, [result, selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const totalPages = () => Math.ceil(filteredCoursesData.length / COURSE_PAGE_SIZE);

  const filteredCourses = () => {
    let filtered = selectedCategory
      ? result.courses.filter((course) => course.course_category.includes(selectedCategory))
      : result.courses;
    setNoCoursesFound(filtered.length === 0);
    return filtered;
  };

  const renderCourses = () => {
    const startIndex = (currentPage - 1) * COURSE_PAGE_SIZE;
    const endIndex = startIndex + COURSE_PAGE_SIZE;
    return filteredCoursesData.slice(startIndex, endIndex).map((course, index) => (
      <ul key={index} className="course">
        <li>
          <img src={course.acf.course_logo.url || emptyImage.src} alt="course_logo" />
        </li>
        <li>
          <h1>{course.acf.course_tittle}</h1>
        </li>
        <li>
          <span
            dangerouslySetInnerHTML={{
              __html: course.acf.course_short_intro.slice(0, 100),
            }}
          ></span>
          ..
        </li>
        <li>
          <Link href={`/courses/${course.slug}`}>Read More</Link>
        </li>
      </ul>
    ));
  };

  const renderPaginationButtons = () => {
    const totalPagesCount = totalPages();
    const pageNumbers = Array.from({ length: totalPagesCount }, (_, i) => i + 1);

    const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <div className="pagination-buttons">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            className={pageNumber === currentPage ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="courses-page-outer page_top">
        <div className="courses-page-inner">
          {coursesPageData.map((coursesData, index) => (
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
            <div>
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

          {filteredCoursesData.length >= COURSE_PAGE_SIZE && renderPaginationButtons()}
        </div>
      </div>
    </>
  );
}

export default CoursesPage;
