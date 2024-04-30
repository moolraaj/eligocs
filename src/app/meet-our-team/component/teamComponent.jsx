import React from 'react'

function TeamComponent({ result }) {
    return (
        <>

            {result.map((ele) => {
                return <div className="team_member_section" key={ele.id}>
                    <div className="memebr_left_section">

                        <div className="team-member_image">
                            <img src={ele.acf.our_team_image} alt="" />
                            <div className="team_member_description">
                        <p dangerouslySetInnerHTML={{__html:ele.acf.our_team_description.slice(0,70)}}></p>
            

                        </div>
                        </div>
                       

                    </div>
                    <div className="member_right_section">

                        <div className="member_informations_section">

                            <div className="member_name">
                                <h4>{ele.acf.our_team_name}</h4>
                            </div>
                            <div className="member_designation">
                                <p>{ele.acf.our_team_designation}</p>
                            </div>
                            <div className="member_name">
                                {ele.acf.our_team_social_connectivity.map((e, index) => {
                                    return <div className="team_social_icon_wrapper" key={index}>

                                        <div className="member_social_icons">
                                            <a href={e.social_link} target='_blanck'><img src={e.social_icon} alt='social icons' /></a>

                                        </div>

                                    </div>
                                })}
                            </div>

                        </div>

                    </div>
                </div>
            })}

        </>
    )
}

export default TeamComponent
