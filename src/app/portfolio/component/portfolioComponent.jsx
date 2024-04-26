import React from 'react'
import Link from 'next/link';
function PortfolioComponent({data}) {
  return (
    <>
     <div className="portfolio_right_section">
            {data.map((ele) => (
                <div className="portfolio" key={ele.id}>
                    <Link href={`/portfolio/${ele.slug}`} passHref className='portfolio-post'>
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
                                    <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_technology }}></p>
                                </div>
                            </div>
                            <div className="portfolio_inner_right_section">
                                <div className="portfolio_technology">
                                    {ele.categories.map((e,index)=>{
                                      return <p key={index}>{e}</p>

                                    })}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </>
  )
}

export default PortfolioComponent
