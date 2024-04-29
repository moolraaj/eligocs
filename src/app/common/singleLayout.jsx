 
import Navbar from './navbar/page'
import Footer from './footer/page'
import { fetchHeaderFooter } from '@/utils/apis/Apis.jsx';

export default async function SingleLayout({ children }) {

   

    
        let response=await fetchHeaderFooter()
        let data=await response.data
        // console.log(data)
  
    

    

    return (
        <>
            <Navbar data={data}/>
            {children}
            <Footer />
            
        </>
    )
}

 
