import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const data = [
  {
    avatar: avatar1,
    name: "Rahma Atef",
    review:
      "Your code is well-structured and reflects a good understanding of React and modern practices. Consider further optimizing performance by leveraging techniques like React.memo and useMemo.",
  },
  {
    avatar: avatar2,
    name: "Mostafa Desouky",
    review:
      "Your designs are visually appealing and user-friendly, providing a great user experience. Focus on refining small interactive elements and enhancing responsiveness for better cross-device compatibility.",
  },
  {
    avatar: avatar3,
    name: "Ahmed Salama",
    review:
      "Your project files are neatly organized, making the code easy to read and maintain. Adding more documentation could improve clarity for team members or new developers joining the project.",
  },
  {
    avatar: avatar4,
    name: "Lana Del Ray",
    review:
      "State management is handled effectively, especially if you're using libraries like Redux or Context API. For better scalability, consider implementing lazy loading or pagination when working with large data sets.",
  },
];
const Testimonials = () => {
  return (
    <section id="testmonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="container testmonials__container"
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
