import Link from "next/link"

function BlogPage({blogPageData,allBlogPosts}) {
    
  return (
    <>
    <div className="blog-page-outer page_top">
      <div className="blog-page-inner-wrapper">
        {blogPageData.map((data,index)=>{
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
        {allBlogPosts.map((blogPost, index)=>{
          return(
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
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogPage