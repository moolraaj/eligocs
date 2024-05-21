import { allExportedApi } from "@/utils/apis/Apis.jsx";
import Serviceslug from "./component/Serviceslug";
import { ExportScoApiData } from "@/utils/apis/scoApi";
import { LoadscoData } from "@/app/_metadata/metadata";
 


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
    let api=ExportScoApiData()
    const data = await api.fetchdynamicServicesScoData(slug);
    const metadata = await LoadscoData({ data });

  return {
      title: metadata.title,
      description: metadata.description,
      openGraph: {
          title: metadata.title,
          description: metadata.description,
          locale: metadata.locale,
          type: metadata.type,
          url: metadata.url,
          siteName: metadata.siteName,
          updatedTime: metadata.updatedTime,
          card: metadata.card,
          twitterTitle: metadata.twitterTitle,
          twitterDescription: metadata.twitterDescription
      }
  };
    
}


