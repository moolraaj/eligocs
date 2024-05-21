


import { allExportedApi } from "@/utils/apis/Apis";
import Productslug from './component/productslug'

 


export default async function Page({ params }) {
    
    const { slug } = params;
   
    return (
        <>
            <Productslug slug={slug} />
        </>
    );
}


export async function generateStaticParams() {
    let api = allExportedApi()
    let data = await api.AllProducts();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}


// generate dynamic sco title and desriptions
export async function generateMetadata({params}){
    let {slug}=params
    let api=allExportedApi() 
    let data = await api.fetchSigleProducts(slug)
   
    const result=data.map((ele)=>{
        let description=ele.acf.product_description.replace(/<[^>]+>|&[^;]+;/g, '');
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





