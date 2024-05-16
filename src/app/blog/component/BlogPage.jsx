

'use client'
import CallToAction from "@/app/call-to-action/callToAction"
import { BLOG_PAGE_SIZE, allExportedApi } from "@/utils/apis/Apis"
import Link from "next/link"
import { useEffect, useState } from "react"




function BlogPage({ blogPageData }) {

  let [allBlogPosts, setAllBlogPosts] = useState([])
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);


  const loadAllBolgPosts = async () => {
    let api = allExportedApi()
    let response = await api.AllBlogPOsts();
  
    const totalServices = response.length;
    const totalPages = Math.ceil(totalServices / BLOG_PAGE_SIZE);
    setTotalPages(totalPages);
    const startIndex = (currentPage - 1) * BLOG_PAGE_SIZE;
    const endIndex = Math.min(startIndex + BLOG_PAGE_SIZE, totalServices);
    const displayedServices = response.slice(startIndex, endIndex);
    setAllBlogPosts(displayedServices);
  }

  useEffect(() => {
    loadAllBolgPosts()
  }, [currentPage])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };



  // const categories = ['All Blogs', ...new Set(allBlogPosts.map(blog => blog.course_category))];


  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  // };


  // const filteredCourses = selectedCategory === 'All Courses' ? AllCourses : AllCourses.filter(course => course.course_category.includes(selectedCategory));



  return (
    <>
      <div className="blog-page-outer page_top">
        <div className="blog-page-inner-wrapper">
          {blogPageData.map((data, index) => {
            return (
              <div key={index} className="blog-header-section">
                <div className="blog-header-image-heading">
                  <div className="blog_img_heading_wrapper">
                    <h2>Our Blog</h2>
                    <img src={data.acf.blog_page_image.url} alt="blogPageImage" />
                    <span></span>
                  </div>
                  <div className="blog_page_heading_wrapper">
                    <h1>{data.acf.blog_page_heading}</h1>
                  </div>
                </div>
                <div className="blog-header-description">
                  <p>{data.acf.blog_page_description}</p>
                </div>
              </div>
            )
          })}


          <div className="blog-posts-section">
            <div className="all-blog-posts-outer">
              {allBlogPosts.map((blogPost, index) => {
                return (
                  <ul key={index} className="blog-post">
                    <Link href={`/blog/${blogPost.slug}`}>
                      <li className="blog-post-img"><img src={blogPost.acf.blog_post_image.url} alt="blog_post_image" />

                      </li>
                      <li className="blog-post-info-wrapper">
                        <h2>{blogPost.acf.blog_post_tittle}</h2>
                        <p><span>{blogPost.acf.post_by_}</span>  <span>{blogPost.acf.blog_post_date}</span></p>
                      </li>
                    </Link>
                  </ul>
                )
              })}
            </div>
            <div className="Previous_next_button">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
              <span>Blogs {currentPage} of {totalPages}</span>
              <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
          </div>
        </div>
      </div>
      <div className="call_outer inner_blogs">
        <div className="inner_call">
          <CallToAction />
        </div>
      </div>

    </>
  )
}

export default BlogPage