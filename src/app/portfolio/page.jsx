import { allExportedApi } from "@/utils/apis/Apis.jsx";
 
import dynamic from "next/dynamic";
 
 
const PortfolioPage=dynamic(
    ()=> import('./component/portfolioPage'),
    {
        ssr:false
    }
)

 async function Portfolio() {
    let api=allExportedApi()

    let data=await api.portfolioApi()
    console.log(data)


    let portfolio=await api.fetchAllportFolio()


    return (
        <>
      
            <PortfolioPage data={data} portfolio={portfolio}/>
           

        </>
    );
}

export default Portfolio

 



