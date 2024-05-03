import JobForm from "@/app/forms/jobForm"
import RerenderCompo from "../component/formAnimationCompo"
import formClose from '../../../assets/headerAssets/formclose.png'
 

function SlideJobForm({isFormVisible , toggleFormVisibility}) {
  return (
   <>
      {isFormVisible && (

<div className="cf7_form_outer" style={{ animation: isFormVisible ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
  <div className="cf7_form_inner">
    <div className="cf7_top_banner">
      <div className="cf7_left_section">
        <div className="form_banner_heading">

          <h1>hello</h1>
        </div>

        <div className="form_slider_wrapper">
          <div className="_form_paragraph">
            <p>
              Let's work on
            </p>
          </div>
          <div className="form_slides">
            <RerenderCompo />
          </div>
        </div>


      </div>

      <div className="cf7_right_section">
        <div className="close_button">
          <button onClick={toggleFormVisibility} className="close_button">
            <img src={formClose.src} alt="" srcset="" />
          </button>
        </div>
      </div>
    </div>
    <div className="cf7_form_wrapper">
      <JobForm />
    </div>

  </div>
</div >
)
}
   </>
  )
}

export default SlideJobForm



 
