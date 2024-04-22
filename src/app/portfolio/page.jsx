import React, { useEffect, useState } from 'react'

function Portfolio() {
    const [data, setData] = useState([])
    const loadPortfolio = async () => {
        let url = await fetch('https://api.eligo.cloud/wp-json/wp/v2/portfolio?fields=acf&acf_format=standard')
        let result = await url.json()
        setData(result)
        console.log(result)

    }

    useEffect(() => {
        loadPortfolio()
    }, [])
    return (
        <>

            {data.map((ele) => {

                return <div className="portpolio" key={ele.acf.id}>
                    <div className="portpolio_heading">
                        <h1>{ele.acf.portfolio_title}</h1>
                    </div>
                    <div className="portpolio_image">
                        <img src={ele.acf.portfolio_image} alt="" srcset="" />
                    </div>

                    <div className="portpolio_flex">
                        <div className="portfolio_inner_left">

                        <div className="portfolio_heading">
                            <h1>{ele.acf.portfolio_heading
                            }</h1>
                        </div>
                        <div className="portpolio_short_decription">
                            <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_short_description }}></p>
                        </div>
                        </div>
                        <div className="portfolio_inner_right">
                        <div className="portpolio_technology">
                            <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_technology }}></p>
                        </div>
                        </div>
                    </div>


                </div>
            })}

        </>
    )
}

export default Portfolio
