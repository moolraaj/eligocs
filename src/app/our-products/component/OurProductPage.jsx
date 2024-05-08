'use client'
import { allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import { useEffect, useState } from "react";




function OurProductPage() {
  let api = allExportedApi()
  const [ProductPageApiData, setProductPageApiData] = useState([])
  const [products, setProducts] = useState([])


  const loadProductPafeData = async () => {
    let data = await api.ProductPageApi();
    setProductPageApiData(data)
    console.log(data)
  }

  const loadProducts = async () => {
    let data = await api.AllProducts();
    setProducts(data)
  }

  useEffect(() => {
    loadProductPafeData()
    loadProducts()
  }, [])


  return (
    <>
      <div className="Our-product-page-outer page_top">
        <div className="Our-product-page-inner">

          {ProductPageApiData.map((ele, index) => {
            
            return (
              <div key={index} className="product-page-top-section">
                <div className="product-top-image-section">
                  <div className="product_heading_left"><h3>{ele.acf.product_page_heading}</h3></div>
                  <div className="product_image_right">
                    <img src={ele.acf.product_page_image.url} alt="product_page_image" />
                    <span></span>
                  </div>
                </div>
                <div className="product-top-info-section">
                  <div className="product-page-left-info">
                    <h1>{ele.acf.product_page_heading}</h1>
                    <p>{ele.acf.product_page_description}</p>
                  </div>
                  <div className="product-page-right-info">
                    <div className="product_right_info_inner">
                      <p>{ele.acf.product_page__find_product_heading}</p>
                      <Link href={`/our-products`} >find our products</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="our_products_wrapper">
          {products.map((product, index) => {
            return (
              <ul
              key={index}
              className={`product${index % 2 === 0 ? " even" : " odd"} our_product`}
            >
                <li>
                  <span className="wrap_nmae_btn">
                  <span><h1>{product.acf.product_name}</h1></span>
                  <span><Link href={`/our-products/${product.slug}`}>Read More</Link></span>
                  </span>
                </li>
                <li><img src={product.acf.product_image.url} alt="portfolio_image" /></li>
              </ul>
            )
          })}
          </div>
        </div>
      </div>
    </>
  )
}

export default OurProductPage;
