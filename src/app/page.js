import dynamic from "next/dynamic";
 

 
 
const HomePage=dynamic(
  ()=> import  ("./home/homepage"),
  {
    ssr:false
  }
)













export default function Home() {   
  return (
    <>
     
        <HomePage />
       

    </>
  );
}
