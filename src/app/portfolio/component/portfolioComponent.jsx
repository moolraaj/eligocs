
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchAllportFolio, fetchAllpostsCategory } from '@/utils/apis/Apis';

function PortfolioComponent() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolioResponse = await fetchAllportFolio();
        const categoriesResponse = await fetchAllpostsCategory();

        const portfolioData = await portfolioResponse;
        const categoriesData = await categoriesResponse;

        setPortfolioData(portfolioData);
        setCategories(categoriesData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
     
      <div className="portfolio_right_section">
        {portfolioData.map((post) => (
          <div className="portfolio" key={post.id}>
            <Link href={`/portfolio/${post.slug}`} passHref className='portfolio-post'>
              <div className="portfolio_image">
                <img src={post.acf.portfolio_image} alt={post.title.rendered} />
              </div>
              <div className="portfolio_flex">
                <div className="portfolio_inner_left_section">
                  <div className="portfolio_title">
                    <h4>{post.acf.portfolio_heading}</h4>
                  </div>
                  <div className="portfolio_short_description">
                  <p dangerouslySetInnerHTML={{ __html: post.acf.portfolio_short_description }}></p>
                  <p dangerouslySetInnerHTML={{ __html: post.acf.portfolio_technology }}></p>
                  </div>
                </div>
                <div className="portfolio_inner_right_section">
                  <div className="portfolio_category">
                    {post.categories && post.categories.length > 0 ? (
                      <p>{post.categories.map((categoryId) => categories.find(cat => cat.id === categoryId).name).join(', ')}</p>
                    ) : (
                      <p>No category</p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default PortfolioComponent;

