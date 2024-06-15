'use client';
import { allExportedApi } from '@/utils/apis/Apis';
import React, { useState } from 'react';
import { toast } from 'sonner';
import ReCAPTCHA from 'react-google-recaptcha';

function JoinCourse({courseName}) {
    let api = allExportedApi();
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [user, setUser] = useState({
        fullname: '',
        joinemail: '',
        phonenumber: '',
        qualification: '',
        coursename: courseName,
    });

    const [errors, setErrors] = useState({
        fullname: false,
        joinemail: false,
        phonenumber: false,
        qualification: false
    });



    const getUserData = (e) => {
        const { name, value } = e.target;
        if (name === 'phonenumber' && value.length > 10) {
            return;
        }
        setUser({
            ...user,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: false,
        });
    };
    const onReCAPTCHAChange = (token) => {
        setRecaptchaToken(token);
    };

    const submitUserData = async (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('_wpcf7_unit_tag', 2211);
        formData.append('fullname', user.fullname);
        formData.append('joinemail', user.joinemail);
        formData.append('phonenumber', user.phonenumber);
        formData.append('qualification', user.qualification);
        formData.append('g-recaptcha-response', recaptchaToken);
        formData.append('coursename', courseName); // Include courseName in form data

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

        if (!recaptchaToken) {
            formValid = false;
            toast.error('Please complete the reCAPTCHA');
        }


        if (formValid) {
            try {
                let response = await api.fetchJoinCourseFormApi({
                    method: 'POST',
                    body: formData
                });

                toast.success(`<div style='font-size:16px'>Thank you, <span style="font-weight: bold; color: #EAAA00;">${user.fullname}</span> , for contacting us! Our team will be in touch with you soon.</div>`);
                console.log(response)

                setUser({
                    fullname: '',
                    joinemail: '',
                    phonenumber: '',
                    qualification: '',
                });
            } catch (error) {
                toast.error('Mail not send')
            }
        }
    };

    return (
        <>
            <form id='applyforjob'>
                <div className="job_form_flex_wrapper">
                    <div className="form_fields_wrapper">
                        <input type="text" name="fullname" placeholder='Full Name' value={user.fullname} onChange={getUserData} />
                        {errors.fullname && <span className='error_fields'>Name is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="email" name="joinemail" placeholder='Email' value={user.joinemail} onChange={getUserData} />
                        {errors.joinemail && <span className='error_fields'>Email is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="number" name="phonenumber" placeholder='Phone No.' value={user.phonenumber} onChange={getUserData} />
                        {errors.phonenumber && <span className='error_fields'>Phone number is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="text" name="qualification" placeholder='Qualification' value={user.qualification} onChange={getUserData} />
                        {errors.qualification && <span className='error_fields'>qualification field is required</span>}
                    </div>
                    <div className="recaptcha_section">
                        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={onReCAPTCHAChange} />
                    </div>
                </div>
                <div className="form_fields_wrapper">
                <div className="form_button">
                    <button onClick={submitUserData}>Submit</button>
                </div>
                </div>

            </form>
        </>
    );
}

export default JoinCourse;
