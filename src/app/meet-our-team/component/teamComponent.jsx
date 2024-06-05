import React from 'react';
import { emptyImage } from '../../../../public/assets/images';

function TeamComponent({ result }) {
     
    return (
        <>

            {result && result.map((ele) => {
                return <div className="team_member_section" key={ele.id}>
                    <div className="memebr_left_section">

                        <div className="team-member_image">
                            <img src={ele.acf.our_team_image || emptyImage.src} alt="" />
                            <p dangerouslySetInnerHTML={{__html:ele.acf.our_team_description.slice(0,70)}}></p>
                            <div className="team_member_description">
                       
            

                        </div>
                        </div>
                       

                    </div>
                    <div className="member_right_section">

                        <div className="member_informations_section">
                        <div className='members_image_mobile'>
                            <img src={ele.acf.our_team_image || emptyImage.src} alt="our_team_image" style={{width: '100px',height: '100px',objectFit: 'cover'}}/>
                         </div>
                            <div className="member_name">
                                <h4>{ele.acf.our_team_name}</h4>
                            </div>
                            <div className="member_designation">
                                <p>{ele.acf.our_team_designation}</p>
                            </div>
                            <div className="member_name">

                            {Array.isArray(ele.acf?.our_team_social_connectivity) ? (
                           ele.acf.our_team_social_connectivity.map((icons, index) => (
                            <div className="team_social_icon_wrapper" key={index}>

                            <div className="member_social_icons">
                                <a href={icons.social_link || ""} target='_blanck'><img src={icons.our_team_social_media || emptyImage.src} alt='social icons' /></a>

                            </div>

                        </div>
                           ))
                        ) : (
                           ""
                        )}
                            
                            </div>
                         
                        </div>

                    </div>
                </div>
            })}

        </>
    )
}

export default TeamComponent
