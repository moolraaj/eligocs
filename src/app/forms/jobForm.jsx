'use client'
import { allExportedApi } from '@/utils/apis/Apis';
import React, { useState } from 'react';

function JobForm() {
    let api = allExportedApi();
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        youremail: '',
        phone: '',

    });

    const [errors, setErrors] = useState({
        firstname: false,
        lastname: false,
        youremail: false,
        phone: false,
    });

    const getUserData = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: false,
        });
    };

    const submitUserData = async (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('_wpcf7_unit_tag', 902);
        formData.append('firstname', user.firstname);
        formData.append('lastname', user.lastname);
        formData.append('youremail', user.youremail);
        formData.append('phone', user.phone);
        formData.append('companyname', user.companyname);
        formData.append('budget', user.budget);
        formData.append('yourmessage', user.yourmessage);

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
                let response = await api.fetchJobFormApi({
                    method: 'POST',
                    body: formData
                });
                console.log('response', response);
                alert('Data submitted');

                setUser({
                    firstname: '',
                    lastname: '',
                    youremail: '',
                    phone: '',
                    companyname: '',
                    budget: '',
                    yourmessage: ''
                });
            } catch (error) {
                console.error('Error:', error);
                alert('Data not submitted');
            }
        }
    };

    return (
        <>
           
           
                        
                        <form id='jobform'>
                            <div className="job_form_flex_wrapper">
                                <div className="form_fields_wrapper">
                                    <input type="text" name="firstname" placeholder='first name' value={user.firstname} onChange={getUserData} />
                                    {errors.firstname && <span>first name is required</span>}
                                </div>
                                <div className="form_fields_wrapper">
                                    <input type="text" name="lastname" placeholder='last name' value={user.lastname} onChange={getUserData} />
                                    {errors.lastname && <span>last name is required</span>}
                                </div>
                                <div className="form_fields_wrapper">
                                    <input type="email" name="youremail" placeholder='email address' value={user.youremail} onChange={getUserData} />
                                    {errors.youremail && <span>email is required</span>}
                                </div>
                                <div className="form_fields_wrapper">
                                    <input type="number" name="phone" placeholder='phone number' value={user.phone} onChange={getUserData} />
                                    {errors.phone && <span>phone number is required</span>}
                                </div>
                                <div className="form_fields_wrapper">
                                    <input type="text" name="companyname" placeholder='company name' value={user.companyname} onChange={getUserData} />
                                
                                </div>
                                <div className="form_fields_wrapper">
                                    <input type="text" name="budget" placeholder='budget' value={user.budget} onChange={getUserData} />
                                    
                                </div>
                                <div className="form_fields_wrapper">
                                    <textarea name="yourmessage" placeholder="Enter your message" value={user.yourmessage} onChange={getUserData} cols="30" rows="10"></textarea>
                                   
                                </div>
                                <div className="form_button">
                                    <button onClick={submitUserData}>Submit</button>
                                </div>
                            </div>  
                        </form>
               
               
        </>
    );
}

export default JobForm;
