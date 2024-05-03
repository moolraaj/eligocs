
'use client'
import { allExportedApi } from '@/utils/apis/Apis'

 
import { useEffect, useState } from 'react';
import HomeCompo from '../components/Home/Home';
const api = allExportedApi()

 
export default function HomePage() {
    const [result, setResult] = useState([])



    const loadHomePageData = async () => {
        const data = await api.HomeApi()
        setResult(data)
    }
    useEffect(() => {
        loadHomePageData()
    }, [])





    return (
        <HomeCompo result={result} />
    )
}

