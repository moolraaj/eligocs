import { allExportedApi } from "@/utils/apis/Apis.jsx";
import PortfolioPage from "./component/portfolioPage";
 
 





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

 



