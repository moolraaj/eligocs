import React from 'react'
import Portfolio from "@/app/portfolio/page";
function PortfolioSection({ele}) {
  return (
    <>
     <div className="page_outer portfolio_section_outer scrolling">
            <div className="page_inner portfolio_section_inner">
              <div className="portfolio_wrapper">
                <div className="development_flex">
                  <div className="development_left_section">
                    <h1>{ele.acf.portfolio_heading}</h1>
                  </div>

                  <div className="development_left_section">
                    <Portfolio />
                  </div>
                </div>
              </div>
            </div>
            </div>
    </>
  )
}

export default PortfolioSection
