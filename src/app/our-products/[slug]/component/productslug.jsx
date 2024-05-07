'use client'
import React,{useState} from "react";
import Link from "next/link";
import Lightbox from "@/app/portfolio/Lightbox";



export default  function Poductslug({ data, allProducts }) {
    
    const [lightboxImage, setLightboxImage] = useState(null);

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
                data.map((product,index)=>{
                    const relatedProducts = allProducts.filter(relProduct => relProduct.slug !== product.slug);
                    return(
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
                      <p dangerouslySetInnerHTML={{__html: product.acf.product_description}}></p>
                    </div>
                    <div className="related_product_wrapper">
                    <div className="related_product_inner">
                        {relatedProducts.map((relProduct,index)=>{
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
        </>
    );
}


export async function generateStaticParams() {
    let data = await AllProducts();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}





