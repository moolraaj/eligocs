'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { allExportedApi } from '@/utils/apis/Apis.jsx';

function Footer({response}) {
  const {siteLogoUrl,footerMenuItems}=response.footer
  console.log(response)
  let api=allExportedApi()
  const [services, setServices] = useState([]);
  const [data, setData] = useState([])
  const [contactInfo, setContactInfo] = useState({
    email_address: '',
    contact_us: '',
    other_contact_number: '',
    socials_networks: []
  });

 
    const fetchContactData = async () => {

        const response = await fetch('https://api.eligo.cloud/wp-json/wp/v2/pages?slug=contact&fields=acf&acf_format=standard');
        const data = await response.json();
        if (data.length > 0) {
          const contactData = data[0].acf;
          if (contactData) {
            setContactInfo(contactData);
          }
        }
       
    };

    
    const fetchData = async () => {
        const data = await api.fetchAllServices();
        setServices(data);
    };

   
  const loadPortfolio = async () => {
      let result = await api.fetchAllportFolio();
      setData(result)
      console.log(result)

  }

  useEffect(() => {
    fetchContactData();
    fetchData();
      loadPortfolio()
  }, [])



// Sort services array in ascending order based on service ID
const sortedServices = [...services].sort((a, b) => a.id - b.id);


  return (
    <div className="footer_outer">
      <div className="footer_inner">
        <div className="footer_wrapper">
          <div className='footer-left-section'></div>
          <div className="center-section-wrapper">
          <div className='footer-center-section'>
            <div className='center-section-first-inner-wrapper'>
              <div className='footer-top-headings'><img src={siteLogoUrl} alt="footerLogo" style={{width: '148px', height: '57px'}} /></div>
              <ul>
                <li id='eligo-creative' className='common-btns'><span>Eligo Creative Services</span></li>
                <li id='app-web-design' className='common-btns'><span>App & Web Design,</span></li>
                <li id='dev-company' className='common-btns'><span>Development Company</span></li>
              </ul>
            </div>
            <div className='center-section-second-inner-wrapper'>
              <h1 className='footer-top-headings'>Our Services</h1>
              <ul>
                {sortedServices.map((service,index) => (
                  <li key={index}>
                  
                  <Link href={`/services/${service.slug}`}>{service.acf.services_title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='center-section-third-inner-wrapper'>
            <h1 className='footer-top-headings'>Our Services</h1>
            <ul>
            {footerMenuItems.map((ele) => (
                  <li key={ele.id}>
                  <Link href={`/services/${ele.pageSlug}`}><p dangerouslySetInnerHTML={{__html:ele.title}}></p></Link>
                  </li>
                ))}
            </ul>
            </div>
            <div className='center-section-fourth-inner-wrapper'>
            <h1 className='footer-top-headings'>Contacts</h1>
            <ul>
            <li><a href={`mailto:${contactInfo.email_address}`}>{contactInfo.email_address}</a></li>
                <li><a href={`tel:${contactInfo.contact_us}`}>{contactInfo.contact_us}</a></li>
                <li><a href={`tel:${contactInfo.other_contact_number}`}>{contactInfo.other_contact_number}</a></li>
                <li className="social_links">
                {contactInfo.socials_networks.map((social, index) => (
                <a key={index} href={social.social_link} target="_blank" rel="noopener noreferrer" className='social-icons'>
                  <img src={social.social_icon.url} alt={`SocialIcon${index}`} />
                </a>
              ))}
                </li>
              </ul>
            </div>
           
          </div>
          <div className="footer-center-bottom-section">
          <p>Registered Under Ministry Of Corporate Affairs</p>
          <p>An ISO 9001:2015 Certified Company</p>
          </div>
          </div>
         
          <div className='footer-right-section'>
            <p>© 2017 - 2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
