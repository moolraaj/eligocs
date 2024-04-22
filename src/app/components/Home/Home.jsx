"use client";
 



import ParallaxContainer from "../About/ParallaxContainer";
import AboutSection from "./home-sections/About";
import QuoteSection from "./home-sections/Quote";
import CompanySection from "./home-sections/Company";
import DevelopmentSection from "./home-sections/Development";
import TransformationSection from "./home-sections/Transformation";
 
import '../../about/AboutPage.scss'
import PortfolioSection from "./home-sections/Portfolio";
 
import TestimonialSection from "./home-sections/Testimonial";

function Home({result,isScrolled}) {
  



  return (
    <>

      {result.map((ele) => (
        <div className="home_wrapper" key={ele.id}>


          <ParallaxContainer speed={0.5}
            className="container-1">
            <div className="page_outer home_section_outer">
              <div className="page_inner home_section_inner">
                <div className="home_slider_wrapper">
                  <h1>{ele.acf.slider_heading_first}</h1>
                  <h1>{ele.acf.slider_heading_second}</h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: ele.acf.slider_para,
                    }}></p>


                </div>
                <div
                  className={`home_slider_animate ${isScrolled ? "scrolled" : ""
                    }`}>
                  <div className={`innovation_left ${isScrolled ? "hide" : ""}`}>
                    <h1 className={`innovation-heading`}>{ele.acf.innovation}</h1>
                  </div>
                  <div
                    className={`innovation_right ${!isScrolled ? "hide" : "show"
                      }`}>
                    {isScrolled && (
                      <>
                        <button type="button">apply now</button>
                        <p>{ele.acf.innovation_heading}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ParallaxContainer>
          {/*about us section starts*/}
          <AboutSection ele={ele} />
          {/*about us section ends*/}





          {/*transformation section starts*/}
          <TransformationSection ele={ele} />
          {/*transformation section starts*/}




          {/*company section starts*/}
          <CompanySection ele={ele} />
          {/*company process section ends*/}





          {/*our development process starts*/}
          <DevelopmentSection ele={ele} result={result} />
          {/*our development process ends*/}




          {/*portfolio section starts*/}
          <PortfolioSection ele={ele} />
          {/*portfolio section ends*/}





          {/*testimonial section starts*/}
          <TestimonialSection ele={ele} />
          {/*testimonial section ends*/}



          {/*quote section ends*/}
          <QuoteSection ele={ele} />
          {/*quote section ends*/}


        </div>
      ))}
    </>
  );
}

export default Home;
