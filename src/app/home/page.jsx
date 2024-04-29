  
import { HomeApi } from '@/utils/apis/Apis';
 
import dynamic from 'next/dynamic';
 

const HomeCompo=dynamic(
    ()=> import  ('../components/Home/Home'),  
    {
      ssr:false
    }
  )
 



export default async function HomePage() {

 



 
 
    
    const result = await HomeApi()
 

 





  return (

 


  <HomeCompo result={result} />
 



  )
}
 
 