import Link from "next/link";

function Footer({ response }) {
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
    footerMenuItems,
    portfolioMenuItems } = response.footer

    console.log(response)




  return (
    <div className="footer_outer">
      <div className="footer_inner">
        <div className="footer_wrapper">
          <div className='footer-left-section'></div>
          <div className="center-section-wrapper">
            <div className='footer-center-section'>
              <div className='center-section-first-inner-wrapper'>
                <div className='footer-top-headings'><img src={siteLogoUrl} alt="footerLogo" style={{ width: '148px', height: '57px' }} /></div>
                <ul>
                  <li id='eligo-creative' className='common-btns'><span>{footerHeading1}</span></li>
                  <li id='app-web-design' className='common-btns'><span>{footerHeading2}</span></li>
                  <li id='dev-company' className='common-btns'><span>{footerHeading3}</span></li>
                </ul>
              </div>
              <div className='center-section-second-inner-wrapper'>
                <h1 className='footer-top-headings'>Our Services</h1>
                <ul>
                  {footerMenuItems.map((ele) => (
                  <li key={ele.id}>
                  <Link href={`/services/${ele.pageSlug}`}><p dangerouslySetInnerHTML={{__html:ele.title}}></p></Link>  
                  </li>
                ))}
                </ul>
              </div>
              <div className='center-section-third-inner-wrapper'>
                <h1 className='footer-top-headings'>Our Products</h1>
                <ul>
                {portfolioMenuItems.map((ele) => (
                  <li key={ele.id}>
                  <Link href={`/portfolio/${ele.pageSlug}`}><p dangerouslySetInnerHTML={{__html:ele.title}}></p></Link>  
                  </li>
                ))}
                </ul>
              </div>
              <div className='center-section-fourth-inner-wrapper'>
                <h1 className='footer-top-headings'>Contacts</h1>
                <ul>
                  <li><a href={`mailto:${footerEmail}`}>{footerEmail}</a></li>
                  <li><a href={`tel:${footerPhoneNumberFirst}`}>{footerPhoneNumberFirst}</a></li>
                  <li><a href={`tel:${footerPhoneNumberSecond}`}>{footerPhoneNumberSecond}</a></li>
                  <li className="social_links">

                  </li>
                </ul>
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
