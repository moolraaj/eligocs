import ApplyForJob from '@/app/forms/applyForJob'

import formClose from '../../../assets/headerAssets/formclose.png'

function ApplyForm({ isApplyJobVisible,closeApplyJob }) {
 

   
 
  return (
    <>
      {isApplyJobVisible && (
        <div className="cf7_form_outer" style={{ animation: isApplyJobVisible ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
          <div className="cf7_form_inner">
            <div className="cf7_top_banner">

              <div className="cf7_left_section">
                <div className="form_banner_heading">

                  <h1>apply now</h1>
                </div>

                <div className="form_slider_wrapper">
                  <div className="_form_paragraph">
                    <p>
                      apply for job
                    </p>
                  </div>
                </div>


              </div>

              <div className="cf7_right_section">
                <div className="close_button">
                  <button onClick={closeApplyJob} className="close_button">
                    <img src={formClose.src} alt="" srcset="" />
                  </button>
                </div>
              </div>

            </div>
            <div className="cf7_form_wrapper">
              <ApplyForJob />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ApplyForm
