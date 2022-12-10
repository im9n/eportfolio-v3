import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Project.css";

const Project = ({
  images,
  title,
  languages,
  description,
  liveLink,
  codeLink,
}) => {
  const settings = {
    loop: true,
    items: 1,
    nav: true,
    dots: false,
  };

  return (
    <div className="project">
      <OwlCarousel className="owl-theme owl-project" {...settings}>
        {images.map((image, index) => (
          <figure className="project__img--wrapper" key={index}>
            <img src={image} alt="" />
          </figure>
        ))}
      </OwlCarousel>
      <div className="project__text">
        <h2>{title}</h2>
        <div className="project__languages">
          {languages.map((language, index) => (
            <p className="project__language" key={index}>{language}</p>
          ))}
        </div>
        <p className="project__description">{description}</p>
        <div className="project__links">
          <a href={liveLink} target="_blank" className="project__link">
            <LaunchIcon />
            Live
          </a>
          <a href={codeLink} target="_blank" className="project__link">
            <GitHubIcon />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
