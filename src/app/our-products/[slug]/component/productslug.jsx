'use client'
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import arrow from '../../../assets/headerAssets/arrow.png'
import Lightbox from "@/app/portfolio/Lightbox";



export default function Poductslug({ data, allProducts, simlimarProducts }) {



  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState([]);

  useEffect(() => {
      setImagesToShow(getImagesToShow());
  }, [currentIndex, simlimarProducts]);

  const getImagesToShow = () => {
      const images = simlimarProducts.flatMap(ele => ele.acf.portfolio_gallery);
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
      setCurrentIndex((currentIndex + 1) % simlimarProducts.flatMap(ele => ele.acf.portfolio_gallery).length);
  };

  const prevSlide = () => {
      setCurrentIndex((currentIndex - 1 + simlimarProducts.flatMap(ele => ele.acf.portfolio_gallery).length) % simlimarProducts.flatMap(ele => ele.acf.portfolio_gallery).length);
  };


  const openLightbox = (image) => {
      setLightboxImage(image);
  };

  const closeLightbox = () => {
      setLightboxImage(null);
  };



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
                    <p dangerouslySetInnerHTML={{__html: product.acf.product_inner_page_top_heading}}></p>
                  </div>
                </div>
                <div className="course_intro_join_section">
                  <div className="products_inner_description">
                    <p dangerouslySetInnerHTML={{ __html: product.acf.product_description }}></p>
                  </div>
                  <div className="related_product_wrapper">
                    <h2>Related Products</h2>
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

    </>
  );
}








