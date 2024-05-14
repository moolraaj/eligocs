
'use client'
import React, { useRef, useState } from 'react';


import PortfolioComponent from '@/app/portfolio/component/portfolioComponent';

function PortfolioSection() {


    const itemRef = useRef(null);
    const [mouseDown, setMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [zIndex, setZIndex] = useState(0);

    const handleMouseDown = (e) => {
        e.stopPropagation(); // Stop the propagation of the click event
        setMouseDown(true);
        setStartX(e.pageX - itemRef.current.offsetLeft);
        setScrollLeft(itemRef.current.scrollLeft);
    }
    

    const handleMouseLeave = () => {
        setMouseDown(false);
        setZIndex(999);

    }

    const handleMouseUp = () => {
        setMouseDown(false);
    }

    const handleMouseMove = (e) => {
        if (!mouseDown) return;
        e.preventDefault();
        const X = e.pageX - itemRef.current.offsetLeft;
        const walk = (X - startX) * 2;
        itemRef.current.scrollLeft = scrollLeft - walk;
    }


    return (
        <>



            <div className='page_outer portfolio_section_outer scrolling' >
                <div className='portfolio_wrapper' >
                    <div className='portfolio_left_section'>
                        <h1>Explore Our Work</h1>
                    </div>
                    <div className='scrolling_portfolio_section' style={{ zIndex: zIndex }} ref={itemRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}>
                        <div className='portfolio_inner' style={{ zIndex: '-999' }}>
                            <PortfolioComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortfolioSection;


