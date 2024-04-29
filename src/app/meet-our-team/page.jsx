import { meetOurTeamPage } from "@/utils/apis/Apis.jsx"
import TeamPageComponent from "./component/teamPageComponent"

 

export default async function MeetOurTeam() {
    let data=await meetOurTeamPage()
    console.log(data)

  return (
     <>
     <TeamPageComponent data={data}/>
     
     </>
  )
}

 
