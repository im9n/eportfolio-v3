import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import DescriptionIcon from "@mui/icons-material/Description";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer__container">
        <div className="row footer__row">
          <div className="footer__sections">
            <h4 className="footer__title" >Sections</h4>
            <a className="footer__link" href="#aboutme">About Me</a>
            <a className="footer__link" href="#aboutme">Projects</a>
            <a className="footer__link" href="#aboutme">Testimonials</a>
            <a className="footer__link" href="#aboutme">Contact</a>
          </div>
          <div className="footer__externals">
            <h4 className="footer__title" >External</h4>
            <a className="footer__link" href="https://github.com/im9n" target="_blank">
              Github
            </a>
            <a className="footer__link" href="https://www.linkedin.com/in/iman-musa-3a9181249/" target="_blank">
              LinkedIn
            </a>
          </div>
          <div className="footer__info">
          <h4 className="footer__title" >Information</h4>
            <div className="footer__info--link">
              <LocationOnIcon />
              <p className="footer__link">Melbourne, Australia</p>
            </div>
            <div className="footer__info--link">
              <MailIcon />
              <a className="footer__link" href="mailto:imanmusa2022@gmail.com" target="_blank">
                imanwmusa@gmail.com
              </a>
            </div>
            <div className="footer__info--link">
              <DescriptionIcon />
              <a className="footer__link" href="#" target="_blank">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
