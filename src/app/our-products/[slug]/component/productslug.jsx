'use client'
import React,{useState} from "react";
import Link from "next/link";
import Lightbox from "@/app/portfolio/Lightbox";



export default  function Poductslug({ data, allportFolioProducts }) {
    
    const [lightboxImage, setLightboxImage] = useState(null);

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
                    return <div className="portfolio_inner_template page_top" key={ele.id}>
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

                        <div className="portfolio_project">
                            <div className="portfolio_projects_flex">
                                <div className="portfolio_project_heading">
                                    <h1>{ele.acf.portfolio_projects_heading}</h1>
                                </div>
                                <div className="portfolio_showcase_right">

                                    <div className="portfolio_right_section">
                                        {allportFolioProducts.map((ele) => (
                                            <div className="portfolio" key={ele.id}>
                                                <Link href={`/our-products/${ele.slug}`} className='portfolio-post'>
                                                    <div className="portfolio_image">
                                                        <img src={ele.acf.portfolio_image} alt="" srcSet="" />
                                                    </div>
                                                    <div className="portfolio_flex">
                                                        <div className="portfolio_inner_left_section">
                                                            <div className="portfolio_title">
                                                                <h4>{ele.acf.portfolio_heading}</h4>
                                                            </div>
                                                            <div className="portfolio_short_description">
                                                                <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_technology }}></p>
                                                            </div>
                                                        </div>
                                                        <div className="portfolio_inner_right_section">
                                                            <div className="portfolio_technology">
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





