

function ServiceSlug({ data }) {
   
    

   return (
      <>
         {data && data.map((ele) => (
            <div className="services_inner_template_wrapper" key={ele.id}>
               <div className="services_banner_section">
                  <div className="servies_banner_image">
                     <img src={ele.acf.banner_image} alt={ele.slug} />
                  </div>
                  <div className="servies_barrner_bar"></div>
               </div>

               <div className="serices_flex_template">
                  <div className="services_left_sec">
                     <div className="services_inner_heading">
                        <h1>{ele.acf.services_inner_heading}</h1>
                     </div>
                     <div className="services_inner_description">
                        <p>{ele.acf.services_description}</p>
                     </div>
                  </div>
                  <div className="services_right_sec">
                     <h1>related posts</h1>
                   
                  </div>
               </div>

               {ele.acf.inner_development_process.map((process, index) => (
                  <div className="process_flex_template" key={index}>
                     <div className="process_left_section">
                        <div className="inner_process_heading">
                           <h1>{process.services_process_heading}</h1>
                        </div>
                        <div className="process_description">
                           <p dangerouslySetInnerHTML={{ __html: process.services_process_description }}></p>
                        </div>
                     </div>
                     <div className="process_right_section">
                        <div className="process_image">
                           <img src={process.services_process_image} alt='' />
                        </div>
                     </div>
                  </div>
               ))}

               <div className="services_dont_miss_out">
                  <div className="services_missout_heading">
                     <h1>{ele.acf.dont_miss_out_heading}</h1>
                  </div>
                  <div className="servives_missout_description">
                     <p>{ele.acf.dont_miss_out_description}</p>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
}

export default ServiceSlug;
