import React, { useEffect, useState } from 'react';
import closeMenuIcon from '../../../assets/headerAssets/closeMenu.png';
import FormLogo from '../../../assets/headerAssets/formlogo.png';
import formClose from '../../../assets/headerAssets/formclose.png';
import Link from 'next/link';

function NavbarCompo({ data }) {
  const { siteLogoUrl, siteTitle, headerMenuItems } = data.header;
  const spanContents = [
    "something cool",
    "YOUR NEXT PROJECT",
    "SOLVING CHALLENGES"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(spanContents.length);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % spanContents.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [spanContents]);

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
        <div className="cf7_form_outer" style={{ animation: isFormVisible ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
          <div className="cf7_form_inner">
            <div className="cf7_top_banner">
              <div className="cf7_left_section">
                <div className="form_banner_heading">
                  <h1>hello</h1>
                </div>
                <div className="form_slider_wrapper">
                  <div className="_form_paragraph">
                    <p>Let's work on</p>
                  </div>
                  <div className="form_slides">
                    {spanContents.map((content, index) => (
                      <span key={index} className={currentIndex === index ? "show" : "hide"}>
                        {content}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cf7_right_section">
                <div className="close_button">
                  <button onClick={toggleFormVisibility} className="close_button">
                    <img src={formClose.src} alt="" srcSet="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="cf7_form_wrapper">
              <JobForm />
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
                    {headerMenuItems.map((ele) => (
                      <ul key={ele.ID}>
                        <NavigationLink href={`${ele.pageSlug}`}>{ele.pageSlug}</NavigationLink>
                      </ul>
                    ))}
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