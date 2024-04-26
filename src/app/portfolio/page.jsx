import { fetchAllportFolio, portfolioApi } from "@/utils/apis/Apis";
import PortfolioPage from "./component/portfolioPage";





export default async function Portfolio() {

    let data=await portfolioApi()
    console.log(data)


    let portfolio=await fetchAllportFolio()


    return (
        <>
            <PortfolioPage data={data} portfolio={portfolio}/>

        </>
    );
}

 



