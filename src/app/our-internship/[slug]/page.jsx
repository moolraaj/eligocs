
import dynamic from 'next/dynamic';

import { allExportedApi } from "@/utils/apis/Apis";


const Internshipslug = dynamic(
    () => import('../[slug]/component/internshipslug'),
    {
        ssr: false
    }
)


export default async function Page({ params }) {
    let api = allExportedApi()
    const { slug } = params;

    let data = await api.fetchSigleInternship(slug)
    let allInternship = await api.ourInternships(slug)
    return (
        <>
            <Internshipslug data={data} allInternship={allInternship} />
        </>
    );
}


export async function generateStaticParams() {
    let api = allExportedApi()
    let data = await api.ourInternships();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}


// generate dynamic sco title and desriptions
export async function generateMetadata({params}){
    let {slug}=params
    let api=allExportedApi() 
    let data = await api.fetchSigleInternship(slug)
   
    const result=data.map((ele)=>{
        let description=ele.acf.internship_description.replace(/<[^>]+>|&[^;]+;/g, '');
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





