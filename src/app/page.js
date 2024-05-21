 
 
 
import { HomeScoData } from "./_home/homeMetadata";
import HomePage from "./_home/homepage";
 
 
import './globals.css'
 
 
export default function Home() {   
  return (
    <>
 
    <HomePage />

    
      
        
       

    </>
  );
}

export async function generateMetadata(){
  let metadata=await HomeScoData()
  return metadata 
  
}
