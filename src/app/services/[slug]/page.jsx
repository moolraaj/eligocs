
 
import { ExportScoApiData } from "@/utils/apis/scoApi";
import { LoadscoData } from "@/app/_metadata/metadata";
import ServicesSecondSlug from "./component/ServiceSlug";
 
 


export default async function Page({ params }) {

    const { slug } = params;
  
    


    

    return (
        <>
           <ServicesSecondSlug  slug={slug} />  
        </>
    );
}


// export async function generateStaticParams() {
//     const api = allExportedApi();
//     const result = await api.fetchAllServices();
//     return result.map(ele => ({
//         slug: ele.slug
//     }));
// }


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


