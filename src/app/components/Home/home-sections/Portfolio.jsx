
'use client'

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PortfolioComponent from '@/app/portfolio/component/portfolioComponent';

function PortfolioSection({ ele }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.portfolio_inner', {
            x: () => -document.querySelector('.portfolio_inner').scrollWidth * -1,
            xPercent: -100,
            scrollTrigger: {
              trigger: '.portfolio_inner',
              start: 'top center',
              end: '+=6000px', // Adjust this value as needed
              scrub: true,
              invalidateOnRefresh: true
            }
          });
    }, []);

    return (
        <div className="page_outer portfolio_section_outer scrolling">
            <div className="page_inner portfolio_section_inner">
                <div className="portfolio_wrapper">
                    <div className="portfolio_left_section">
                        <h1>{ele.acf.portfolio_heading}</h1>
                    </div>
                    <div className='scrolling_portfolio_section'>
                    <div className="portfolio_inner"></div><div className="portfolio_inner">
                        <PortfolioComponent/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioSection;
