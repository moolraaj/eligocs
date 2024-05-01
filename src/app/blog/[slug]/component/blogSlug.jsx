import Link from "next/link";

export default function BlogSlug({data}) {
    return(
        <>
        <div className="blog_post_page_outer page_top">
            <div className="blog_post_inner">
                {data.map((blogPost, index)=>{
                    return(
                        <div key={index} className="blog_post">
                            <div className="blog_post_header">
                            <h1>{blogPost.acf.blog_post_tittle}</h1>
                            <p><span>{blogPost.acf.post_by_}</span> <span>{blogPost.acf.blog_post_date}</span></p>
                            <img src={blogPost.acf.blog_post_image.url} alt="blog_post_image" />
                            </div>
                            <div className="blog_itenary" dangerouslySetInnerHTML={{__html: blogPost.acf.blog_itenary}}></div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}
