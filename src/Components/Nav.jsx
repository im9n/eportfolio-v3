import React from "react";
import Logo from "../Assets/logo_iman_2.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";


const Nav = () => {
  function modalOpen() {
    document.querySelector(".nav__modal").classList += " open";
    document.querySelector(".nav__modal").classList.remove("close");
  }

  function modalClose() {
    document.querySelector(".nav__modal").classList += " close";
    document.querySelector(".nav__modal").classList.remove("open");
  }

  return (
    <>
      <div className="nav__modal">
        <CloseIcon onClick={() => modalClose()} />
        <a onClick={() => modalClose()} href="#aboutme">
          About Me
        </a>
        <a onClick={() => modalClose()} href="#projects">
          Projects
        </a>
        <a onClick={() => modalClose()} href="#testimonials">
          Testimonials
        </a>
        <a onClick={() => modalClose()} href="#contact">
          <button className="nav__modal--button">
            <p>Contact</p>
          </button>
        </a>
        <ul className="modal__links">
          <div className="modal__button">
            <a href="">
              <LinkedInIcon />
            </a>
          </div>
          <div className="modal__button">
            <a href="">
              <GitHubIcon />
            </a>
          </div>
          <div className="modal__button">
            <a href="">
              <DescriptionIcon />
            </a>
          </div>
        </ul>
      </div>
      <nav>
        <div className="nav__content">
          <div className="nav__left">
            <figure className="nav__logo--wrapper">
              <img src={Logo} alt="" />
            </figure>
          </div>
          <div className="nav__right">
            <ul className="nav__links">
              <a className="nav__link" href="#aboutme">
                About
              </a>
              <a className="nav__link" href="#projects">
                Projects
              </a>
              <a className="nav__link" href="#testimonials">
                Testimonials
              </a>
              <button>
                <a className="nav__link" href="#contact">
                  Contact
                </a>
              </button>
            </ul>
            <MenuIcon onClick={() => modalOpen()} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
