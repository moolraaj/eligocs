import React, { useState, useEffect } from 'react';

function Footer() {
  const [services, setServices] = useState([]);
  const [contactInfo, setContactInfo] = useState({
    email_address: '',
    contact_us: '',
    other_contact_number: '',
    socials_networks: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.eligo.cloud/wp-json/wp/v2/pages?slug=contact&fields=acf&acf_format=standard');
        const data = await response.json();
        if (data.length > 0) {
          const contactData = data[0].acf;
          if (contactData) {
            setContactInfo(contactData);
          }
        }
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.eligo.cloud/wp-json/wp/v2/services?fields=acf&acf_format=standard');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="footer_outer">
      <div className="footer_inner">
        <div className="footer_wrapper">
          <div className='footer-left-section'></div>
          <div className='footer-center-section'>
            <div className='center-section-first-inner-wrapper'>
              <ul>
                <li></li>
                <li id='eligo-creative' className='common-btns'><span>Eligo Creative Services</span></li>
                <li id='app-web-design' className='common-btns'><span>App & Web Design,</span></li>
                <li id='dev-company' className='common-btns'><span>Development Company</span></li>
              </ul>
            </div>
            <div className='center-section-second-inner-wrapper'>
              <h1 className='footer-top-headings'>Our Services</h1>
              <ul>
                {services.map(service => (
                  <li key={service.id}>{service.acf.services_title}</li>
                ))}
              </ul>
            </div>
            <div className='center-section-third-inner-wrapper'>
            <h1 className='footer-top-headings'>Our Products</h1>
            <ul>
              <li>no data yet</li>
            </ul>
            </div>
            <div className='center-section-fourth-inner-wrapper'>
            <ul>
                <li>{contactInfo.email_address}</li>
                <li>{contactInfo.contact_us}</li>
                <li>{contactInfo.other_contact_number}</li>
                <li>
                {contactInfo.socials_networks.map((social, index) => (
                <a key={index} href={social.social_link} target="_blank" rel="noopener noreferrer">
                  <img src={social.social_icon.url} alt={`Social Icon ${index}`} />
                </a>
              ))}
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-right-section'></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
