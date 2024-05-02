'use client'
import { allExportedApi } from '@/utils/apis/Apis';
import React, { useState } from 'react';

function ApplyForJob() {
    let api = allExportedApi();
    const [user, setUser] = useState({
        yourname: '',
        youremail: '',
        yourlocation: '',
        curruntstatus: '',
        applyingfor: '',
        uploadresume: null,
        yourmessage: '',
    });
    
    const [errors, setErrors] = useState({
        yourname: false,
        youremail: false,
        yourlocation: false,
        curruntstatus: false,
        uploadresume: false,
    });

    const getUserData = (e) => {
        const { name, value, files } = e.target;
        setUser({
            ...user,
            [name]: name === 'uploadresume' ? files[0] : value,
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
        formData.append('yourname', user.yourname);
        formData.append('youremail', user.youremail);
        formData.append('yourlocation', user.yourlocation);
        formData.append('curruntstatus', user.curruntstatus);
        formData.append('applyingfor', user.applyingfor);
        formData.append('uploadresume', user.uploadresume);
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
                let response = await api.fetchApplyForJobApi({
                    method: 'POST',
                    body: formData,
                });
                console.log('response', response);
                alert('Data submitted');

                setUser({
                    yourname: '',
                    youremail: '',
                    yourlocation: '',
                    curruntstatus: '',
                    applyingfor: '',
                    uploadresume: null,
                    yourmessage: '',
                });
            } catch (error) {
                console.error('Error:', error);
                alert('Data not submitted');
            }
        }
    };

    return (
        <>
            <div className="applyforjob_outer">
                <div className="applyforjob_inner">
                    <div className="applyforjob_wrapper">
                        <form style={{ marginTop: '100px' }} id='applyforjob'>
                            <div className="applyjob_flex_wrapper">
                                <div className="applyforjob_fields_wrapper">
                                    <input type="text" name="yourname" placeholder='name' value={user.yourname} onChange={getUserData} />
                                    {errors.yourname && <span>name is required</span>}
                                </div>
                                <div className="applyforjob_fields_wrapper">
                                    <input type="email" name="youremail" placeholder='email address' value={user.youremail} onChange={getUserData} />
                                    {errors.youremail && <span>email is required</span>}
                                </div>
                                <div className="applyforjob_fields_wrapper">
                                    <input type="text" name="yourlocation" placeholder='current location' value={user.yourlocation} onChange={getUserData} />
                                    {errors.yourlocation && <span>current location is required</span>}
                                </div>
                                <div className="applyforjob_fields_wrapper">
                                    <input type="text" name="curruntstatus" placeholder='current status' value={user.curruntstatus} onChange={getUserData} />
                                    {errors.curruntstatus && <span>currunt status is required</span>}
                                </div>
                                <div className="applyforjob_fields_wrapper">
                                    <input type="text" name="applyingfor" placeholder='applying for' value={user.applyingfor} onChange={getUserData} />
                                </div>
                                <div className="applyforjob_fields_wrapper">
                                    <input type="file" name="uploadresume" onChange={getUserData} />
                                    {errors.uploadresume && <span>This field is required</span>}
                                </div>
                                <div className="applyforjob_fields_wrapper">
                                    <textarea name="yourmessage" placeholder="additional information" value={user.yourmessage} onChange={getUserData} cols="30" rows="10"></textarea>
  
                                </div>
                                <div className="apply_form_button">
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

export default ApplyForJob;
