import { fetchAllServices } from "@/utils/apis/Apis";

 

async function fetchServices(slug) {
  try {
    let data = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/services?slug=${slug}&fields=acf&acf_format=standard`);
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
          return <div>
            <h1 key={ele.id}>{ele.acf.services_title}</h1>
            <img src={ele.acf.services_image}/>
          </div>
    
          

        })
       } 
    </>
  );
}

export async function generateStaticParams() {
  const result = await fetchAllServices();
  return result.map(ele => ({
    slug: ele.slug
  }));
}
