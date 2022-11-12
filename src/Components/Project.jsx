import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = ({
  image,
  title,
  languages,
  description,
  liveLink,
  codeLink,
}) => {
  return (
    <div className="project">
      <figure className="project__img--wrapper">
        <img src={image} alt="" />
      </figure>
      <div className="project__text">
      <h2>{title}</h2>
        <div className="project__languages">
          {languages.map((language) => (
            <p className="project__language">{language}</p>
          ))}
        </div>
        <p className="project__description">{description}</p>
        <div className="project__links">
          <a href={liveLink} className="project__link">
            <LaunchIcon />
            Live
          </a>
          <a href={codeLink} className="project__link">
            <GitHubIcon />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
