
'use client';
import CallToAction from "@/app/call-to-action/callToAction";
import { BLOG_PAGE_SIZE, allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import { useEffect, useState } from "react";
import { emptyImage } from "../../../../public/assets/images";
import { useRouter } from "next/navigation";

function BlogPage() {
  let router = useRouter();
  let api = allExportedApi();
  const [blogPageData, setBlogPageData] = useState([]);
  const [allBlogPosts, setAllBlogPosts] = useState({ all_categories: [], blogs: [] });
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showPagination, setShowPagination] = useState(true); // State to toggle pagination visibility

  const { all_categories, blogs } = allBlogPosts;

  const loadAllBlogPosts = async () => {
    try {
      let allBlogs = [];
      let currentPage = 1;
      let response;
      do {
        response = await api.AllBlogPOsts(BLOG_PAGE_SIZE, currentPage);
        allBlogs = [...allBlogs, ...response.allData.blogs];
        currentPage++;
      } while (response.totalResult > allBlogs.length);
      setAllBlogPosts({ all_categories: response.allData.all_categories, blogs: allBlogs });
      setFilteredBlogs(allBlogs);
      setCount(Math.ceil(allBlogs.length / BLOG_PAGE_SIZE));
    } catch (error) {
      console.error(error);
    }
  };

  const handlePage = (page) => {
    if (page > 0 && page <= count) {
      setPage(page);
    }
  }

  const fetchBlogPageData = async () => {
    setLoading(false);
    let data = await api.BlogPageApi();
    setBlogPageData(data);
  };

  useEffect(() => {
    fetchBlogPageData();
    loadAllBlogPosts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = blogs.filter(blog => blog.blog_category.includes(selectedCategory));
      setFilteredBlogs(filtered);
      setCount(Math.ceil(filtered.length / BLOG_PAGE_SIZE));
      setShowPagination(filtered.length > 12); // Toggle pagination based on filtered results
    } else {
      setFilteredBlogs(blogs);
      setCount(Math.ceil(blogs.length / BLOG_PAGE_SIZE));
      setShowPagination(true); // Always show pagination when no category filter
    }
  }, [selectedCategory, blogs]);

  useEffect(() => {
    if (!selectedCategory) {
      setFilteredBlogs(blogs.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE));
    } else {
      const filtered = blogs.filter(blog => blog.blog_category.includes(selectedCategory));
      setFilteredBlogs(filtered.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE));
    }
  }, [page, selectedCategory, blogs]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setPage(1); // Reset to first page when category changes
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      {blogPageData && blogPageData.map((data, index) => (
        <div className="blog-page-outer page_top" key={index}>
          <div className="blog-page-inner-wrapper">
            <div className="blog-header-section">
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
          </div>

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
              {loading ? (
                <p className="loading_data">Loading...</p>
              ) : (
                filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <ul className="blog-post" key={blog.id}>
                      <Link href={`/blogs/${blog.slug}`}>
                        <li className="blog-post-img">
                          <img src={blog.acf.blog_post_image || emptyImage.src} alt="blog_post_image" />
                        </li>
                        <li className="blog-post-info-wrapper">
                          <h2>{blog.acf.blog_post_tittle.slice(0, 60)}...</h2>
                          <p>
                            <span>{blog.acf.post_by_}</span>
                            <span>{formatDate(blog.date)}</span>
                          </p>
                        </li>
                      </Link>
                    </ul>
                  ))
                ) : (
                  <p id="no_blogs_found">No blogs available.</p>
                )
              )}
            </div>
          </div>

          {showPagination && (
            <div className="pagination-buttons">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={page === index + 1 ? 'active' : ''}
                  onClick={() => handlePage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}

          <div className="call_outer inner_blogs blog_page_call_to_action">
            <div className="inner_call">
              <div className="call_wrapper">
                <div className="call_left_section">
                  <h1>{data.acf.call_to_action_heading_first || "Looking For Reliable And Highly Skilled"}</h1>
                  <h1>{data.acf.call_to_action_heading_second || " Web Development Company & Services"}</h1>
                  <p dangerouslySetInnerHTML={{ __html: data.acf.call_to_action_description || "With Our Well-Researched Web Development Services, Your Business Can Attain Significant Online Presence While Meeting Its Goals Effectively." }}></p>
                  <div className="call_button">
                    <button id='sucess-journy-btn' onClick={() => router.push('/contact')}>call us now</button>
                  </div>
                </div>
                <CallToAction />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogPage;
