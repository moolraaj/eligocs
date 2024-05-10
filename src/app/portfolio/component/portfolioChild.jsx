'use client'
import React, { useState, useRef } from 'react';
import Link from 'next/link';

const PortfolioChild = ({ data }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const requestId = useRef(null); // Reference to requestAnimationFrame

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.clientX);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const offsetX = event.clientX - startX;
            setTranslateX(offsetX);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const smoothScroll = (targetX) => {
        const animationSpeed = 0.1; // Adjust animation speed
        const distance = targetX - translateX;
        const newPosition = translateX + distance * animationSpeed;

        if (Math.abs(distance) < 1) {
            setTranslateX(targetX);
            cancelAnimationFrame(requestId.current);
        } else {
            setTranslateX(newPosition);
            requestId.current = requestAnimationFrame(() => smoothScroll(targetX));
        }
    };

    const handleScroll = (event) => {
        const parentElement = event.currentTarget;
        const isChildScrolling = event.target.classList.contains('portfolio_section_outer');
        
        if (isChildScrolling) {
            const scrollLeft = parentElement.scrollLeft;
            smoothScroll(scrollLeft);
        }
    };

    return (
        <>
            <style jsx>{`
                .portfolio_right_section {
                  
                    white-space: nowrap; 
                    cursor: grab; 
                    transition: transform 0.3s ease; 
                }
                .portfolio {
                    display: inline-block; 
                }
            `}</style>
            <div 
                className="portfolio_right_section"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onScroll={handleScroll}
            >
                {data && data.map((ele) => (
                    <div 
                        className="portfolio" 
                        key={ele.id}
                        style={{ transform: `translateX(${translateX}px)` }}
                        onMouseDown={handleMouseDown}
                    >
                        <Link href={`/portfolio/${ele.slug}`} className='portfolio-post'>
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
                                    </div>
                                    <div className="portfolio_technology">
                                        <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_technology }}></p>
                                    </div>
                                </div>
                                <div className="portfolio_inner_right_section">
                                    <div className="port_showcase_category">
                                        {ele.category.map((cat,index)=>{
                                            return <p key={index}>{cat}</p>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PortfolioChild;
