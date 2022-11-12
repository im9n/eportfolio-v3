import React from "react";
import Logo from '../Assets/logo_iman_2.png'

const Nav = () => {
  return (
    <nav>
      <div className="nav__content">
        <div className="nav__left">
            <figure className="nav__logo--wrapper">
                <img src={Logo} alt=""/>
            </figure>
        </div>
        <div className="nav__right">
            <ul className="nav__links">
                <a className="nav__link" href="#aboutme">About</a>
                <a className="nav__link" href="#projects">Projects</a>
                <a className="nav__link" href="#testimonials">Testimonials</a>
                <button>
                <a className="nav__link" href="#contact">Contact</a>
                </button>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
