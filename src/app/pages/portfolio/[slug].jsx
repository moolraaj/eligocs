// pages/portfolio/[slug].jsx

import React from 'react';

export async function getServerSideProps({ params }) {
    const { slug } = params;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio?slug=${slug}&_fields=acf,date&acf_format=standard`);
        if (response.ok) {
            const data = await response.json();
            return {
                props: {
                    portfolio: data[0] // Assuming you expect only one portfolio item per slug
                }
            };
        } else {
            console.error('Failed to fetch portfolio data');
            return {
                notFound: true // Return 404 page if data fetching fails
            };
        }
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
        return {
            notFound: true // Return 404 page if data fetching fails
        };
    }
}

function PortfolioPage({ portfolio }) {
    if (!portfolio) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div key={portfolio.id}>
                <img src={portfolio.acf.portfolio_image} alt="" srcSet="" />
                <h1>{portfolio.acf.portfolio_heading}</h1>
                <p dangerouslySetInnerHTML={{ __html: portfolio.acf.portfolio_short_description }}></p>
                <p dangerouslySetInnerHTML={{ __html: portfolio.acf.portfolio_technology }}></p>
            </div>
        </>
    );
}

export default PortfolioPage;
