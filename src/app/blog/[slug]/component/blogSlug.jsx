import React from 'react';

export default function BlogSlug({ data }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="blog_post_page_outer page_top">
            <div className="blog_post_inner">
                {data.map((blogPost, index) => (
                    <div key={index} className="blog_post">
                        <div className="blog_post_header">
                            <h1>{blogPost.acf.blog_post_tittle}</h1>
                            <p><span>{blogPost.acf.post_by_}</span> <span>{formatDate(blogPost.date)}</span></p>
                            <img src={blogPost.acf.blog_post_image.url} alt="blog_post_image" />
                        </div>
                        <div className="blog_descritpion" dangerouslySetInnerHTML={{ __html: blogPost.acf.blog_descritpion }}></div>
                    </div>
                ))}
            </div>
            <div className="blog_post_gallary">

            </div>
        </div>
    );
}
