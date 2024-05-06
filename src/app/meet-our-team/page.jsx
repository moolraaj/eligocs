 
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

 
