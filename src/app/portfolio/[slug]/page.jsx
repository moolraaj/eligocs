
import { fetchAllportFolio, fetchSingleportFolio } from "@/utils/apis/Apis";
import Portfolioslug from "./component/portfolioslug";



export default async function Page({ params }) {
    const { slug } = params;

    console.log(slug)


    let data = await fetchSingleportFolio(slug)
    console.log(data)

    return (
        <>
            <Portfolioslug data={data} />
        </>
    );
}


export async function generateStaticParams() {
    let data = await fetchAllportFolio();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}





