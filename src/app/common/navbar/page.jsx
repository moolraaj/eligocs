'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import closeMenuIcon from '../../assets/headerAssets/closeMenu.png'
 

function Navbar() {
  // const [logo, setLogo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
 

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.eligo.cloud/wp-json/wp/v2/services?fields=acf&acf_format=standard');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch services');
  //       }
  //       const data = await response.json();
  //       setLogo(data);
  //     } catch (error) {
  //       console.error('Error fetching services:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);



  return (
    <div className="nav_outer">
      <div className="nav_inner">
        <div className="nav_flex">
        <div className="nav_left_section">
          <Link className="navbar-brand" href="/" >
            {/* {
              logo.map((id, logo)=>(
                <img key={id} src={logo.acf.} alt="" />
              ))
            }
             */}
            </Link>   
        </div>

        <div className="nav_right_section">
          <button className="nav-toggler" type="button" onClick={toggleMenu}>

            <span className="nav-toggler-icon"></span>
            <span className="nav-toggler-icon"></span>
            <span className="nav-toggler-icon"></span>

          </button>

          
        </div>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            
              <div className=" nav-left">
              <div className="header-menu-seperate-container-left">

              </div>
              </div>
              <div className=" nav-right">
              <div className="header-menu-seperate-container-right">
              <div className="menu-right-container-top">
                <img src={closeMenuIcon.src} alt="closeMenuIcon" style={{float: 'right'}} onClick={closeMenu} />
              </div>
                <div className="menu-right-container-bottom">
                <Link className="nav-link" href={"/"} >Home</Link>
                <Link className="nav-link" href={"/about"} >About</Link>
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
