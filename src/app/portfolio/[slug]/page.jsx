
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





