'use client'
import React, { useState } from 'react';
import closeMenuIcon from '../../../assets/headerAssets/closeMenu.png'
import FormLogo from '../../../assets/headerAssets/formsvggif.gif'
import formClose from '../../../assets/headerAssets/formclose.png'
import arrow from '../../../assets/headerAssets/arrow.png'
import Link from 'next/link';
import PortfolioComponent from '@/app/portfolio/component/portfolioComponent';
import JobForm from '@/app/_forms/jobForm';
import RerenderCompo from './formAnimationCompo';
import ApplyForJob from '@/app/_forms/applyForJob';
import mailIcon from '../../../assets/headerAssets/mail.png';
import callIconOne from '../../../assets/headerAssets/phone-call.png';
import callIconTwo from '../../../assets/headerAssets/smartphone-call.png'









function NavbarCompo({ data }) {

  const {footerEmail,
    footerPhoneNumberFirst,
    footerPhoneNumberSecond,
  } = data.footer

  const { siteLogoUrl, siteTitle, headerMenuItems, socialLinks } = data.header




  const [isOpen, setIsOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isApplyJobVisible, setIsApplyJobVisible] = useState(false);
  // const additionalLinksRef = useRef(null);

  // const toggleAdditionalLinks = () => {
  //     additionalLinksRef.current.classList.toggle('hide_seek');  
  // };





  const showApplyJob = () => {
    setIsApplyJobVisible(true);
  };

  const closeApplyJob = () => {
    setIsApplyJobVisible(false);
  };


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

        <div className="cf7_form_outer" style={{ animation: isFormVisible ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
          <div className="cf7_form_inner">
            <div className="cf7_top_banner">
              <div className="cf7_left_section">
                <div className="form_banner_heading">

                  <h1>hello</h1>
                </div>

                <div className="form_slider_wrapper apply_for_job">
                  <div className="_form_paragraph">
                    <p>
                      Let's work on
                    </p>
                  </div>
                  <div className="form_slides">
                    <RerenderCompo />
                  </div>
                </div>


              </div>

              <div className="cf7_right_section">
                <div className="close_button">
                  <button onClick={toggleFormVisibility} className="close_button">
                    <img src={formClose.src} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="cf7_form_wrapper">
              <JobForm />
            </div>

          </div>
        </div >
      )
      }



      {isApplyJobVisible && (
        <div className="cf7_form_outer" style={{ animation: isApplyJobVisible ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
          <div className="cf7_form_inner">
            <div className="cf7_top_banner">

              <div className="cf7_left_section">
                <div className="form_banner_heading">

                  <h1>apply now</h1>
                </div>

                <div className="form_slider_wrapper">
                  <div className="_form_paragraph">
                    <p>
                      apply for job
                    </p>
                  </div>
                </div>


              </div>

              <div className="cf7_right_section">
                <div className="close_button">
                  <button onClick={closeApplyJob} className="close_button" aria-label='close poup form'>
                    <img src={formClose.src} alt="" srcset="" />
                  </button>
                </div>
              </div>

            </div>
            <div className="cf7_form_wrapper">
              <ApplyForJob />
            </div>
          </div>
        </div>
      )}




      <div className="nav_outer">
        <div className="nav_inner">
          <div className="nav_flex">
            <div className="nav_left_section">
              <div className="contacts_top_header">
                <div className="mail_header">
                <li><img src={mailIcon.src} alt="mailIcon" /></li>
                <li><a  href={`mailto:${footerEmail}`}>{footerEmail}</a></li>
                </div>
              <div className="header_contact_one">
                  <li><img src={callIconOne.src} alt="callIconOne" /></li>
                  <li><a href={`tel:${footerPhoneNumberFirst}`}>+91 {footerPhoneNumberFirst}</a></li>
                  </div>
                <div className="header_contact_second">
                <li><img src={callIconTwo.src} alt="callIconTwo" /></li>
                  <li><a href={`tel:${footerPhoneNumberSecond}`}>+91 {footerPhoneNumberSecond}</a></li>
                </div>
              </div>
              <Link className="navbar-brand" href="/">
                <img src={siteLogoUrl} alt={siteTitle} style={{ width: '9.25rem', height: '3.5625rem', objectFit: 'cover' }} />
              </Link>

            </div>

            <div className="nav_right_section">
              <Link href={`/our-internship`} id='go_to_internship_page' aria-label="internship_page">Skill Up Course</Link>
              <button onClick={toggleFormVisibility} aria-label="show form">
                <img src={FormLogo.src} alt="formLogo" />
              </button>
              <button className="nav-toggler" onClick={toggleMenu} aria-label="toggle_navigation_menu">
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
                    <div className="navbar_toggle_navigation">
                      <NavigationLink href={'/about'}>about us</NavigationLink>
                      <div className="hide_seek_wrapper">

                        <button aria-label='toggle_navlinks'>
                          <img src={arrow.src} alt="arrow" />
                        </button>
                       <div></div>
                        <div className="hide_seek blogs" >
                          <NavigationLink href={'/meet-our-team'}>our team</NavigationLink>
                          <NavigationLink href={'/career'}>career</NavigationLink>
                          <NavigationLink href={'/blog'}>blog</NavigationLink>

                        </div>
                      </div>

                    </div>
                    <NavigationLink href={'/services'}>services</NavigationLink>
                    <NavigationLink href={'/courses'}>courses</NavigationLink>
                    <NavigationLink href={'/portfolio'}>portfolio</NavigationLink>
                    <NavigationLink href={'/our-products'}>our products</NavigationLink>
                    <div className="our_internship_link">
                      <NavigationLink href={'/our-internship'} >our internship</NavigationLink>
                    </div>

                    <div className='apply_now_navgation'>
                      <NavigationLink href={'/contact'}>contact us</NavigationLink>
                      <span className="form_button">
                        <button onClick={showApplyJob}>apply now</button>
                      </span>
                    </div>
                    <div className="header_contact_section">
                      <h2>Connect here with us :</h2>

                      <div className="header_bottom_social_icons">
                        <div className="contacts_infos">
                          <Link href={`tel: 9317215300`}>+91 9317215300</Link>
                         
                        </div>
                        <div className='navbar_social_media'>
                          {
                            socialLinks.map((ele, index) => {
                              return <div key={index} className='header_media_icons'>
                                <Link href={ele.iconUrl} target='_blank'><img src={ele.imageUrl} alt='spcial-icons' /></Link>
                              </div>
                            })
                          }
                        </div>
                      </div>
                    </div>
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