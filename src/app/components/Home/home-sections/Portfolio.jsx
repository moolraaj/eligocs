// 'use client'

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// import PortfolioComponent from '@/app/portfolio/component/portfolioComponent';

// function PortfolioSection() {

//     const triggerRef = useRef(null);

//     useEffect(() => {
//         const pin = gsap.fromTo('.portfolio_inner', {
//             translateX: 0
//         }, {
//             translateX: '-300vw',
//             ease: 'none',
//             duration: 1,
//             scrollTrigger: {
//                 trigger: triggerRef.current,
//                 start: 'center center',
//                 end: '2000 top',
//                 scrub: 0.9,
//                 pin: true,
//                 pinSpacer: false,
//                 pinnedContainer: '#horizontal',
//                 invalidateOnRefresh: true,
//                 onComplete: function () {
//                     document.querySelector('.pin-spacer').style.display = 'none !important';
//                 }
//             }
//         })

//         return () => {
//             pin.kill()
//         }
//     }, [])


//     return (
//         <>

//         <section ref={triggerRef} id='horizontal' style={{ width: '100%', height: '90vh', margin: 'auto', overflow: 'hidden', zIndex: '99999' }}>
//             <div className="page_outer portfolio_section_outer scrolling">
//                 <div className="page_inner portfolio_section_inner">
//                     <div className="portfolio_wrapper">
//                         <div className="portfolio_left_section">
//                             <h1>Similar Projects</h1>
//                         </div>
//                         <div className='scrolling_portfolio_section' >
//                             <div className="portfolio_inner">
//                                 <PortfolioComponent />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         </>

//     );
// }

// export default PortfolioSection;





'use client'

import React, { useRef } from 'react';

import PortfolioComponent from '@/app/portfolio/component/portfolioComponent';

function PortfolioSection() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.scrollLeft - 500, 
                scroll: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.scrollLeft + 500, 
                scroll: 'smooth' 
            });
        }
    };

    return (
        <>
            <section
                id='horizontal'
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '90vh',
                    margin: 'auto',
                    overflow: 'hidden',
                    zIndex: '99999',
                    background: '#ffffff' // Set background color here
                }}
            >
                <div className='portfolio_section_inner' >
                    <button className='arrow_slider'
                        onClick={scrollLeft}
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            zIndex: '99999'
                        }}
                    >
                        {'<'}
                    </button>
                    <div className='page_outer portfolio_section_outer scrolling' >


                        <div className='portfolio_wrapper' >
                            <div className='portfolio_left_section'>
                                <h1>Similar Projects</h1>
                            </div>
                            <div className='scrolling_portfolio_section'ref={scrollContainerRef} style={{ overflowX: 'auto', width: '100%', scrollBehavior: 'smooth' }} >
                                <div className='portfolio_inner'>
                                    <PortfolioComponent />
                                </div>
                            </div>
                        </div>


                    </div>
                    <button className='arrow_slider'
                        onClick={scrollRight}
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            zIndex: '99999'
                        }}
                    >
                        {'>'}
                    </button>
                </div>
            </section>
        </>
    );
}

export default PortfolioSection;


