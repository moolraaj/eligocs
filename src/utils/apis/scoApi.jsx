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
     
    
    return{
        fetchHomeScoData,
        fetchAboutScoData,
        fetchCourseScoData
       
    }
}