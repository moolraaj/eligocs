'use client'
import { allExportedApi } from "@/utils/apis/Apis"
import Link from "next/link"
import { useEffect, useState } from "react"

function PortfolioPage() {

    let api = allExportedApi()  
    const [data, setData] = useState([])   
    const [portfolio, setPortfolio] = useState([])




    const loadPortfolioData = async () => {
        let result = await api.portfolioApi()
        setData(result)
    }
    const loadAllPortfolilo = async () => {
        let result = await api.fetchAllportFolio()
        setPortfolio(result)
    }

    useEffect(() => {
        loadPortfolioData()
        loadAllPortfolilo()
    }, [])
    

    return (
        <>
        <div className="page_top">
            {
                data.map((ele) => {
                    return <div className="portfolio_page_wrapper" key={ele.id}>

                        <div className="portfolio_page_top_section">
                            <div className="portfolio_heading_image_wrapper">
                            <div className="portfolio_page_top_heading">
                                <h1>{ele.acf.portfolio_page_heading}</h1>
                            </div>
                            <div className="portfolio_page_top_image">
                                <img src={ele.acf.portfolio_page_image} alt="" />
                            </div>
                            <div className="divider-yellow"></div> 


                            </div>
                            {/* <div className="portfolio_page_top_description">
                                <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_page_description }}></p>
                            </div> */}
                        </div>

                        <div className="portfolio_posts_wrapper">
                        <h1>Our Projects</h1>
                        <div className="portfolio_showcase_wrapper">
                           

                            {
                                portfolio.map((e) => {
                                    return <Link href={`/portfolio/${e.slug}`} key={e.id}>

                                        <div className="protfolio_items" >
                                            <div className="port_showcase_image">
                                                <img className="showcase_hover_image" src={e.acf.portfolio_image} alt="" />
                                                <div className="port_showcase_hove_effect">
                                                    <div className="showcase_wrapper">
                                                <div className="port_showcase_left">
                                                    <div className="port_showcase_title">
                                                        <h2>{e.acf.portfolio_title}</h2>
                                                    </div>
                                                    <div className="port_showcase_short_description">
                                                        <h4>{e.acf.portfolio_technology}</h4>
                                                    </div>

                                                </div>
                                                <div className="port_showcase_right">
                                                    <div className="port_showcase_category">
                                                        {e.category.map((e,index)=>{
                                                            return <p key={index}>{e}</p>
                                                        })}
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>

                                          
                                        </div>
                                        
                                    </Link>
                                })

                            }

                        </div>
                        </div>
                    </div>







                })
            }
            </div>
        </>
    )
}

export default PortfolioPage
