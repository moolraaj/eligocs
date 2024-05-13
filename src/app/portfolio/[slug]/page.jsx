
import { allExportedApi } from "@/utils/apis/Apis";
import Portfolioslug from "./component/portfolioslug";



export default async function Page({ params }) {
    let api=allExportedApi()
    const { slug } = params;

  


    let data = await api.fetchSingleportFolio(slug)
    let relatedPOrtfolio = await api.fetchAllportFolio();
     

    return (
        <>
            <Portfolioslug data={data} relatedPOrtfolio={relatedPOrtfolio}/>
        </>
    );
}


export async function generateStaticParams() {
    let api=allExportedApi()
    let data = await api.fetchAllportFolio();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}

// generate dynamic sco title and desriptions
export async function generateMetadata({params}){
    let {slug}=params
    let api=allExportedApi() 
    const data = await api.fetchSingleportFolio(slug);
     
    
    const result=data.map((ele)=>{
        let description=ele.acf.portfolio_description.replace(/<[^>]+>|&[^;]+;/g, '');
        return{
            title:ele.title.rendered,
            description
             
        }
    })
    
    return{
        title:result[0].title,
        description:result[0].description,
        openGraph:{

        }
        
    }
}





