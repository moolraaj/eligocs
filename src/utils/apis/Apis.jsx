// homepage api
export const HomeApi = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=home&fields=acf&acf_format=standard`);
      if (!response.ok) {
        throw new Error('Failed to fetch homepage data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching homepage data:', error);
      throw error;
    }
  };


  
// fetch services page api

export const fetchAllServices = async () =>{
  let response=await fetch('https://api.eligo.cloud/wp-json/wp/v2/services?fields=acf&acf_format=standard')
  let data=await response.json()
  return data
}



export const fetchSingleService = async(slug)=> {
  try {
      let url;
      if (slug) {
          url = `https://api.eligo.cloud/wp-json/wp/v2/services?slug=${slug}?fields=acf&acf_format=standard`;
      }
      const response = await fetch(url);
      if (response.ok) {
          return await response.json();
      } else {
          console.error('Failed to fetch service data');
          return null;
      }
  } catch (error) {
      console.error('Error fetching service data:', error);
      return null;
  }
}


export const fetchAllportFolio = async () =>{
  let response=await fetch('https://api.eligo.cloud/wp-json/wp/v2/portfolio?fields=acf&acf_format=standard')
  let data=await response.json()
  return data
}





 