'use client';
import React, { useState, useRef, useEffect } from 'react';
import arrow from '../../../assets/headerAssets/arrow.png'


import Lightbox from '../../Lightbox';
import Link from 'next/link';

export default function Portfolioslug({ data, relatedPOrtfolio }) {



    const [lightboxImage, setLightboxImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesToShow, setImagesToShow] = useState([]);
    

    useEffect(() => {
        setImagesToShow(getImagesToShow());
    }, [currentIndex, data]);

    const getImagesToShow = () => {
        const images = data.flatMap(ele => ele.acf.portfolio_gallery);
        const firstIndex = currentIndex % images.length;
        const lastIndex = (firstIndex + 3) % images.length;
        if (lastIndex >= firstIndex) {
            return images.slice(firstIndex, lastIndex + 1);
        } else {
            return [...images.slice(firstIndex), ...images.slice(0, lastIndex + 1)];
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % data.flatMap(ele => ele.acf.portfolio_gallery).length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + data.flatMap(ele => ele.acf.portfolio_gallery).length) % data.flatMap(ele => ele.acf.portfolio_gallery).length);
    };


    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };


    const itemRef = useRef(null);
    const [mouseDown, setMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [zIndex, setZIndex] = useState(0);
    const [backButtonOpacity, setBackButtonOpacity] = useState(1); 


    const handleMouseDown = (e) => {
        e.stopPropagation(); // Stop the propagation of the click event
        setMouseDown(true);
        setStartX(e.pageX - itemRef.current.offsetLeft);
        setScrollLeft(itemRef.current.scrollLeft);
        setBackButtonOpacity(0); // Set opacity to 0 when mouse is down

    }

    const handleMouseLeave = () => {
        setMouseDown(false);
        setZIndex(99);
      
    }

    const handleMouseUp = () => {
        setMouseDown(false);
       
    }

    const handleMouseMove = (e) => {
        if (!mouseDown) return;
        e.preventDefault();
        const X = e.pageX - itemRef.current.offsetLeft;
        const walk = (X - startX) * 2;
        itemRef.current.scrollLeft = scrollLeft - walk;
        
        // Calculate the scroll position as a percentage of container width
        const containerWidth = itemRef.current.offsetWidth;
        const scrollPercentage = ((scrollLeft - itemRef.current.scrollLeft) / containerWidth) * 100;
    
        // Check if the user has scrolled to the right by 50%
        if (scrollPercentage >= 40) {
            setBackButtonOpacity(1);
        } else {
            setBackButtonOpacity(0);
        }
    };
    
    let relatedreversedPortpolio=[...relatedPOrtfolio].reverse()

    return (
        <>

            {
                data.map((ele) => {
                    const Portfolio = relatedreversedPortpolio.filter(relatedreversedPortpolio => relatedreversedPortpolio.slug !== ele.slug);
                    return <div className="portfolio_inner_template" key={ele.id}>
                        <div className="portfolio_inner_section">
                            <div className="portfolio_top_section">
                                <div className="portfolio_top_flex">
                                    <div className="portfolio_top_left_section">
                                        <div className="portfolio_inner_page_image_heading_section">
                                        <div className="portfolio_top_left_heading">
                                            <h3>{ele.acf.portfolio_heading}</h3>
                                        </div>
                                        <div className="portfolio_top_image">
                                            <img src={ele.acf.portfolio_inner_image} />
                                            <span></span>
                                        </div>
                                        </div>
                                       

                                        <div className="portfolio_top_right_section">
                                            <h1>{ele.acf.portfolio_heading}</h1>
                                        </div>
                                    </div>

                                </div>
                                <div className="top_bottom_bar"></div>
                            </div>

                            <div className='portfolio_inner_intenary_related_posts'>
                            <div className="portfolio_relative_description">
                                <div className="port_description">
                                    <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_description }}></p>
                                </div>
                            </div>
                            <div className="portfolio_inner_related_posts">
                                <div className="portfolio_related_posts_inner">
                                <h3>Related Posts</h3>
                                {Portfolio.map((e,index)=>{
                                    return <Link key={index} href={`/portfolio/${e.slug}`}>{e.acf.portfolio_projects_heading}</Link>
                                })}
                                
                                </div>
                               
                            </div>
                            </div>





                        </div>

                        <div className="portfolio_project">
                            <div className="portfolio_projects_flex">
                                <div className="portfolio_project_heading">
                                    <h1>{ele.acf.portfolio_projects_heading}</h1>
                                    <Link className='back-to-projects' href={`/portfolio`} style={{opacity: backButtonOpacity,position: 'absolute',padding:'15px 20px',background: '#EAAA00',borderRadius: "20px",display: 'inline-flex',alignItems: 'center',justifyContent: 'center',zIndex: 99999 }}>Back To All Project</Link>
                                </div>



                                <div className='scrolling_portfolio_section' style={{ zIndex: zIndex}} ref={itemRef}
                                    onMouseDown={handleMouseDown}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseUp}
                                    onMouseMove={handleMouseMove}>
                                    <div className='portfolio_inner' style={{ zIndex: '-999' }}>
                                        <div className="portfolio_right_section" >
                                            {Portfolio && Portfolio.map((ele) => (
                                                <div
                                                    className="portfolio"
                                                    key={ele.id}

                                                >
                                                    <Link href={`/portfolio/${ele.slug}`} className='portfolio-post'>
                                                        <div className="portfolio_image">
                                                            <img src={ele.acf.portfolio_image} alt="" srcSet="" />
                                                        </div>
                                                        <div className="portfolio_flex">
                                                            <div className="portfolio_inner_left_section">
                                                                <div className="portfolio_title">
                                                                    <h4>{ele.acf.portfolio_heading}</h4>
                                                                    
                                                                </div>
                                                                <div className="portfolio_short_description">
                                                                    <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_short_description }}></p>
                                                                </div>
                                                                <div className="portfolio_technology">
                                                                    <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_technology }}></p>
                                                                </div>
                                                            </div>
                                                            <div className="portfolio_inner_right_section">
                                                                <div className="port_showcase_category">
                                                                    {ele.category.map((cat, index) => {
                                                                        return <p key={index}>{cat}</p>
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>





                        <div className="slider_wrapper">


                            <div className="portfolio_slider">
                                {imagesToShow.map((image, index) => (
                                    <div className="portfolio_gallery_wrapper" key={index} onClick={() => openLightbox(image)}>
                                        <img src={image} alt={`portfolio-image-${index}`} />

                                    </div>
                                ))}

                            </div>


                            <div className="slider_buttons">
                                <button className="prev" onClick={prevSlide} aria-level='toggle_left_button'>
                                    <img src={arrow.src} alt='left-icons' />
                                </button>
                                <button className="next" onClick={nextSlide} aria-level='toggle_right_button'>
                                    <img src={arrow.src} alt='left-icons' />
                                </button>



                            </div>
                        </div>




                        {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />}
                    </div>



                })

            }
        </>
    );
}


export async function generateStaticParams() {
    let data = await fetchAllportFolio();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}





