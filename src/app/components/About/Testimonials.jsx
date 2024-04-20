
// import React, { useState } from "react";
// import testImg1 from "../../assets/aboutpageAssets/aboutImg-one.jpg";
// import testImg2 from "../../assets/aboutpageAssets/aboutImg-two.jpg";
// import testImg3 from "../../assets/aboutpageAssets/aboutImg-three.jpg";
// import testImg4 from "../../assets/aboutpageAssets/aboutImg-four.jpg";

// const initialTestimonials = [
//   {
//     clientImg: testImg1,
//     clientReview:
//       "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
//     clientName: "Dinesh singh",
//     clientAddress: "Shimla, India",
//   },
//   {
//     clientImg: testImg2,
//     clientReview:
//       "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
//     clientName: "Ramesh sood",
//     clientAddress: "Punjab, India",
//   },
//   {
//     clientImg: testImg3,
//     clientReview:
//       "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
//     clientName: "Mayank das",
//     clientAddress: "Delhi, India",
//   },
//   {
//     clientImg: testImg4,
//     clientReview:
//       "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
//     clientName: "Sachin",
//     clientAddress: "Chandigarh, India",
//   },
//   {
//     clientImg: testImg2,
//     clientReview:
//       "“54353353 3456356 46nted pasture yfgf het its ex fghfghfgpress parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
//     clientName: "34543 ",
//     clientAddress: "35dfd, India",
//   },
// ];

// function Testimonials({result}) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const changeTestimonial = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="testimonials-outer">
//       <div className="testimonial-left-section">
//         <h1>
//           <span className="uderline-text">Testimonials</span>
//           <span className="uderline-text">From Our</span>
//           <span className="uderline-text">Valued Clients</span>
//         </h1>
//       </div>
//       <div className="testimonial-right-section">
//         {initialTestimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="testimonial-card"
//             style={{ zIndex: -index }}
//           >
//             <img
//               src={initialTestimonials[activeIndex].clientImg}
//               alt="clientImg"
//               className="client-img"
//             />
//             <div className="card-content">
//               <p>{initialTestimonials[activeIndex].clientReview}</p>
//               <h1>{initialTestimonials[activeIndex].clientName}</h1>
//               <h3>{initialTestimonials[activeIndex].clientAddress}</h3>
//             </div>
//           </div>
//         ))}

//         <div className="dots">
//           {initialTestimonials.map((_, index) => (
//             <span
//               key={index}
//               className={index === activeIndex ? "dot active-dot" : "dot"}
//               onClick={() => changeTestimonial(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testimonials;




import React, { useState } from "react";

function Testimonials({ result }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = result.acf.testimonials;

  const changeTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimonials-outer">
      <div className="testimonial-left-section">
        <h1>
          <span className="uderline-text">Testimonials</span>
          <span className="uderline-text">From Our</span>
          <span className="uderline-text">Valued Clients</span>
        </h1>
      </div>
      <div className="testimonial-right-section">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={
              index === activeIndex
                ? "testimonial-card active"
                : "testimonial-card"
            }
            style={{ zIndex: testimonials.length - index }}
          >
            <img
              src={testimonials[activeIndex].client_image}
              alt="clientImg"
              className="client-img"
            />
            <div className="card-content">
              <p>{testimonials[activeIndex].client_review}</p>
              <h1>{testimonials[activeIndex].client_name}</h1>
              <h3>{testimonials[activeIndex].client_address}</h3>
            </div>
          </div>
        ))}

        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={
                index === activeIndex ? "dot active-dot" : "dot"
              }
              onClick={() => changeTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
