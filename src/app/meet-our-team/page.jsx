import { meetOurTeamPage } from "@/utils/apis/Apis"
import TeamPageComponent from "./component/teamPageComponent"
import Layout from "../common/layout/lauout"
 

 

 async function MeetOurTeam() {
    let data=await meetOurTeamPage()
    console.log(data)

  return (
     <>
     <Layout>
     <TeamPageComponent data={data}/>
     </Layout>
    
     
     </>
  )
}

export default MeetOurTeam

 
