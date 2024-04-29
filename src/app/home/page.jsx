 
 
 
 
 
 
 

import { HomeApi } from '@/utils/apis/Apis';
import Layout from '../common/layout/lauout';
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

<Layout>


  <HomeCompo result={result} />
</Layout>



  )
}
 
 