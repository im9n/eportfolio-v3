import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Testimonial from "./Testimonial";
import "./Testimonials.css";

const Testimonials = React.memo(() => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row testimonial__row">
          <h1 className="testimonials__title">Testimonials</h1>
          <OwlCarousel
            className="owl-testimonial"
            loop
            items={1}
            nav
            center={true}
            dots={false}
          >
            <Testimonial
              description={
                "Iman is a very skilled web developer, as well as very easy to work & collaberate with. He went above and beyond to ensure I was up to date and understood the development process, and I will definetely be working with him again."
              }
              name={"Matt Mangali"}
              details={"Founder, Automotive Affection"}
            />
            <Testimonial
              description={
                "Iman is a very skilled web developer, as well as very easy to work & collaberate with. He went above and beyond to ensure I was up to date and understood the development process, and I will definetely be working with him again."
              }
              name={"Matt Mangali"}
              details={"Founder, Automotive Affection"}
            />
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
});

export default React.memo(Testimonials);
