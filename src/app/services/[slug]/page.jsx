import { allExportedApi } from "@/utils/apis/Apis.jsx";
import Serviceslug from "./component/Serviceslug";
 


export default async function Page({ params }) {
    let api=allExportedApi()
    const { slug } = params;
    
    const data = await api.fetchSingleService(slug);
    

    let services=await api.fetchAllServices()
    


    

    return (
        <>
             <Serviceslug data={data} services={services} />
        </>
    );
}


export async function generateStaticParams() {
    const api = allExportedApi();
    const result = await api.fetchAllServices();
    return result.map(ele => ({
        slug: ele.slug
    }));
}


// generate dynamic sco title and desriptions
export async function generateMetadata({params}){
    const { slug } = params;
    let api=allExportedApi()
    const data = await api.fetchSingleService(slug);
    let result =data.map((ele)=>{
        return{
            title:ele.slug,
            description:ele.acf.services_inner_heading, 
        }
    })
   
    return{
        title:result[0].title,
        description:result[0].description,
        openGraph:{
        type:'website',
        url:'https://www.eligo.cloud/',
        }
    }
}


