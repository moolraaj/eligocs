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

          {ProductPageApiData.map((productPageData, index) => {
            return (
              <div key={index} className="product-page-top-section">
                <div className="product-top-image-section">
                  <div className="product_heading_left"><h3>{productPageData.acf.product_page_heading}</h3></div>
                  <div className="product_image_right">
                    <img src={productPageData.acf.product_page_image.url} alt="product_page_image" />
                    <span></span>
                  </div>
                </div>
                <div className="product-top-info-section">
                  <div className="product-page-left-info">
                    <h1>{productPageData.acf.product_page_heading}</h1>
                    <p>{productPageData.acf.product_page_description}</p>
                  </div>
                  <div className="product-page-right-info">
                    <div className="product_right_info_inner">
                      <p>{productPageData.acf.product_page__find_product_heading}</p>
                      <Link href={`/our-products/${productPageData.slug}`} >{productPageData.acf.product_page__find_product_button}</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {products.map((product, index) => {
            return (
              <ul key={index}>
                <li>
                  <span><h1>{product.acf.product_name}</h1></span>
                  <span><Link href={`/our-products/${product.slug}`}>Read More</Link></span>
                </li>
                <li><img src={product.acf.product_image.url} alt="portfolio_image" /></li>
              </ul>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default OurProductPage;
