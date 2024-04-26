import Link from "next/link"

function PortfolioPage({ data, portfolio }) {

    return (
        <>
            {
                data.map((ele) => {
                    return <div className="portfolio_page_wrapper" key={ele.id}>

                        <div className="portfolio_page_top_section">
                            <div className="portfolio_page_top_heading">
                                <h1>{ele.acf.portfolio_page_heading}</h1>
                            </div>
                            <div className="portfolio_page_top_image">
                                <img src={ele.acf.portfolio_page_image} alt="" />
                            </div>

                            <div className="portfolio_page_top_description">
                                <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_page_description }}></p>
                            </div>

                        </div>


                        <div className="portfolio_showcase_wrapper">

                            {
                                portfolio.map((e) => {
                                    return <Link href={`/portfolio/${e.slug}`} key={e.id}>

                                        <div className="protfolio_items" >
                                            <div className="port_showcase_image">
                                                <img src={e.acf.portfolio_image} alt="" />
                                            </div>

                                            <div className="port_showcase_hove_effect">
                                                <div className="port_showcase_left">
                                                    <div className="port_showcase_title">
                                                        <h1>{e.acf.portfolio_title}</h1>
                                                    </div>
                                                    <div className="port_showcase_short_description">
                                                        <h1>{e.acf.portfolio_short_description}</h1>
                                                    </div>

                                                </div>
                                                <div className="port_showcase_right">
                                                    <div className="port_showcase_category">
                                                        <p>{e.categories}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        
                                    </Link>
                                })

                            }

                        </div>

                    </div>







                })
            }
        </>
    )
}

export default PortfolioPage
