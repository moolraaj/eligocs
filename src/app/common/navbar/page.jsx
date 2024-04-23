'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import closeMenuIcon from '../../assets/headerAssets/closeMenu.png';
import siteLogo from '../../assets/headerAssets/sitelogo.png';
import formLogo from '../../assets/headerAssets/formlogo.png';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="nav_outer">
      <div className="nav_inner">
        <div className="nav_flex">
          <div className="nav_left_section">
            <Link className="navbar-brand" href="/">
              <img src={siteLogo.src} alt="siteLogo" style={{ width: '9.25rem', height: '3.5625rem', objectFit: 'cover' }} />
            </Link>
          </div>

          <div className="nav_right_section">
            <button>
            <img src={formLogo.src} alt="formLogo"/>
            </button>
            <button className="nav-toggler" type="button" onClick={toggleMenu}>
              <span className="nav-toggler-icon"></span>
              <span className="nav-toggler-icon"></span>
              <span className="nav-toggler-icon"></span>
            </button>
          </div>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <div className="nav-left">
              <div className="header-menu-seperate-container-left"></div>
            </div>
            <div className="nav-right">
              <div className="header-menu-seperate-container-right">
                <div className="menu-right-container-top">
               
                  <img src={closeMenuIcon.src} alt="closeMenuIcon" style={{ float: 'right' }} onClick={closeMenu} />
                </div>
                <div className="menu-right-container-bottom">
                  <NavigationLink href="/">Home</NavigationLink>
                  <NavigationLink href="/about">About</NavigationLink>
                  {/* Add more NavigationLink components for additional menu items */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
