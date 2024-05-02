'use client'
import React, { useState } from 'react';
import closeMenuIcon from '../../../assets/headerAssets/closeMenu.png'
import FormLogo from '../../../assets/headerAssets/formlogo.png'


import Link from 'next/link';

import PortfolioComponent from '@/app/portfolio/component/portfolioComponent';
import JobForm from '@/app/forms/jobForm';








function NavbarCompo({ data }) {

  const { siteLogoUrl, siteTitle, headerMenuItems } = data.header
  console.log(headerMenuItems)

  const [isOpen, setIsOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };






  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };



  const NavigationLink = ({ href, children }) => (
    <Link href={href} className="nav-link" onClick={closeMenu}>
      {children}
    </Link>
  );

  return (
    <>

      {isFormVisible && (

        <div className="jobform_form_outer" style={{ animation: isFormVisible ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
          <div className="jobform_inner">
            <div className="jobform_wrapper">
              <JobForm />
            </div>
            <div className="close_button">
            <button onClick={toggleFormVisibility} className="close_button">
            X
          </button>
            </div>
          </div>
        </div>
      )}

      <div className="nav_outer">
        <div className="nav_inner">
          <div className="nav_flex">
            <div className="nav_left_section">
              <Link className="navbar-brand" href="/">
                <img src={siteLogoUrl} alt={siteTitle} style={{ width: '9.25rem', height: '3.5625rem', objectFit: 'cover' }} />
              </Link>

            </div>

            <div className="nav_right_section">
              <button onClick={toggleFormVisibility}>
                <img src={FormLogo.src} alt="formLogo" />
              </button>
              <button className="nav-toggler" type="button" onClick={toggleMenu}>
                <span className="nav-toggler-icon"></span>
                <span className="nav-toggler-icon"></span>
                <span className="nav-toggler-icon"></span>
              </button>
            </div>

            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
              <div className="nav-left">
                <div className="header-menu-seperate-container-left">
                  <h1 className="blog_section_menu">Explore Our Work</h1>
                  <div className="header-portfolio-section">
                    <NavigationLink href={'/'}><PortfolioComponent /></NavigationLink>
                  </div>

                </div>
              </div>
              <div className="nav-right">
                <div className="header-menu-seperate-container-right">
                  <div className="menu-right-container-top">

                    <img src={closeMenuIcon.src} alt="closeMenuIcon" style={{ float: 'right' }} onClick={closeMenu} />
                  </div>
                  <div className="menu-right-container-bottom">
                    {/* {
                    headerMenuItems.map((ele)=>{
                      return <ul key={ele.ID}>
                        <NavigationLink href={`${ele.pageSlug}`}>{ele.pageSlug}</NavigationLink>
                      </ul>
                    })
                  } */}

                    <NavigationLink href={'/'}>home</NavigationLink>
                    <NavigationLink href={'/about'}>about</NavigationLink>
                    <NavigationLink href={'/services'}>services</NavigationLink>
                    <NavigationLink href={'/courses'}>courses</NavigationLink>
                    <NavigationLink href={'/portfolio'}>portfolio</NavigationLink>
                    <NavigationLink href={'/meet-our-team'}>our team</NavigationLink>
                    <NavigationLink href={'/blog'}>blog</NavigationLink>
                    <NavigationLink href={'/our-products'}>our-products</NavigationLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  );
}

export default NavbarCompo;
