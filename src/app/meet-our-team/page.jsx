import { meetOurTeamPage } from "@/utils/apis/Apis"
import TeamPageComponent from "./component/teamPageComponent"
 
 

 

 async function MeetOurTeam() {
    let data=await meetOurTeamPage()
    console.log(data)

  return (
     <>
     
     <TeamPageComponent data={data}/>
   
    
     
     </>
  )
}

export default MeetOurTeam

 
