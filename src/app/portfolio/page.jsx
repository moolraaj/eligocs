import { fetchAllportFolio, portfolioApi } from "@/utils/apis/Apis.jsx";
import PortfolioPage from "./component/portfolioPage";
import Layout from "../common/layout/lauout";
 





 async function Portfolio() {

    let data=await portfolioApi()
    console.log(data)


    let portfolio=await fetchAllportFolio()


    return (
        <>
        <Layout>
            <PortfolioPage data={data} portfolio={portfolio}/>
            </Layout>

        </>
    );
}

export default Portfolio

 



