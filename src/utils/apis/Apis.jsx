// fetch homepage api

export const HomeApi = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=home&fields=acf&acf_format=standard`);
  let data = await response.json()
  return data
}




// fetch all services api
export const fetchAllServices = async () => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services?fields=acf&acf_format=standard`)
  let data = await response.json()
  return data
}




// fetch single services api
export const fetchSingleService = async (slug) => {
      let response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services?slug=${slug}&fields=acf&acf_format=standard`);
      let result=await response.json()
      return result  
  
}



//fetch all portfolio api

export const fetchAllportFolio=async()=>{
  let response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio?fields=acf&acf_format=standard`)
  let result=await response.json()
  return result

}

//fetch single portfolio api
export const fetchSingleportFolio=async(slug)=>{
  let response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio?slug=${slug}&fields=acf&acf_format=standard`)
  let result=await response.json()
  return result

}


export const fetchHeaderFooter=async()=> {
  let data = await fetch('https://api.eligo.cloud/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer')
  let response = await data.json()
  return response
}




