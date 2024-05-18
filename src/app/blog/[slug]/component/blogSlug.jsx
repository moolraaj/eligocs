'use client'
import CallToAction from '@/app/_call-to-action/callToAction';
import React from 'react';

export default function BlogSlug({ data }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };
    const shareBlogPost = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: document.title,
                    url: window.location.href
                });
            } else {
                console.log("Web Share API not supported.");
            }
        } catch (error) {
            console.error('Error sharing:', error.message);
        }
    };

    return (
        <>
            <div className="blog_post_page_outer page_top">
                <div className="blog_post_inner">
                    {data.map((blogPost, index) => (
                        <div key={index} className="blog_post">
                            <div className="blog_post_header">
                                <h1>{blogPost.acf.blog_post_tittle}</h1>
                                <p><span>{blogPost.acf.post_by_}</span> <span>{formatDate(blogPost.date)}</span></p>
                                <img src={blogPost.acf.blog_post_image} alt="blog_post_image" />
                            </div>
                            <div className="share_blog_post">
                                <div className="share_blog_heading">
                                    <h2>Share Blog</h2>
                                </div>
                                <div className="share_with_social_platforms">
                                    <button onClick={shareBlogPost}>Share</button>
                                </div>
                            </div>
                            <div className="blog_descritpion" dangerouslySetInnerHTML={{ __html: blogPost.acf.blog_descritpion }}></div>
                        </div>
                    ))}
                </div>
                <div className="blog_post_gallary">
                </div>

            </div>
            <div className="call_outer inner_services blog_inner_page_call_to_action">
                <div className="inner_call">
                    <CallToAction />
                </div>
            </div>
        </>
    );
}
