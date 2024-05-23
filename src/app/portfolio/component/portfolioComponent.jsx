// 'use client'
// import { allExportedApi } from "@/utils/apis/Apis.jsx";
// import PortfolioChild from "./portfolioChild";
// import { useEffect, useState } from "react";

// export default  function PortfolioComponent() {
//     let api=allExportedApi()

//    const[data,setData]=useState() 
   
//    const loadPortfolio=async()=>{
//     let result=await api.fetchAllportFolio()
//     setData(result)

//    }
    
    
//     useEffect(()=>{
//         loadPortfolio()
//     },[])

  

//     return (
//        <>

//        <PortfolioChild data={data}/>
//        </>
//     );
// }

 

import { allExportedApi } from "@/utils/apis/Apis.jsx";
import PortfolioChild from "./portfolioChild";
import { useEffect, useState } from "react";

export default function PortfolioComponent({ setFirstPortfolioSlug }) {
    const api = allExportedApi();
    const [data, setData] = useState([]);

    const loadPortfolio = async () => {
        try {
            const result = await api.fetchAllportFolio();
            setData(result);

            if (result.length > 0) {
                // Reversing the setting of the first portfolio slug
                setFirstPortfolioSlug(result[result.length - 1].slug);
            }
        } catch (error) {
            // Handle errors here
        }
    }
    
    useEffect(() => {
        loadPortfolio();
    }, []);

    return (
        <>
            <PortfolioChild data={data} />
        </>
    );
}
