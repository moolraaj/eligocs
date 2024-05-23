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
    const [data, setData] = useState();

    const loadPortfolio = async () => {
        let result = await api.fetchAllportFolio();
        setData(result);

        // Pass the first item's slug to the parent component
        if (result.length > 0) {
            setFirstPortfolioSlug(result[0].slug);
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
