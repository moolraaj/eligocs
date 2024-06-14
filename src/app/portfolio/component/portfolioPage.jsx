'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_PAGE_SIZE, allExportedApi } from "@/utils/apis/Apis";
import { emptyImage } from "../../../../public/assets/images";

function PortfolioPage() {
  let api = allExportedApi();
  const [data, setData] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  let portfolioReversed = [...portfolio].reverse();

  const loadPortfolioData = async () => {
    try {
      let result = await api.portfolioApi();
      setData(result);
    } catch (error) {
     
    }
  };

  const loadAllPortfolilo = async (page) => {
    try {
      let result = await api.fetchAllportFolio(PORTFOLIO_PAGE_SIZE, page);
      setPortfolio(result.alldata);
      setTotal(Math.ceil(result.alltotalCount / PORTFOLIO_PAGE_SIZE));
    } catch (error) {
      // Handle error if needed
    }
  };

  useEffect(() => {
    loadPortfolioData();
    loadAllPortfolilo(page);
  }, [page]);

  const handelPage = (page) => {
    if (page > 0 && page <= total) {
      setPage(page);
    }
  };

  return (
    <>
      <div className="page_top">
        <>
          {data && data.map((ele) => (
            <div className="portfolio_page_wrapper" key={ele.id}>
              <div className="portfolio_page_top_section">
                <div className="portfolio_heading_image_wrapper">
                  <div className="portfolio_page_top_heading">
                    <h1>{ele.acf.portfolio_page_heading}</h1>
                  </div>
                  <div className="portfolio_page_top_image">
                    <img src={ele.acf.portfolio_page_image || emptyImage.src} alt="portfolio_page_image" />
                    <div className="divider-yellow"></div>
                  </div>
                </div>
              </div>

              <div className="portfolio_posts_wrapper">
                <div className="portfolio_page_description">
                  <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_page_description }}></p>
                </div>
                <h1>Our Projects</h1>
                <div className="portfolio_showcase_wrapper">
                  {portfolioReversed && portfolioReversed.map((e) => (
                    <Link href={`/portfolio/${e.slug}`} key={e.id}>
                      <div className="protfolio_items">
                        <div className="port_showcase_image">
                          <img className="showcase_hover_image" src={e.acf.portfolio_image || emptyImage.src} alt="" />
                          <div className="port_showcase_hove_effect">
                            <div className="showcase_wrapper">
                              <div className="port_showcase_left">
                                <div className="port_showcase_title">
                                  <h2>{e.acf.portfolio_title}</h2>
                                </div>
                                <div className="port_showcase_short_description">
                                  <h4>{e.acf.portfolio_technology}</h4>
                                </div>
                              </div>
                              <div className="port_showcase_right">
                                <div className="port_showcase_category">
                                  {e.category.map((cat, index) => (
                                    <p key={index}>{cat}</p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="pagination-buttons">

                  {Array.from({ length: total }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handelPage(index + 1)}
                      className={page === index + 1 ? 'active' : ''}
                      
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="unlock_success_btn">
            <Link href={`/`}>Unlock Success Now</Link>
          </div>
        </>
      </div>
    </>
  );
}

export default PortfolioPage;
