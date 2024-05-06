'use client'
import { allExportedApi } from '@/utils/apis/Apis'
import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation';
import CallSlider from './callSlider';

 


function CallToAction() {
   

    let router = useRouter()
    const [data, setData] = useState([])
    let api = allExportedApi()
    const fetchCallToAction = async () => {
        let response = await api.fetchCallToAction()
        setData(response)
        console.log(response)

    }
    useEffect(() => {
        fetchCallToAction()
    }, [])
    
    return (
        <>
            {
                data.map((ele) => {
                    return <div className="call_outer" key={ele.id}>
                        <div className="call_inner">
                            <div className="call_wrapper">
                                <div className="call_left_section">
                                    <h1>{ele.acf.action_heading}</h1>
                                    <h1>{ele.acf.action_sub_heading}</h1>
                                    <p dangerouslySetInnerHTML={{__html:ele.acf.action_description}}></p>
                                    <div className="call_button">
                                    <button id='sucess-journy-btn' onClick={() => router.push('/contact')}>call us now</button>
                                    </div>
                                </div>
                                <div className="call_right_section" >
                                    <CallSlider slider={ele.acf.action_image}/>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default CallToAction
