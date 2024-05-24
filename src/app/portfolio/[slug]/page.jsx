import {  fetchAllportFolio } from "@/utils/apis/Apis";

 

async function fetchServices(slug) {
  try {
    let data = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/portfolio?slug=${slug}&fields=acf&acf_format=standard`);
    let result = await data.json();
    return result;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  console.log(slug);

  const data = await fetchServices(slug);
  console.log(data);

  return (
    <>
       {
        data.map((ele)=>{
          return <div key={ele.id}>
            <h1 key={ele.id}>{ele.acf.portfolio_title}</h1>
            <img src={ele.acf.portfolio_image}/>
          </div>
    
          

        })
       } 
    </>
  );
}

export async function generateStaticParams() {
  const result = await fetchAllportFolio();
  return result.map(ele => ({
    slug: ele.slug
  }));
}
