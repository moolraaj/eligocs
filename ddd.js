

'use client'
import CallToAction from "@/app/call-to-action/callToAction"
import { BLOG_PAGE_SIZE, allExportedApi } from "@/utils/apis/Apis"
import Link from "next/link"
import { useEffect, useState } from "react"




function BlogPage({ blogPageData }) {


  let [allBlogPosts, setAllBlogPosts] = useState([])
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);


  const { all_categories, blogs } = allBlogPosts
  console.log(all_categories)
  console.log(blogs)


  const loadAllBolgPosts = async () => {
    let api = allExportedApi()
    let response = await api.AllBlogPOsts();
    setAllBlogPosts(response)

    // const totalServices = response.length;
    // const totalPages = Math.ceil(totalServices / BLOG_PAGE_SIZE);
    // setTotalPages(totalPages);
    // const startIndex = (currentPage - 1) * BLOG_PAGE_SIZE;
    // const endIndex = Math.min(startIndex + BLOG_PAGE_SIZE, totalServices);
    // const displayedServices = response.slice(startIndex, endIndex);
    // setAllBlogPosts(displayedServices);
  }

  useEffect(() => {
    loadAllBolgPosts()
  }, [currentPage])

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };


  console.log('data' + allBlogPosts)





  return (
    <>

      <div className="blog-page-outer page_top">
        <div className="blog-page-inner-wrapper">
          {blogPageData.map((data, index) => {
            return <div key={index} className="blog-header-section">
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


          })}



          <select name="" id="">
            {
              all_categories && all_categories.map((ele, index) => {
                return <option value={ele} key={index}>{ele}</option>
              })
            }
          </select>







          <div className="blog-posts-section">
            <div className="all-blog-posts-outer">
              {
                blogs && blogs.map((ele) => {
                  return <ul className="blog-post" key={ele.id}>
                    <Link href={`/blog/${ele.slug}`}>
                      <li className="blog-post-img">
                        <img src={ele.acf.blog_post_image} alt="blog_post_image" />
                      </li>
                      <li className="blog-post-info-wrapper">
                        <h2>{ele.acf.blog_post_tittle}</h2>
                        <p>
                          <span>{ele.acf.post_by_}</span>
                          <span>{formatDate(ele.date)}</span>
                        </p>
                      </li>
                    </Link>
                  </ul>
                })
              }

            </div>
            {/* <div className="Previous_next_button">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
              <span>Blogs {currentPage} of {totalPages}</span>
              <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div> */}
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