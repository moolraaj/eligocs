'use client';
import React, { useState, useRef, useEffect } from 'react';
import arrow from '../../../assets/headerAssets/arrow.png';
import Lightbox from '../../Lightbox';
import Link from 'next/link';
import { allExportedApi } from '@/utils/apis/Apis';

export default function Portfolioslug({ slug }) {
    let api = allExportedApi();

    const [lightboxImage, setLightboxImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesToShow, setImagesToShow] = useState([]);
    const [data, setData] = useState([]);
    const [relatedPortfolio, setRelatedPortfolio] = useState([]);

    const loadSinglePortfolio = async () => {
        let response = await api.fetchSingleportFolio(slug);
        setData(response);
    };

    const loadAllPortfolio = async () => {
        let response = await api.fetchAllportFolio();
        setRelatedPortfolio(response);
    };

    useEffect(() => {
        loadSinglePortfolio();
        loadAllPortfolio();
    }, []);

    useEffect(() => {
        setImagesToShow(getImagesToShow());
    }, [currentIndex, data]);

    const getImagesToShow = () => {
        const images = data.flatMap(ele => ele.acf.portfolio_gallery);
        if (images.length === 0) return [];

        const firstIndex = currentIndex % images.length;
        const lastIndex = (firstIndex + 2) % images.length;
        if (lastIndex >= firstIndex) {
            return images.slice(firstIndex, lastIndex + 1);
        } else {
            return [...images.slice(firstIndex), ...images.slice(0, lastIndex + 1)];
        }
    };

    useEffect(() => {
        if (data.length > 0) {
            const interval = setInterval(() => {
                nextSlide();
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, data]);

    const nextSlide = () => {
        const imagesLength = data.flatMap(ele => ele.acf.portfolio_gallery).length;
        if (imagesLength > 0) {
            setCurrentIndex((currentIndex + 1) % imagesLength);
        }
    };

    const prevSlide = () => {
        const imagesLength = data.flatMap(ele => ele.acf.portfolio_gallery).length;
        if (imagesLength > 0) {
            setCurrentIndex((currentIndex - 1 + imagesLength) % imagesLength);
        }
    };

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    // inner portfolio scrolling section
    const itemRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [backButtonOpacity, setBackButtonOpacity] = useState(1);

    const handleScrollLeft = () => {
        itemRef.current.scrollLeft -= 350;
        const containerWidth = itemRef.current.offsetWidth;
        const scrollPercentage = ((scrollLeft - itemRef.current.scrollLeft) / containerWidth) * 100;
        if (scrollPercentage >= 0) {
            setBackButtonOpacity(1);
        } else {
            setBackButtonOpacity(0);
        }
    };

    const handleScrollRight = () => {
        itemRef.current.scrollLeft += 350;
        setBackButtonOpacity(0);
    };

    let relatedReversedPortfolio = [...relatedPortfolio].reverse();

    return (
        <>
            {data.map((ele) => {
                const Portfolio = relatedReversedPortfolio.filter(p => p.slug !== ele.slug);
                return (
                    <div className="portfolio_inner_template" key={ele.id}>
                        <div className="portfolio_inner_section">
                            <div className="portfolio_top_section">
                                <div className="portfolio_top_flex">
                                    <div className="portfolio_top_left_section">
                                        <div className="portfolio_inner_page_image_heading_section">
                                            <div className="portfolio_top_left_heading">
                                                <h3>{ele.acf.portfolio_title}</h3>
                                            </div>
                                            <div className="portfolio_top_image">
                                                <img src={ele.acf.portfolio_inner_image} alt="Portfolio Image" />
                                                <span></span>
                                            </div>
                                        </div>

                                        <div className="portfolio_top_right_section">
                                            <h1>{ele.acf.portfolio_title}</h1>
                                            <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_inner_page_top__description }}></p>
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
                                        {Portfolio.map((e, index) => (
                                            <Link key={index} href={`/portfolio/${e.slug}`}>{e.acf.portfolio_title}</Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio_project">
                            <div className="portfolio_projects_flex">
                                <div className="portfolio_project_heading">
                                    <h1>{ele.acf.portfolio_title}</h1>
                                    <Link
                                        className='back-to-projects'
                                        href={`/portfolio`}
                                        style={{ opacity: backButtonOpacity, position: 'absolute', padding: '15px 20px', background: '#EAAA00', borderRadius: "20px", display: 'inline-flex', alignItems: 'center', justifyContent: 'center', zIndex: 99999 }}
                                    >
                                        Back To All Project
                                    </Link>
                                </div>

                                {/* Left Scroll Button */}
                                <img src={arrow.src} alt="arrow" className="scroll-button left"
                                    onClick={handleScrollLeft}
                                    style={{
                                        top: '50%',
                                        left: '10px',
                                        transform: 'translateY(-50%) rotate(180deg)',
                                    }} />

                                {/* Right Scroll Button */}
                                <img src={arrow.src} alt="arrow" className="scroll-button right"
                                    onClick={handleScrollRight}
                                    style={{
                                        top: '50%',
                                        right: '10px',
                                        transform: 'translateY(-50%)',
                                    }} />

                                <div className='scrolling_portfolio_section' ref={itemRef}>
                                    <div className='portfolio_inner'>
                                        <div className="portfolio_right_section">
                                            {Portfolio && Portfolio.map((ele) => (
                                                <div className="portfolio" key={ele.id}>
                                                    <Link href={`/portfolio/${ele.slug}`} className='portfolio-post'>
                                                        <div className="portfolio_image">
                                                            <img src={ele.acf.portfolio_image} alt="" />
                                                        </div>
                                                        <div className="portfolio_flex">
                                                            <div className="portfolio_inner_left_section">
                                                                <div className="portfolio_title">
                                                                    <h4>{ele.acf.portfolio_title}</h4>
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
                                                                    {ele.category.map((cat, index) => (
                                                                        <p key={index}>{cat}</p>
                                                                    ))}
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
                );
            })}
        </>
    );
}

export async function generateStaticParams() {
    let data = await fetchAllportFolio();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}
