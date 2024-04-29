import { fetchAllportFolio, portfolioApi } from "@/utils/apis/Apis.jsx";
import PortfolioPage from "./component/portfolioPage";
 
 





 async function Portfolio() {

    let data=await portfolioApi()
    console.log(data)


    let portfolio=await fetchAllportFolio()


    return (
        <>
      
            <PortfolioPage data={data} portfolio={portfolio}/>
           

        </>
    );
}

export default Portfolio

 



