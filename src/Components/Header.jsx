import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import Resume from '../Assets/resume.pdf'

const Header = () => {
  return (
    <div className="header__content">
      <p>Hi, my name is</p>
      <h1>Iman Musa.</h1>
      <h2>Freelance Frontend Developer</h2>
      <h4>
        Discover more <a className="font-bold header__about--link" href="#aboutme">about me.</a>
      </h4>
      <ul className="header__links">
        <div className="header__button" >
          <a target="_blank" href="https://www.linkedin.com/in/iman-musa-3a9181249/">
            <LinkedInIcon />
          </a>
        </div>
        <div className="header__button">
          <a target="_blank" href="https://github.com/im9n">
            <GitHubIcon />
          </a>
        </div>
        <div className="header__button">
          <a target="_blank" href={Resume}>
            <DescriptionIcon />
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Header;
