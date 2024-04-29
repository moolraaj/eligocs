 
 
import { fetchHeaderFooter } from '@/utils/apis/Apis';
import Footer from '../footer/page';
import Navbar from '../navbar/page';


 
 

export default async function Layout({ children }) {

   

    
        let response=await fetchHeaderFooter()
        let data=await response.data
       
  
    

    

    return (
        <>
            <Navbar data={data}/>
            {children}
            <Footer />
            
        </>
    )
}

 
