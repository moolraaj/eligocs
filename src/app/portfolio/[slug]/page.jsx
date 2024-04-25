 
import { fetchAllportFolio, fetchSingleportFolio } from "@/utils/apis/Apis";

 

export default async function Page({ params }) {
    const { slug } = params;

    console.log(slug)


    let data=await fetchSingleportFolio(slug)
    console.log(data)

    return (
        <>
            {data && data.map((ele)=>{
                return  <div key={ele.id}>
                <img src={ele.acf.portfolio_image} alt="" srcSet="" />
                  <h1>{ele.acf.portfolio_heading}</h1>
                  <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_short_description }}></p>
                  <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_technology }}></p>
              </div>
            })}
        </>
    );
}


export async function generateStaticParams(){
    let data = await fetchAllportFolio();
    return data.map((ele) => ({
        slug: ele.slug
    }));
}





