  
 
import PortfolioComponent from '@/app/portfolio/component/portfolioComponent'
import React from 'react'
 
 
function PortfolioSection({ ele }) {
    return (
        <>
            <div className="page_outer portfolio_section_outer scrolling">
                <div className="page_inner portfolio_section_inner">
                    <div className="portfolio_wrapper">
                       
                            <div className="portfolio_left_section">
                                <h1>{ele.acf.portfolio_heading}</h1>
                            </div>

                               
                              <PortfolioComponent/> 
                                
                              
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioSection