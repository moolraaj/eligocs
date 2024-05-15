'use client'
import React, { useState, useRef, useEffect  } from "react";
import Link from "next/link";
import Lightbox from "@/app/portfolio/Lightbox";



export default function Poductslug({ data, allProducts, simlimarProducts }) {

  const [lightboxImage, setLightboxImage] = useState(null);

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

    const handleMouseDown = (e) => {
        e.stopPropagation(); // Stop the propagation of the click event
        setMouseDown(true);
        setStartX(e.pageX - itemRef.current.offsetLeft);
        setScrollLeft(itemRef.current.scrollLeft);
    }

    const handleMouseLeave = () => {
        setMouseDown(false);
        setZIndex(999);
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
    }


  return (

    <>
      <div className="page_top">
      
        {
          data.map((product, index) => {
            const relatedProducts = allProducts.filter(relProduct => relProduct.slug !== product.slug);
            return (
              <div key={index} className="blog-header-section">
                <div className="blog-header-image-heading">
                  <div className="blog_img_heading_wrapper">
                    <h2>{product.acf.product_name}</h2>
                    <img src={product.acf.product_image.url} alt="blogPageImage" />
                    <span></span>
                  </div>
                  <div className="blog_page_heading_wrapper">
                    <h1>{product.acf.product_name}</h1>
                  </div>
                </div>
                <div className="course_intro_join_section">
                  <div className="products_inner_description">
                    <p dangerouslySetInnerHTML={{ __html: product.acf.product_description }}></p>
                  </div>
                  <div className="related_product_wrapper">
                    <div className="related_product_inner">
                      {relatedProducts.map((relProduct, index) => {
                        return <div key={index} className="related_product">

                          <Link href={`/our-products/${relProduct.slug}`}>{relProduct.acf.product_name}</Link>
                        </div>

                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
        <div className="product_inner_Page">
              <div className="portfolio_project">
                <div className="portfolio_projects_flex">
                  <div className="portfolio_project_heading">
                    <h1>Simliar Products</h1>
                  </div>



                  <div className='scrolling_portfolio_section' style={{ zIndex: zIndex }} ref={itemRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}>
                    <div className='portfolio_inner' style={{ zIndex: '-999' }}>
                      <div className="portfolio_right_section" >
                        {simlimarProducts && simlimarProducts.map((ele) => (
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
            
          
              </div>
      
    </>
  );
}








