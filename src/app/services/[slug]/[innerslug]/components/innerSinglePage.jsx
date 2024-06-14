'use client'
import CallToAction from '@/app/call-to-action/callToAction'
import { allExportedApi } from '@/utils/apis/Apis'
import React, { useEffect, useState } from 'react'
import ServicesSlugFaq from '../../component/ServicesSlugFaq'
import Link from 'next/link';
import { emptyImage } from '../../../../../../public/assets/images'


function InnerSinglePage({ slug, innerslug }) {
   let api = allExportedApi()
   let [data, setData] = useState([])
   let [services, setservices] = useState([])
   let [resp, setResp] = useState([]);
   const [loading, setLoading] = useState(true);

   let loadSingleServices = async () => {
      let resp = await api.fecthSinglechildservice(slug, innerslug)
      setData(resp)
   }

   const funcLoadParentChildSrvices = async () => {
      try {
         const response = await api.fecthAllParentAndchildservices(slug);
         setservices(response)
      } catch (error) {
         console.error("Failed to load service API data", error)
      }
   }

   const fetchAllParent = async () => {
      try {
         let result = await api.fecthAllParentservices()
         setResp(result)
      } catch (error) {
         console.error("Failed to load service API data", error)
      }

   }


   useEffect(() => {
      const loadData = async () => {
         await loadSingleServices()
         await funcLoadParentChildSrvices()
         await fetchAllParent()
         setLoading(false)
      }
      loadData()
   }, [])

   let { child_posts = [] } = services


   return (
      <>
         <div className="services_inner_template">
            {loading ? (
               <div className="page_top">
                  <p className="loading_data">Loading...</p>
               </div>
            ) : (
               data?.map((ele) => {

                  let filterPosts = child_posts.filter((e) => e.slug !== ele.slug)

                  return (
                     <>
                        <div className="page_top">
                           <div className="services_inner_template_wrapper" key={ele.id}>
                              <div className="portfolio_page_top_section career_inner_page_top">
                                 <div className="portfolio_heading_image_wrapper">
                                    <div className="portfolio_page_top_heading">
                                       <h1>{ele.acf.services_title || ""}</h1>
                                    </div>
                                    <div className="portfolio_page_top_image">
                                       <img src={ele.acf.banner_image || emptyImage.src} alt={ele.acf.services_title || ""} />
                                       <div className="divider-yellow"></div>
                                       <div className="portfolio_inner_top_right_section">
                                          <div className="services_inner_heading">
                                             <h1>{ele.acf.services_title || ""}</h1>
                                          </div>
                                          <p>{ele.acf.service_inner_page_top_description || ""}</p>
                                       </div>
                                    </div>
                                 </div>

                              </div>

                              <div className="serices_flex_template">
                                 <div className="services_left_sec">
                                    <div className="services_inner_heading">
                                       <h2>{ele.acf.services_inner_heading || ""}</h2>
                                    </div>
                                    <div className="services_inner_description">
                                       <span dangerouslySetInnerHTML={{ __html: ele.acf.services_description || "" }}></span>
                                    </div>
                                 </div>
                                 <div className="services_right_sec">
                                    <h3>Related Services</h3>
                                    <div className="related-services">
                                       {
                                          filterPosts?.map((ele) => {
                                             return <div key={ele.id}>

                                                <ul>
                                                   <li>
                                                      <Link href={`/services/${slug}/${ele.slug}`}>{ele.acf.services_title || ""}</Link>
                                                   </li>
                                                </ul>
                                             </div>

                                          })
                                       }

                                    </div>
                                    <div className="go_back_services">
                                       <Link href={`/services`}>go back to services</Link>
                                    </div>
                                 </div>

                              </div>

                              <div className="services_development_process_wrapper">
                                 {Array.isArray(ele.acf?.inner_development_process) && ele.acf.inner_development_process.length > 0 ? (
                                    ele.acf.inner_development_process.map((process, index) => (
                                       // Check if any key in the process object has data
                                       Object.values(process).some(val => val !== "") ? (
                                          <>
                                             <div className='process_flex_first_container'>
                                                <h3>{process.services_post_container_first_heading || ""}</h3>
                                                <div dangerouslySetInnerHTML={{ __html: process.services_post_container_first_description || "" }}></div>
                                             </div>
                                             <div className={`process_flex_template process_template-${index % 2 === 0 ? "even" : "odd"}`} key={index}>
                                                {process.services_process_heading || process.services_process_description || process.services_process_image ? (
                                                   <>
                                                      <div className="process_left_section">
                                                         <div className="inner_process_heading">
                                                            <h1>{process.services_process_heading || ""}</h1>
                                                         </div>
                                                         <div className="process_description">
                                                            <p dangerouslySetInnerHTML={{ __html: process.services_process_description || "" }}></p>
                                                         </div>
                                                      </div>
                                                      <div className="process_right_section">
                                                         {process.services_process_image && (
                                                            <div className="process_image">
                                                               <img src={process.services_process_image} alt='services_process_image' />
                                                            </div>
                                                         )}
                                                      </div>
                                                   </>
                                                ) : null}
                                             </div>
                                          </>
                                       ) : null
                                    ))
                                 ) : (
                                    ""
                                 )}
                              </div>

                              <div className="services_dont_miss_out">
                                 {Array.isArray(ele.acf?.dont_miss_out_section) && ele.acf.dont_miss_out_section.length > 0 ? (
                                    ele.acf.dont_miss_out_section.map((missout, index) => (
                                       // Check if any key in the missout object has data
                                       Object.values(missout).some(val => val !== "") ? (
                                          <div className={`process_flex_template process_template-${index % 2 === 0 ? "odd" : "even"}`} key={index}>
                                             <div className="process_left_section">
                                                {missout.dont_miss_out_tittle && (
                                                   <div className="inner_process_heading">
                                                      <h1>{missout.dont_miss_out_tittle}</h1>
                                                   </div>
                                                )}
                                                {missout.dont_miss_out_description && (
                                                   <div className="services_missout_description">
                                                      <div dangerouslySetInnerHTML={{ __html: missout.dont_miss_out_description }}></div>
                                                   </div>
                                                )}
                                             </div>
                                             <div className="process_right_section">
                                                {missout.dont_miss_out_image && (
                                                   <div className="process_image">
                                                      <img src={missout.dont_miss_out_image} alt='services_process_image' />
                                                   </div>
                                                )}
                                             </div>
                                          </div>
                                       ) : null
                                    ))
                                 ) : (
                                    ""
                                 )}
                              </div>



                              <div className="services_inner_page_faq">
                                 <ServicesSlugFaq ele={ele} />
                              </div>

                              <div className="services_inner_packages_serction">

                                 {Array.isArray(ele.acf?.services_inner_packages_section) ? (
                                    ele.acf.services_inner_packages_section.map((packages, index) => (
                                       <>
                                          <h2 id="packgae_for">{ele.acf.package_heading || ""}</h2>
                                          <h3>Select Plan</h3>
                                          <div class="package-divider-separator">
                                             <span></span>
                                             <div class="package_divide_icon">
                                                <svg style={{ width: '30px', height: '30px' }} aria-hidden="true" class="e-font-icon-svg e-fas-ellipsis-h" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
                                                </svg>
                                             </div>
                                             <span></span>
                                          </div>
                                          <div className="services_package" key={index}>
                                             {Object.entries(packages).map(([key, pkg], idx) => {
                                                const firstWord = key.split('_')[0];
                                                return (
                                                   <div className="package" key={idx}>
                                                      <h3 id="package_type">{firstWord.charAt(0).toUpperCase() + firstWord.slice(1) || ""}</h3>
                                                      <div className="package_info">
                                                         <img id="service_package_image" src={pkg.package_image || emptyImage.src} alt={`${key} image`} />
                                                         <h2>{pkg.package_price || ""}</h2>
                                                         <b>{pkg.package_period || ""}</b>
                                                         <div className="package_divider_bottom"><span></span></div>
                                                         <div dangerouslySetInnerHTML={{ __html: pkg.package__description || "" }}></div>
                                                      </div>
                                                      <div className="view_more">
                                                         <Link href={`/`}>View More</Link>
                                                      </div>

                                                   </div>
                                                )
                                             })}
                                          </div>
                                       </>

                                    ))
                                 ) : (
                                    ""
                                 )}
                              </div>
                           </div>
                        </div>
                        <div className="call_outer inner_services">
                           <div className="inner_call">
                              <div className="call_wrapper">
                                 <div className="call_left_section">
                                    <h1>{ele.acf.call_to_action_heading_first || "Looking For Reliable And Highly Skilled"}</h1>
                                    <h1>{ele.acf.call_to_action_heading_second || " Web Development Company & Services"}</h1>
                                    <p dangerouslySetInnerHTML={{ __html: ele.acf.call_to_action_description || "With Our Well-Researched Web Development Services, Your Business Can Attain Significant Online Presence While Meeting Its Goals Effectively." }}></p>
                                    <div className="call_button">
                                       <button id='sucess-journy-btn' onClick={() => router.push('/contact')}>call us now</button>
                                    </div>
                                 </div>
                                 <CallToAction />
                              </div>
                           </div>

                        </div>

                     </>
                  )
               })
            )}



         </div>
      </>
   )
}

export default InnerSinglePage
