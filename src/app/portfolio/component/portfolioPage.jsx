
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_PAGE_SIZE, allExportedApi } from "@/utils/apis/Apis";
import { emptyImage } from "../../../../public/assets/images";

function PortfolioPage() {
  let api = allExportedApi();
  const [data, setData] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const loadPortfolioData = async () => {
    try {
      let result = await api.portfolioApi();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const loadAllPortfolio = async () => {
    try {
      let result = await api.fetchAllportFolio();
      const allCategories = result.flatMap(item => item.category);
      const uniqueCategories = [...new Set(allCategories)];
      setCategories(uniqueCategories);

      setPortfolio(result);
      setTotalPages(Math.ceil(result.length / PORTFOLIO_PAGE_SIZE));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadPortfolioData();
    loadAllPortfolio();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const filteredPortfolio = selectedCategory
    ? portfolio.filter(item => item.category.includes(selectedCategory))
    : portfolio;

  const paginatedPortfolio = filteredPortfolio.slice((currentPage - 1) * PORTFOLIO_PAGE_SIZE, currentPage * PORTFOLIO_PAGE_SIZE);
  const filteredTotalPages = Math.ceil(filteredPortfolio.length / PORTFOLIO_PAGE_SIZE);
  const showPagination = filteredPortfolio.length > PORTFOLIO_PAGE_SIZE;

  const renderPaginationButtons = () => {
    const pageNumbers = Array.from({ length: filteredTotalPages }, (_, i) => i + 1);

    return (
      <div className="pagination-buttons">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={pageNumber === currentPage ? 'active' : ''}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="portfolio_page_outer">
        <div className="page_top">
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
                <div className="portfolio_heading_filter_outer">
                  <h1>Our Projects</h1>
                  <div className="portfolio_filter_dropdown">
                    <label htmlFor="portfolio">Filter portfolio:</label>
                    <select name="category" id="portfolio_category" value={selectedCategory} onChange={handleCategoryChange}>
                      <option value="">All Portfolio</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="portfolio_showcase_wrapper">
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    paginatedPortfolio.length > 0 ? (
                      paginatedPortfolio.map((e) => (
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
                      ))
                    ) : (
                      <p>No projects available.</p>
                    )
                  )}
                </div>
                {showPagination && (
                  <div className="pagination-controls">
                    {renderPaginationButtons()}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="unlock_success_btn">
            <Link href={`/`}>Unlock Success Now</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioPage;
