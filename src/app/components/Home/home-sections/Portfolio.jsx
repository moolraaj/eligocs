
'use client'

 

import PortfolioComponent from '@/app/portfolio/component/portfolioComponent';

function PortfolioSection() {
   

   

    return (
        <>
            
                
                 
                    <div className='page_outer portfolio_section_outer scrolling' >
                        <div className='portfolio_wrapper' >
                            <div className='portfolio_left_section'>
                                <h1>Explore Our Work</h1>
                            </div>
                            <div className='scrolling_portfolio_section' >
                                <div className='portfolio_inner'>
                                    <PortfolioComponent />
                                </div>
                            </div>
                        </div>
                </div>
           </>
    );
}

export default PortfolioSection;


