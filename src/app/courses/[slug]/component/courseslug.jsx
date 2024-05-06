import CallToAction from "@/app/call-to-action/callToAction";
import Link from "next/link";

export default function CourseSlug({ data }) {
  return (
    <>
      <div className="single_course_outer page_top">
        <div className="single_course_inner">
          {data.map((singleCourse, index) => {
            return (
              <div className="single_course" key={index}>
                <div className="course_post_wrapper">
                  <div className="course_image">
                    <img
                      src={singleCourse.acf.course_image.url}
                      alt="course_image"
                    />
                    <span></span>
                  </div>
                  <div className="course_intro_join_section">
                    <div className="course_intro_wrapper">
                      <h1>{singleCourse.acf.corse_introduction_heading}</h1>
                      <p>{singleCourse.acf.course_introduction}</p>
                    </div>
                    <div className="course_join_wrapper">
                      <div className="course_join_inner">
                      <p>{singleCourse.acf.join_course_heading}</p>
                      <Link href={`/`}>JOin Course Now</Link>
                      </div>
                    </div>
                  </div>
                  {singleCourse.acf.what_you_will_learn_heading && (
                    <div className="what_u_learn_section">
                      <h2>What You'll Learn</h2>
                      <p>{singleCourse.acf.what_you_will_learn_heading}</p>
                      {singleCourse.acf.course_points_ &&
                        singleCourse.acf.course_points_.map(
                          (coursePoints, index) => {
                            return (
                              <ul
                                key={index}
                                className="course_points"
                              >
                                <li>
                                  <h3
                                    dangerouslySetInnerHTML={{
                                      __html: coursePoints.course_point_tittle,
                                    }}
                                  ></h3>
                                </li>
                                <li>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: coursePoints.course_point_explanation,
                                    }}
                                  ></p>
                                </li>
                              </ul>
                            );
                          }
                        )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
}
