'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {  INTERNSHIP_PAGE_SIZE, allExportedApi } from '@/utils/apis/Apis';
import { useRouter } from 'next/navigation';

function OurInternshipsPage() {
  let api = allExportedApi();
  const [InternshipPageApiData, setInternshipPageApiData] = useState([]);
  const [internship, setInternship] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  const loadInternshipData = async () => {
    let data = await api.internshipPageApi();
    setInternshipPageApiData(data);
  };

  const loadInternships = async () => {
    let data = await api.ourInternships();
    setInternship(data);
  };

  useEffect(() => {
    loadInternshipData();
    loadInternships();
  }, []);

  const totalPages = Math.ceil(internship.length / INTERNSHIP_PAGE_SIZE);

  const renderInternships = () => {
    const startIndex = (currentPage - 1) * INTERNSHIP_PAGE_SIZE;
    const endIndex = startIndex + INTERNSHIP_PAGE_SIZE;
    return internship.slice(startIndex, endIndex).map((internship, index) => (
      <ul key={index} className={`product${index % 2 === 0 ? " even" : " odd"} our_product`}>
        <li>
          <span className="wrap_nmae_btn">
            <span><h1>{internship.acf.internship_tittle}</h1></span>
            <span><Link href={`/our-internship/${internship.slug}`}>Start Your Task</Link></span>
          </span>
        </li>
        <li><img src={internship.acf.internship_image} alt="portfolio_image" /></li>
      </ul>
    ));
  };

  const renderPaginationButtons = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <div className="pagination-buttons">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            className={pageNumber === currentPage ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="internship-page-outer page_top">
        <div className="internship-page-inner">
          {InternshipPageApiData.map((ele, index) => (
            <div key={index} className="product-page-top-section">
              <div className="product-top-image-section">
                <div className="product_heading_left"><h3>{ele.acf.internship_page_tittle}</h3></div>
                <div className="product_image_right">
                  <img src={ele.acf.internship_page_banner_image} alt="product_page_image" />
                  <span></span>
                </div>
              </div>
              <div className="product-top-info-section">
                <div className="product-page-left-info">
                  <h1>{ele.acf.internship_page_tittle}</h1>
                  <p dangerouslySetInnerHTML={{__html: ele.acf.internship_page_description}}></p>
                </div>
                <div className="internship-page-right-info">
                    <img src={ele.acf.internship_description_image} alt="internship_description_image" />
                </div>
              </div>
            </div>
          ))}
          <div className="our_products_wrapper">
            {renderInternships()}
          </div>
          {totalPages > 1 && renderPaginationButtons()}
        </div>
        <div className="internship_training_points">
          {
            InternshipPageApiData.map((ele,index)=>{
              return <div  key={index} className="internship_points_inner">
                <h1>{ele.acf.internship_training_heading}</h1>
                <p>{ele.acf.internship_training_short_description}</p>
                {
                  ele.acf.internship_training_points.map((ele,index)=>{
                    return <ul key={index} className="internship_bullet_points">
                      <h2>{ele.training_tittle}</h2>
                      <li>
                        <p dangerouslySetInnerHTML={{__html: ele.training_description}}></p>
                        </li>
                  </ul>
                  })
                 
                }
              </div>
            })
          }
        </div>
      </div>
    </>
  );
}

export default OurInternshipsPage;
