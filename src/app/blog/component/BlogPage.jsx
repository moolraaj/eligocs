'use client'
import CallToAction from "@/app/call-to-action/callToAction"
import { BLOG_PAGE_SIZE, allExportedApi } from "@/utils/apis/Apis"
import Link from "next/link"
import { useEffect, useState } from "react"

function BlogPage({ blogPageData }) {
  const [allBlogPosts, setAllBlogPosts] = useState({ all_categories: [], blogs: [] });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { all_categories, blogs } = allBlogPosts;

  const loadAllBlogPosts = async () => {
    let api = allExportedApi();
    let response = await api.AllBlogPOsts();
    setAllBlogPosts(response);
  };

  useEffect(() => {
    loadAllBlogPosts();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.blog_category.includes(selectedCategory))
    : blogs;

  const totalPages = Math.ceil(filteredBlogs.length / BLOG_PAGE_SIZE);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * BLOG_PAGE_SIZE, currentPage * BLOG_PAGE_SIZE);

  return (
    <>
      <div className="blog-page-outer page_top">
        <div className="blog-page-inner-wrapper">
          {blogPageData.map((data, index) => (
            <div key={index} className="blog-header-section">
              <div className="blog-header-image-heading">
                <div className="blog_img_heading_wrapper">
                  <h2>Our Blog</h2>
                  <img src={data.acf.blog_page_image} alt="blogPageImage" />
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
          ))}

          <select name="category" id="category" onChange={handleCategoryChange}>
            <option value="">All Blogs</option>
            {all_categories && all_categories.map((category, index) => (
              <option value={category} key={index}>{category}</option>
            ))}
          </select>

          <div className="blog-posts-section">
            <div className="all-blog-posts-outer">
              {paginatedBlogs && paginatedBlogs.map((blog) => (
                <ul className="blog-post" key={blog.id}>
                  <Link href={`/blog/${blog.slug}`}>
                    <li className="blog-post-img">
                      <img src={blog.acf.blog_post_image} alt="blog_post_image" />
                    </li>
                    <li className="blog-post-info-wrapper">
                      <h2>{blog.acf.blog_post_tittle}</h2>
                      <p>
                        <span>{blog.acf.post_by_}</span>
                        <span>{formatDate(blog.date)}</span>
                      </p>
                    </li>
                  </Link>
                </ul>
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="Previous_next_button">
            {filteredBlogs.length > BLOG_PAGE_SIZE && (
              <>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
              </>
            )}
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
