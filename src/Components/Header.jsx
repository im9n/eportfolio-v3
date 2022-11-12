import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

const Header = () => {
  return (
    <div className="header__content">
      <p>Hi, my name is</p>
      <h1>Iman Musa.</h1>
      <h2>Frontend Developer</h2>
      <h4>
        Discover more <a className="font-bold header__about--link" href="#aboutme">about me.</a>
      </h4>
      <ul className="header__links">
        <div className="header__button">
          <a href="">
            <LinkedInIcon />
          </a>
        </div>
        <div className="header__button">
          <a href="">
            <GitHubIcon />
          </a>
        </div>
        <div className="header__button">
          <a href="">
            <DescriptionIcon />
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Header;
