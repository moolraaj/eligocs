'use client'
 
import React, { useState } from 'react';
import closeMenuIcon from '../../assets/headerAssets/closeMenu.png';
 
import formLogo from '../../assets/headerAssets/formlogo.png';
import Link from 'next/link';
import WorkForm from './WorkForm';


 

function Navbar({data}) {

  const {siteLogoUrl,siteTitle,headerMenuItems}=data.header
  console.log(headerMenuItems)

  const [isOpen, setIsOpen] = useState(false);
  const [showWorkForm, setShowWorkForm] = useState(false);





  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleWorkForm = () => {
    setShowWorkForm(!showWorkForm);
  };
  const closeForm = () => {
    setShowWorkForm(false);
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
              <img src={siteLogoUrl} alt={siteTitle} style={{ width: '9.25rem', height: '3.5625rem', objectFit: 'cover' }} />
            
             
            </Link>

          </div>

          <div className="nav_right_section">
            <button onClick={toggleWorkForm}>
              <img src={formLogo.src} alt="formLogo" />
            </button>
            <button className="nav-toggler" type="button" onClick={toggleMenu}>
              <span className="nav-toggler-icon"></span>
              <span className="nav-toggler-icon"></span>
              <span className="nav-toggler-icon"></span>
            </button>
          </div>
          {showWorkForm && <WorkForm onClose={closeForm}/>}
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
