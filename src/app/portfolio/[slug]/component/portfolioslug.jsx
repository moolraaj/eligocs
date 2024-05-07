'use client'
import React, { useState,useRef,useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import PortfolioComponent from "../../component/portfolioComponent";
import Lightbox from '../../Lightbox';

export default  function Portfolioslug({ data }) {


    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };


    const triggerRef = useRef(null);

    useEffect(() => {
        const pin = gsap.fromTo('.portfolio_inner', {
            translateX: 0
        }, {
            xPercent: -100,
            ease: 'none',
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: 'center center',
                end: '2000 top',
                scrub: 1,
                pin: true,
                pinSpacer: false,
                pinnedContainer: '#horizontal',
                invalidateOnRefresh: true,
                onComplete: function () {
                    document.querySelector('.pin-spacer').style.display = 'none !important';
                }
            }
        })

        return () => {
            pin.kill()
        }
    }, [])

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
                        <section ref={triggerRef} id='horizontal' style={{ width: '100%', height: '90vh', margin: 'auto', overflow: 'hidden', zIndex: '99999' }}>
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
                        </section>

                        <marquee  behavior="scroll"  direction="left" scrollamount="15">
                        <div className="portfolio_slider">
                            {ele.acf.portfolio_gallery.map((image, index) => (
                                <div className="portfolio_gallery_wrapper" key={index} onClick={() => openLightbox(image)}>
                                    <img src={image} alt={`portfolio-image-${index}`} />
                                </div>
                            ))}
                        </div>
                        </marquee>
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





