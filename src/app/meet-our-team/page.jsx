import { allExportedApi } from "@/utils/apis/Apis.jsx"
import TeamPageComponent from "./component/teamPageComponent"
 
 

 

 async function MeetOurTeam() {
   let api=allExportedApi()
    let data=await api.meetOurTeamPage()
    console.log(data)

  return (
     <>
     
     <TeamPageComponent data={data}/>
   
    
     
     </>
  )
}

export default MeetOurTeam

 
