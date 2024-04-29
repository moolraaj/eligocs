'use client'
import { fetchAllportFolio } from "@/utils/apis/Apis.jsx";
import PortfolioChild from "./portfolioChild";
import { useEffect, useState } from "react";

export default  function PortfolioComponent() {

   const[data,setData]=useState() 
   
   const loadPortfolio=async()=>{
    let result=await fetchAllportFolio()
    setData(result)

   }
    
    
    useEffect(()=>{
        loadPortfolio()
    },[])

  

    return (
       <>

       <PortfolioChild data={data}/>
       </>
    );
}

 



