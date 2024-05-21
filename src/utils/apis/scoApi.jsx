export const ExportScoApiData=()=>{
    // sco data in all pages
    const fetchHomeScoData=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/`)
        let response=await data.json()
        return response
    }
    const fetchAboutScoData=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/about`)
        let response=await data.json()
        return response
    }
    const fetchCourseScoData=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/courses`)
        let response=await data.json()
        return response
    }
    const fetchMeetOurteamScoData=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/meet-our-team`)
        let response=await data.json()
        return response
    }
    const fetchProductsScoData=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/products`)
        let response=await data.json()
        return response
    }
    const fetchServiceScoData=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/our-services`)
        let response=await data.json()
        return response
    }
    const fetchContactUsScoData=async()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/contact-us`)
        let response=await data.json()
        return response
    }






    // ***********************   fetch sco dynamic data ************************************//

    const fetchdynamicCourseScoData=async(slug)=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/course/${slug}`)
        let response=await data.json()
        return response
    }
    const fetchdynamicProductScoData=async(slug)=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/product/${slug}`)
        let response=await data.json()
        return response
    }
    const fetchdynamicServicesScoData=async(slug)=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_URL}/services/${slug}`)
        let response=await data.json()
        return response
    }
     
    
    return{
        fetchHomeScoData,
        fetchAboutScoData,
        fetchCourseScoData,
        fetchMeetOurteamScoData,
        fetchProductsScoData,
        fetchServiceScoData,
        fetchContactUsScoData,
        fetchdynamicCourseScoData,
        fetchdynamicProductScoData,
        fetchdynamicServicesScoData
       
    }
}