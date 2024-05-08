import { allExportedApi } from "@/utils/apis/Apis";
import PortfolioPage from "./component/portfolioPage";

 

 


 
 




async function Portfolio() {


    return (
        <>
            <PortfolioPage />
        </>
    );
}

export default Portfolio


// generate dynamic sco title and desriptions
export async function generateMetadata(){
    let api=allExportedApi() 
    const data = await api.portfolioApi();
    const result=data.map((ele)=>{
        return{
            title:ele.title.rendered,
            description:ele.acf.portfolio_page_description
             
        }
    })
    console.log(data)
    return{
        title:result[0].title,
        description:result[0].description,
        openGraph:{
        }
    }
}


