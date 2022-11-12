import React from "react";
import StarIcon from '@mui/icons-material/Star';

const Testimonial = ({description, name, details}) => {
  return (
    <div className="testimonial">
      <p className="testimonial__para">
        "{description}"
      </p>
      <div className="testimonial__details">
      <h4 className="testimonial__name">{name}</h4>
      <p className="testimonial__company">{details}</p>
      <div className="testimonial__ratings">
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
      </div>
      </div>
    </div>
  );
};

export default Testimonial;
