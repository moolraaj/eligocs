
import dynamic from 'next/dynamic';

import { allExportedApi } from "@/utils/apis/Apis";


const Productslug = dynamic(
    () => import('../[slug]/component/productslug'),
    {
        ssr: false
    }
)


export default async function Page({ params }) {
    let api = allExportedApi()
    const { slug } = params;

    let data = await api.fetchSigleProducts(slug)
    let allProducts = await api.AllProducts(slug)
    return (
        <>
            <Productslug data={data} allProducts={allProducts} />
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
        return{
            title:ele.title.rendered,
            description:ele.acf.product_description
             
        }
    })
    
    return{
        title:result[0].title,
        description:result[0].description,
        openGraph:{
          
        }
    }
  }





