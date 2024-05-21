'use client'
import { allExportedApi } from '@/utils/apis/Apis';
import React, { useState } from 'react';
import { toast } from 'sonner';

function Internship() {
    let api = allExportedApi();
    const [user, setUser] = useState({
        studentName: '',
        mobileNumber:'',
        emailAddress: '',
        collegeUniversity: '',
        stream: '',
        duration: '',
    });
    
    const [errors, setErrors] = useState({
        studentName: false,
        mobileNumber: false,
        emailAddress: false,
        collegeUniversity: false,
        stream: false,
        duration: false
    });

    const getUserData = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: false,
        });
    };

    const submitUserData = async (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('_wpcf7_unit_tag', 1376);
        formData.append('student-name', user.studentName);
        formData.append('mobile-number', user.mobileNumber);
        formData.append('email-address', user.emailAddress);
        formData.append('college-university', user.collegeUniversity);
        formData.append('stream ', user.stream);
        formData.append('duration ', user.duration);


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
                let response = await api.fetchApplyForJobApi({
                    method: 'POST',
                    body: formData,
                });
              
                toast.success(`<div style='font-size:16px'>Thank you, <span style="font-weight: bold; color: #EAAA00;">${user.yourname}</span> , for contacting us! Our team will be in touch with you soon.</div>`);

                setUser({
                    studentName: '',
                    mobileNumber: '',
                    emailAddress: '',
                    collegeUniversity: '',
                    stream: '',
                    duration: '',
                });
            } catch (error) {
                toast.error('Mail not sent')
                
            }
        }
    };

    return (
        <>
              
                        <form id='applyforjob'>
                            <div className="job_form_flex_wrapper">
                                <div className="form_fields_wrapper">
                                    <input type="text" name="studentName" placeholder='Student Name*' value={user.studentName} onChange={getUserData} />
                                    {errors.studentName && <span className='error_fields'>name is required</span>}
                                </div>
                                <div className="form_fields_wrapper">
                                    <input type="number" name="mobileNumber" placeholder='Mobile Number*' value={user.mobileNumber} onChange={getUserData} />
                                    {errors.mobileNumber && <span className='error_fields'>mobile number is required</span>}
                                </div>
                                <div className="form_fields_wrapper">
                                    <input type="email" name="emailAddress" placeholder='Email Address*' value={user.emailAddress} onChange={getUserData} />
                                    {errors.emailAddress && <span className='error_fields'>email address is required</span>}
                                </div>
                                <div className="form_fields_wrapper">
                                    <input type="text" name="collegeUniversity" placeholder='College/University*' value={user.collegeUniversity} onChange={getUserData} />
                                    {errors.collegeUniversity && <span className='error_fields'>field is required</span>}
                                </div>
                                <div className="form_fields_wrapper">
                                    <input type="text" name="applyingfor" placeholder='applying for' value={user.applyingfor} onChange={getUserData} />
                                </div>
                                <div className="form_fields_wrapper">
                                    <input type="file" name="uploadresume" class="custom-file-upload" onChange={getUserData} />
                                    {errors.uploadresume && <span className='error_fields'>This field is required</span>}
                                </div>
                                <div className="form_fields_wrapper">
                                    <textarea name="yourmessage" placeholder="additional information" value={user.yourmessage} onChange={getUserData} cols="30" rows="10"></textarea>
  
                                </div>
                                <div className="form_button">
                                    <button onClick={submitUserData}>Register Now</button>
                                </div>
                            </div>
                        </form>
            
        </>
    );
}

export default Internship;
