import Link from "next/link"

function BlogPage({blogPageData,allBlogPosts}) {
    
  return (
    <>
    <div className="blog-page-outer">
      <div className="blog-page-inner-wrapper">
        {blogPageData.map((data,index)=>{
         return (
         <div key={index} className="blog-header-section">
          <div className="blog-header-image-heading">
            <img src={data.acf.blog_page_image.url} alt="blogPageImage" />
            <h1>{data.acf.blog_page_heading}</h1>
          </div>
          <div className="blog-header-description">
            <p>{data.acf.blog_page_heading}</p>
          </div>
        </div>
        )
        })}
        
       
        <div className="blog-posts-section">
        <div className="all-blog-posts-outer">
        {allBlogPosts.map((blogPost, index)=>{
          return(
            <ul key={index} className="blog-post">
              <li className="blog-post-img"><img src={blogPost.acf.blog_post_image.url} alt="blog_post_image" /></li>
              <li className="blog-post-info-wrapper">
                <h2>{blogPost.acf.blog_post_tittle}</h2>
                <p><span>{blogPost.acf.post_by_}</span>  <span>{blogPost.acf.blog_post_date}</span></p>
              </li>
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