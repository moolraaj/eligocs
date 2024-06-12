'use client';

import CallToAction from '@/app/call-to-action/callToAction';
import { allExportedApi } from '@/utils/apis/Apis';
import React, { useEffect, useState } from 'react';
import { emptyImage } from '../../../../../public/assets/images';
import { useRouter } from 'next/navigation';


export default function BlogSlug({ slug }) {
    let router = useRouter();
    const api = allExportedApi();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    const fetchdynamicBlogs = async () => {
        try {
            let response = await api.SingleBlogPost(slug);
            setData(response);
        } catch (error) {
            // Handle error if needed
        } finally {
            setLoading(false); // Set loading to false after data is loaded
        }
    };

    useEffect(() => {
        setLoading(true); // Set loading to true when fetching data
        fetchdynamicBlogs();
    }, [slug]);

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
                // Fallback for browsers that do not support the Web Share API
            }
        } catch (error) {
            // Handle share error if needed
        }
    };

    return (
        <>

            {loading ? ( // Show loading indicator while loading
                <p className="loading_data">Loading...</p>
            ) : (
                data && data.map((blogPost, index) => (
                    <>
                        <div className="blog_post_page_outer page_top">
                            <div className="blog_post_inner">
                                <div key={index} className="blog_post">
                                    <div className="blog_post_header">
                                        <h1>{blogPost.acf.blog_post_tittle}</h1>
                                        <p><span>{blogPost.acf.post_by_}</span> <span>{formatDate(blogPost.modified_gmt)}</span></p>
                                        <img src={blogPost.acf.blog_inner_banner_image || emptyImage.src} alt="blog_post_image" />
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
                            </div>
                        </div>
                        <div className="call_outer inner_services blog_inner_page_call_to_action">
                            <div className="inner_call">
                                <div className="call_wrapper">
                                    <div className="call_left_section">
                                        <h1>{blogPost.acf.call_to_action_heading_first_ || "Looking For Reliable And Highly Skilled"}</h1>
                                        <h1>{blogPost.acf.call_to__action_heading_second || " Web Development Company & Services"}</h1>
                                        <p dangerouslySetInnerHTML={{ __html: blogPost.acf.call_to_action_description || "With Our Well-Researched Web Development Services, Your Business Can Attain Significant Online Presence While Meeting Its Goals Effectively." }}></p>
                                        <div className="call_button">
                                            <button id='sucess-journy-btn' onClick={() => router.push('/contact')}>call us now</button>
                                        </div>
                                    </div>
                                    <CallToAction />
                                </div>
                            </div>
                        </div>
                    </>

                ))
            )}


        </>
    );
}
