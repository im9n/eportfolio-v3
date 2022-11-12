import React from "react";
import Nav from "./Nav";
import Header from "./Header"
import Background from '../Assets/header-bg.jfif'

const Landing = () => {
  return (
    <section id="landing">
      <figure className="landing__bg--wrapper">
        <img src={Background} alt="" className="landing__bg" />
      </figure>
      <Nav />
      <Header />
    </section>
  );
};

export default Landing;
