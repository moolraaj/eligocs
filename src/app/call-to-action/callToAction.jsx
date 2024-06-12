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
       

    }
    useEffect(() => {
        fetchCallToAction()
    }, [])
    
    return (
        <>
            {
             data &&   data.map((ele) => {
                    return   <div className="call_right_section" style={{position:'relative'}}>
                        <CallSlider slider={ele.acf.action_image}/>
                    </div>
                })
            }
        </>
    )
}

export default CallToAction


 
