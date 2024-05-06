import React from 'react'
import ContactUsForm from '../forms/contactusform'
import Map from './map'

function page() {
  return (
     <>
     <div className='contact_usform_top_section'>
     <div className='contact_usform_inner_section'>
         <div className='contact_us_l'>
         <h1>Contact Us <span>Now</span></h1>
         </div>
         <div className='contact_us_r'>
             <div className='right_c_form'>
              <h4>Contact Details</h4>
              <div className='user_c_contact'>
                <h5 className='title_heading_c'>
                  Product Service
                </h5>
                <h5 className='user_name_c'>Pankaj Sharma </h5>
                <h6 className='user_name_c'>@eligocs.com </h6>

              </div>
             </div>

         </div>
    
     </div>
     </div>

     <div className='lower_sec_c'>
      
      <div className='left_lower_s'>
      <h3>Make an Enquiry</h3>
      <ContactUsForm/>
      </div>

      <div className='right_lowe_s'>
      <div className='location_b_c'>
       <Map/>

       <div className='contact_both_sec'>
        <div className='contact_twins_inner_l'>
        <div className='both_location'>
        <h6>Give us a Call</h6>
        <span>+91 9317215300</span>
        </div>

        <div className='both_location'>
        <h6>Send us an Message</h6>
        <span>+91 9317215300</span>
        <div className='social_icons'>
          <ul>
            <li>Facebook</li>
          </ul>
        </div>
        </div>
        </div>

        <div className='contact_twins_inner_r'>
        <div className='both_location'>
        <h6>we’re call the map</h6>
        <span>+91 9317215300</span>
        </div>

        </div>
        </div>


      </div>
      </div>

     </div>

    
     </>
  )
}

export default page
