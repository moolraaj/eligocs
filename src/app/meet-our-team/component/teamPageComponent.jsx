

'use client'
import { useEffect, useState } from "react"
import TeamComponent from "./teamComponent"
import { allExportedApi } from "@/utils/apis/Apis";
import { emptyImage } from "../../../../public/assets/images";



export default function TeamPageComponent() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  let api = allExportedApi()

  const loadMeetTeamPage = async () => {
    try {
      let response = await api.meetOurTeamPage()
      setData(response)
    } catch (error) {
      console.error("Failed to load services", error)
    }
  }


  useEffect(() => {
    const loadData = async () => {
      await loadMeetTeamPage()
      setLoading(false)
    }
    loadData()
  }, [])


  return (
    <>

      {data && data.map((ele) => {

        return <div className="team_outer_wrapper page_top" key={ele.id}>

          <div className="team_top_section">
            <div className="team_header-wrapper">
              <div className="left_banner_heading">
                <h1>{ele.acf.team_top_banner_heading}</h1>
              </div>
              <div className="team_banner_image">
                <img src={ele.acf.team_image || emptyImage.src} alt="team_image" />
                <div className="bottom_banner"></div>
              </div>
            </div>
            <div className="right_banner_heading">
              <h1>{ele.acf.team_heading}</h1>
              <div className="our_team_description">
                <p dangerouslySetInnerHTML={{ __html: ele.acf.team_description }}></p>

              </div>
            </div>



          </div>


          <div className="team_member_lists">
            <div className="member_top_heading">
              <h2>{ele.acf.member_groups_heading}</h2>
            </div>
            {loading ? (
              <div className="page_top">
                <p className="loading_data">Loading...</p>
              </div>
            ) : (
              <div className="our_memeber_wrapper">
                <TeamComponent />
              </div>
            )}

          </div>

        </div>
      })}

    </>
  )
}


