'use client'
import React, { useEffect, useState } from 'react';

function Page({ params }) {
    const [portfolio, setPortfolio] = useState({});

    const { slug } = params;

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                if (slug) {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio?slug=${slug}&_fields=acf,date&acf_format=standard`);
                    if (response.ok) {
                        const data = await response.json();
                        setPortfolio(data);
                    } else {
                        console.error('Failed to fetch portfolio data');
                    }
                }
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
            }
        };

        fetchPortfolio();
    }, [slug]);

    if (Object.keys(portfolio).length === 0) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            {Object.values(portfolio).map((ele) => (
                <div key={ele.id}>
                  <img src={ele.acf.portfolio_image} alt="" srcSet="" />
                    <h1>{ele.acf.portfolio_heading}</h1>
                    <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_short_description }}></p>
                    <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_technology }}></p>
                </div>
            ))}
        </>
    );
}

export default Page;


