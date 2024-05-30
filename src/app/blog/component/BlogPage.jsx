'use client';
import CallToAction from "@/app/call-to-action/callToAction";
import { BLOG_PAGE_SIZE, allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import { useEffect, useState } from "react";
import emptyimg from '../../assets/empty.jpg';

function BlogPage() {
  const api = allExportedApi();
  const [blogPageData, setBlogPageData] = useState([]);
  const [allBlogPosts, setAllBlogPosts] = useState({ all_categories: [], blogs: [] });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const BLOG_PAGE_SIZE = 12; 

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const renderPageButtons = () => {
    const pageCount = Math.ceil(totalCount / BLOG_PAGE_SIZE);
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
      buttons.push(
        <button 
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={totalCount === 0}
          className={i === page ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const { all_categories, blogs } = allBlogPosts;

  const loadAllBlogPosts = async () => {
    try {
      const response = await api.AllBlogPOsts(page, BLOG_PAGE_SIZE);
    
      setAllBlogPosts(response.data);
      setTotalCount(response.totalCount);
    } catch (error) {
     
    }
  };

  const fetchBlogPageData = async () => {
    try {
      const data = await api.BlogPageApi();
      setBlogPageData(data);
    } catch (error) {
     
    }
  };

  useEffect(() => {
    loadAllBlogPosts();
    fetchBlogPageData();
  }, [page]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.blog_category.includes(selectedCategory))
    : blogs;

 

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <div className="blog-page-outer page_top">
        <div className="blog-page-inner-wrapper">
          {blogPageData.map((data, index) => (
            <div key={index} className="blog-header-section">
              <div className="blog-header-image-heading">
                <div className="blog_img_heading_wrapper">
                  <h2>{data.acf.blog_page_heading}</h2>
                  <img src={data.acf.blog_page_image} alt="blogPageImage" />
                  <span></span>
                </div>
                <div className="blog_page_heading_wrapper">
                  <h1>{data.acf.blog_page_heading}</h1>
                  <div className="blog-header-description">
                    <p>{data.acf.blog_page_description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="filter_blog_posts">
            <div className="filter_blog_heading">
              <h2>Blogs</h2>
            </div>
            <div className="blog_filter_dropdown">
              <select name="category" id="blog_category" onChange={handleCategoryChange}>
                <option value="">All Blogs</option>
                {all_categories && all_categories.map((category, index) => (
                  <option value={category} key={index}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="blog-posts-section">
            <div className="all-blog-posts-outer">
              {filteredBlogs.length > 0 ? filteredBlogs.map((blog) => (
                <ul className="blog-post" key={blog.id}>
                  <Link href={`/blog/${blog.slug}`}>
                    <li className="blog-post-img">
                      <img src={blog.acf.blog_post_image || emptyimg.src} alt="blog_post_image" />
                    </li>
                    <li className="blog-post-info-wrapper">
                      <h2>{blog.acf.blog_post_tittle.slice(0,60)}...</h2>
                      <p>
                        <span>{blog.acf.post_by_}</span>
                        <span>{formatDate(blog.modified_gmt)}</span>
                      </p>
                    </li>
                  </Link>
                </ul>
              )) : (
                <p id="no_blogs_found">No blogs available.</p>
              )}
            </div>
          </div>
          <div className="pagination_button">
            {renderPageButtons()}
            </div>
        </div>
      </div>
      <div className="call_outer inner_blogs blog_page_call_to_action">
        <div className="inner_call">
          <CallToAction />
        </div>
      </div>
    </>
  );
}

export default BlogPage;
