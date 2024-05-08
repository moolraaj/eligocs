
import { allExportedApi } from "@/utils/apis/Apis";
import Portfolioslug from "./component/portfolioslug";



export default async function Page({ params }) {
    let api=allExportedApi()
    const { slug } = params;

  


    let data = await api.fetchSingleportFolio(slug)
     

    return (
        <>
            <Portfolioslug data={data} />
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
    console.log(data)
    
    const result=data.map((ele)=>{
        return{
            title:ele.title.rendered,
            description:ele.acf.portfolio_description
             
        }
    })
    console.log(result[0])
    return{
        title:result[0].title,
        description:result[0].description,
        openGraph:{
            
        }
        
    }
}





