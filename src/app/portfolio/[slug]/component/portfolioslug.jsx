
import PortfolioComponent from "../../component/portfolioComponent";
 export default async function Portfolioslug({ data }) {
    return (
        <>
            {
                data.map((ele) => {
                    return <div className="portfolio_inner_template" key={ele.id}>
                        <div className="portfolio_inner_section">
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
                            <p dangerouslySetInnerHTML={{__html: ele.acf.portfolio_description }}></p>
                            </div>
                        </div>
                        </div>
                        <div className="portfolio_project">
                            <div className="portfolio_projects_flex">
                                <div className="portfolio_project_heading">
                                    <h1>{ele.acf.portfolio_projects_heading}</h1>
                                </div>
                                <div className="portfolio_showcase_right">

                                    <PortfolioComponent/>
                                </div>
                            </div>

                        </div>


                        <div className="portfolio_slider">

                            {
                                ele.acf.portfolio_gallery.map((items, index) => {
                                    return <div className="portfolio_gallery_wrapper" key={index}>
                                        <img src={items} alt="" />
                                    </div>
                                })
                            }


                        </div>


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





