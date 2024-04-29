'use client'
import React, { useEffect, useState } from 'react'
import Home from '../components/Home/Home'
import { HomeApi } from '@/utils/apis/Apis';
<<<<<<< HEAD
 
import dynamic from 'next/dynamic';
 

const HomeCompo=dynamic(
    ()=> import  ('../components/Home/Home'),  
    {
      ssr:false
    }
  )
 
=======
>>>>>>> 10b04a99a2f3da3128a023c0fc63a978ec0a9c66



function Homepage() {

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  const loadData = async () => {
    setLoading(true);
    
    const data = await HomeApi()
    setResult(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    loadData();
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  return (

 


  <HomeCompo result={result} />
 



  )
}
 
 