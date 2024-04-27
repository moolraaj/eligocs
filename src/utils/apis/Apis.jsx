// fetch home page api

export const HomeApi = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=home&fields=acf&acf_format=standard`);
  let data = await response.json()
  return data
}



//fetch About page api
export const AboutApi = async() =>{
  let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=about&fields=acf&acf_format=standard`);
  let response = await data.json();
  return response;
}


// fetch Service page api 
export const ServiceApi =async()=>{
  let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=our_services&fields=acf&acf_format=standard`);
  let response = await data.json();
  return response;
}


// fetch all services template  api
export const fetchAllServices = async () => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services?fields=acf&acf_format=standard`)
  let data = await response.json()
  return data
}


// fetch single services template  api
export const fetchSingleService = async (slug) => {
      let response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services?slug=${slug}&fields=acf&acf_format=standard`);
      let result=await response.json()
      return result  
  
}



//fecth portfolio page api

export const portfolioApi=async ()=>{
  let response=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=portfolio&fields=acf&acf_format=standard`)
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



//fetch meet out team api
export const fetchMeetOurTeam=async()=>{
  let response=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meet_our_team?fields=acf&acf_format=standard`)
  let result=await response.json()
  return result
}



//fetch meet out team page  api
export const meetOurTeamPage=async()=>{
  let response=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=meet-our-team&fields=acf&acf_format=standard`)
  let result=await response.json()
  return result
}



//fetch header footer
export const fetchHeaderFooter=async()=> {
  let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL_HEADER_FOOTER}/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`)
  let response = await data.json()
  return response
}








