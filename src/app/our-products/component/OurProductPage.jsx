import Link from "next/link";

function OurProductPage({ ProductPageApiData, products }) {
  return (
    <>
      <div className="Our-product-page-outer">
        <div className="Our-product-page-inner">

          {ProductPageApiData.map((productPageData, index) => {
            return (
              <div key={index} className="product-page-top-section">
                <div className="product-top-image-section">
                  <img src={productPageData.acf.product_page_image.url} alt="product_page_image" />
                </div>
                <div className="product-top-info-section">
                  <div className="product-page-left-info">
                    <h1>{productPageData.acf.product_page_heading}</h1>
                    <p>{productPageData.acf.product_page_description}</p>
                  </div>
                  <div className="product-page-right-info">
                    <p>{productPageData.acf.product_page__find_product_heading}</p>
                    <Link href={`/our-products/${productPageData.slug}`} >{productPageData.acf.product_page__find_product_button}</Link>
                  </div>
                </div>
              </div>
            )
          })}

          {products.map((product,index)=>{
            return(
                <ul key={index}>
                    <li>
                        <span><h1>{product.acf.portfolio_title}</h1></span>
                        <span><Link href={`/our-products/${product.slug}`}>Read More</Link></span>
                    </li>
                    <li><img src={product.acf.portfolio_image} alt="portfolio_image" /></li>
                </ul>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default OurProductPage;
