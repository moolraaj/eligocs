
'use client'
import { allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import { useEffect, useState } from "react";

function Footer({ response }) {
  let api = allExportedApi()

  const [result, setResult] = useState([])
  const [data, setData] = useState([])


  const fetchServices = async () => {

    let response = await api.fetchAllServices()
    setResult(response)
  }
  const fetchPortfolio = async () => {

    let response = await api.fetchAllportFolio()
    setData(response)
  }

  useEffect(() => {
    fetchServices()
    fetchPortfolio()
  }, [])



  const { copyrightText,
    copyrightTextSecond,
    footerEmail,
    footerHeading1,
    footerHeading2,
    footerPhoneNumberFirst,
    footerPhoneNumberSecond,
    socialLinks,
    footerHeading3,
    siteLogoUrl,
  } = response.footer




  return (
    <div className="footer_outer">
      <div className="footer_inner">
        <div className="footer_wrapper">
          <div className='footer-left-section'></div>
          <div className="center-section-wrapper">
            <div className='footer-center-section'>
              <div className='center-section-first-inner-wrapper'>
                <div className='footer-top-headings'>
                  <Link href='/'>
                  <img src={siteLogoUrl} alt="footerLogo" style={{ width: '148px', height: '57px' }} />
                  </Link>
                  </div>
                <ul>
                  <li id='eligo-creative' className='common-btns'><span>{footerHeading1}</span></li>
                  <li id='app-web-design' className='common-btns'><span>{footerHeading2}</span></li>
                  <li id='dev-company' className='common-btns'><span>{footerHeading3}</span></li>
                </ul>
              </div>
              <div className='center-section-second-inner-wrapper'>
                <h1 className='footer-top-headings'>Our Services</h1>
                <div className="footer_ul">
                  {result.map((ele) => (
                    <li key={ele.id}>
                      <Link href={`/services/${ele.slug}`}><p dangerouslySetInnerHTML={{ __html: ele.acf.services_title }}></p></Link>
                    </li>
                  ))}
                </div>
              </div>
              <div className='center-section-third-inner-wrapper'>
                <h1 className='footer-top-headings'>Our Products</h1>
                <div className="footer_ul">
                  {data.map((ele) => (
                    <li key={ele.id}>
                      <Link href={`/portfolio/${ele.slug}`}><p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_title }}></p></Link>
                    </li>
                  ))}
                </div>
              </div>
              <div className='center-section-fourth-inner-wrapper'>
                <h1 className='footer-top-headings'>Contacts</h1>
                <div className="footer_ul">
                  <li><a href={`mailto:${footerEmail}`}>{footerEmail}</a></li>
                  <li><a href={`tel:${footerPhoneNumberFirst}`}>{footerPhoneNumberFirst}</a></li>
                  <li><a href={`tel:${footerPhoneNumberSecond}`}>{footerPhoneNumberSecond}</a></li>
                  <li className="social_links">

                  </li>
                </div>
                <div className="footer_social_links">
                  {
                    socialLinks.map((ele, index) => {
                      return <div className="footer_social_wrapper" key={index}>
                        <a href={ele.iconUrl}>
                          <img src={ele.imageUrl} alt={ele.iconName} />
                        </a>

                      </div>
                    })
                  }
                </div>
              </div>

            </div>
            <div className="footer-center-bottom-section">
              <p>{copyrightTextSecond}</p>

            </div>
          </div>

          <div className='footer-right-section'>
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
