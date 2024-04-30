import { allExportedApi } from "@/utils/apis/Apis.jsx"
import TeamComponent from "./teamComponent"


export default async function TeamPageComponent({ data }) {
  let api=allExportedApi()


  let result=await api.fetchMeetOurTeam()



  return (
    <>

      {data.map((ele) => {

        return <div className="team_outer_wrapper" key={ele.id}>

          <div className="team_top_section">
            <div className="left_banner_heading">
              <h1>{ele.acf.team_top_banner_heading}</h1>
            </div>
            <div className="team_banner_image">
              <img src={ele.acf.team_image} alt="" />
              <div className="bottom_banner"></div>
            </div>
            <div className="right_banner_heading">
              <h1>{ele.acf.team_heading}</h1>
              <div className="our_team_description">
            <p dangerouslySetInnerHTML={{__html:ele.acf.team_description}}></p>

          </div>
            </div>
            

         
          </div>


          <div className="team_member_lists">
            <div className="member_top_heading">
              <h1>{ele.acf.member_groups_heading}</h1>
            </div>

            <div className="our_memeber_wrapper">
            <TeamComponent result={result}/>
            </div>
          </div>

        </div>








      })}

    </>
  )
}

 
