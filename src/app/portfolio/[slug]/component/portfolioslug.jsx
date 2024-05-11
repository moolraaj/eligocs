'use client'
import React, { useState, useRef, useEffect } from 'react';
import arrow from '../../../assets/headerAssets/arrow.png' 


import PortfolioComponent from "../../component/portfolioComponent";
import Lightbox from '../../Lightbox';

export default function Portfolioslug({ data }) {
    console.log(data)


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




    return (
        <>

            {
                data.map((ele) => {
                    return <div className="portfolio_inner_template" key={ele.id}>
                        <div className="portfolio_inner_section">
                            <div className="portfolio_top_section">
                                <div className="portfolio_top_flex">
                                    <div className="portfolio_top_left_section">
                                        <div className="portfolio_top_image">
                                            <img src={ele.acf.portfolio_inner_image} />
                                        </div>
                                        <div className="portfolio_top_right_section">
                                            <h1>{ele.acf.portfolio_heading}</h1>
                                        </div>
                                    </div>

                                </div>
                                <div className="top_bottom_bar"></div>
                            </div>

                            <div className="portfolio_relative_description">
                                <div className="port_description">
                                    <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_description }}></p>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio_project">
                            <div className="portfolio_projects_flex">
                                <div className="portfolio_project_heading">
                                    <h1>{ele.acf.portfolio_projects_heading}</h1>
                                </div>


                                <div className="portfolio_showcase_right">
                                    <div className="portfolio_inner">
                                        <PortfolioComponent />
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
                                <img src={arrow.src} alt='left-icons'/>
                                </button>
                                <button className="next" onClick={nextSlide} aria-level='toggle_right_button'>
                                <img src={arrow.src} alt='left-icons'/>
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





