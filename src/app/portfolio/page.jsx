// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// function Portfolio() {
//     const [data, setData] = useState([]);

//     const loadPortfolio = async () => {
//         try {
//             const response = await fetch('https://api.eligo.cloud/wp-json/wp/v2/portfolio?fields=acf&acf_format=standard');
//             if (response.ok) {
//                 const result = await response.json();
//                 setData(result);
//             } else {
//                 console.error('Failed to fetch portfolio data');
//             }
//         } catch (error) {
//             console.error('Error fetching portfolio data:', error);
//         }
//     };

//     useEffect(() => {
//         loadPortfolio();
//     }, []);

//     return (
//         <>
//             {data.map((ele) => (
//                 <div className="portfolio" key={ele.acf.id}>
//                     <Link href={`portfolio/${ele.slug}`}>
//                         <div className="portfolio_heading">
//                             <h1>{ele.acf.portfolio_title}</h1>
//                         </div>
//                         <div className="portfolio_image">
//                             <img src={ele.acf.portfolio_image} alt="" srcSet="" />
//                         </div>
//                         <div className="portfolio_flex">
//                             <div className="portfolio_inner_left_section">
//                                 <div className="portfolio_title">
//                                     <h4>{ele.acf.portfolio_heading}</h4>
//                                 </div>
//                                 <div className="portfolio_short_description">
//                                     <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_short_description }}></p>
//                                 </div>
//                             </div>
//                             <div className="portfolio_inner_right_section">
//                                 <div className="portfolio_technology">
//                                     <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_technology }}></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//             ))}
//         </>
//     );
// }

// export default Portfolio;




import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

function Portfolio() {
    const [data, setData] = useState([]);
    const portfolioRef = useRef(null);

    useEffect(() => {
        const loadPortfolio = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio?fields=acf&acf_format=standard`);
                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                } else {
                    console.error('Failed to fetch portfolio data');
                }
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
            }
        };

        loadPortfolio();
    }, []);

    useEffect(() => {
        const handleScroll = (event) => {
            const { scrollLeft, clientWidth, scrollWidth } = event.target;
            const scrollAmount = 30; // Adjust as needed for desired scroll speed

            // Check if the user is scrolling to the left or right
            if (event.deltaX > 0) {
                // Scrolling right
                portfolioRef.current.scrollLeft += scrollAmount;
            } else if (event.deltaX < 0) {
                // Scrolling left
                portfolioRef.current.scrollLeft -= scrollAmount;
            }
        };

        const portfolioContainer = portfolioRef.current;
        if (portfolioContainer) {
            portfolioContainer.addEventListener("wheel", handleScroll, { passive: false });
        }

        return () => {
            if (portfolioContainer) {
                portfolioContainer.removeEventListener("wheel", handleScroll);
            }
        };
    }, []);

    return (
        <div className="portfolio_right_section" ref={portfolioRef}>
            {data.map((ele) => (
                <div className="portfolio" key={ele.acf.id}>
                    <Link href={`/portfolio/${ele.slug}`} passHref className='portfolio-post'>

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
                                </div>
                                <div className="portfolio_inner_right_section">
                                    <div className="portfolio_technology">
                                        <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_technology }}></p>
                                    </div>
                                </div>
                            </div>

                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;
