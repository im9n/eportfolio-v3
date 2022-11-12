import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Testimonial from "./Testimonial";

const Testimonials = () => {
const settings={
    
}
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row">
          <h1 className="testimonials__title">Testimonials</h1>
          <OwlCarousel className="owl-theme" loop items={1} nav center={true} dots={false}>
            <Testimonial
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
              }
              name={'John Doe'}
              details={'Founder, Automotive Affection'}
            />
            <Testimonial
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
              }
              name={'Jane Doe'}
              details={'Founder, Handbag Galore'}
            />
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
