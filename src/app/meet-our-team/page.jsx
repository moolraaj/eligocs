 
import { allExportedApi } from "@/utils/apis/Apis"
import TeamPageComponent from "./component/teamPageComponent"
async function MeetOurTeam() {
  let api = allExportedApi()
  
 
 

   
    let data = await api.meetOurTeamPage()
   
 
    let result = await api.fetchMeetOurTeam()
   
 
   
    

  return (
    
     <>
     
     <TeamPageComponent  data={data} result={result}/>
   
    
     
     </>
  )
}

export default MeetOurTeam


export async function generateMetadata(){
  let api=allExportedApi() 
  let data = await api.meetOurTeamPage()
 
   
  const result=data.map((ele)=>{
    let description=ele.acf.team_description.replace(/<[^>]+>|&[^;]+;/g, '');
    
      return{
          title:ele.title.rendered,
          description
           
      }
  })
 
  return{
      title:result[0].title,
      description:result[0].description,
      openGraph:{
        
      }
  }
}

 
