'use client'
import { allExportedApi } from '@/utils/apis/Apis';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function ContactUsForm() {
  let api = allExportedApi()
  const [user, setUser] = useState({
    yourname: '',
    youremail: '',
    yournumber: '',
    yourmessage: '',
     
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaVerify = (token) => {
    setRecaptchaToken(token);
  };

  const [errors, setErrors] = useState({
    yourname: false,
    youremail: false,
    yournumber: false,
    yourmessage: false,
  });

  const getUserData = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
    // Reset error state when user starts typing
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const submitUserData = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      console.error('reCAPTCHA verification required');
      return;
    }
    let formData = new FormData();

    formData.append('_wpcf7_unit_tag', 942);
    formData.append('yourname', user.yourname);
    formData.append('youremail', user.youremail);
    formData.append('yournumber', user.yournumber);
    formData.append('yourmessage', user.yourmessage);
    formData.append('recaptcha', recaptchaToken);

    // Validation for required fields
    let formValid = true;
    const requiredFields = Object.keys(errors);
    requiredFields.forEach(field => {
      if (!user[field]) {
        formValid = false;
        setErrors(prevErrors => ({
          ...prevErrors,
          [field]: true,
        }));
      }
    });

    if (formValid) {
      try {
        let response = await api.fetchContactFormApi({
          method: 'POST',
          body: formData
        })
      
        alert('Data submitted');
        console.log(response)

        setUser({
          yourname: '',
          youremail: '',
          yournumber: '',
          yourmessage: ''
        });
      } catch (error) {
        console.error('Error:', error);
       
      }
    }
  };

  return (
    <>
      <div className="contact_us_form_outer">
        <div className="contact_us_form_inner">
          <div className="contact_us_form_wrapper">
            <form style={{ marginTop: '100px' }} id='contactus'>


              <div className="contact_us_flex_wrapper">

                <div className="contactus_form_fields_wrapper">

                  <div className="contact_input_wrapper">
                    <label htmlFor="name">name</label>
                    <input type="text" name="yourname" value={user.yourname} onChange={getUserData} />
                    {errors.yourname && <span className='input-error'>name field is required</span>}
                  </div>

                </div>

                <div className="contactus_form_fields_wrapper">

                  <div className="contact_input_wrapper">
                    <label htmlFor="email">email address</label>
                    <input type="email" name="youremail" value={user.youremail} onChange={getUserData} />
                    {errors.youremail && <span className='input-error'>email is required</span>}
                  </div>

                </div>

                <div className="contactus_form_fields_wrapper">

                  <div className="contact_input_wrapper">
                    <label htmlFor="phone_number">phone number</label>
                    <input type="number" name="yournumber" value={user.yournumber} onChange={getUserData} />
                    {errors.yournumber && <span className='input-error'>phone number is required</span>}
                  </div>

                </div>

                <div className="contactus_form_fields_wrapper">

                  <div className="contact_input_wrapper">
                    <label htmlFor="email">your message</label>
                    <textarea name="yourmessage" value={user.yourmessage} onChange={getUserData} cols="30" rows="10"></textarea>
                   
                  </div>

                </div>

                <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaVerify}
              />

                <div className="form_button">
                  <button onClick={submitUserData}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsForm;
