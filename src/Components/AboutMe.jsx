import React from "react";

const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className="container">
        <div className="row aboutme__row">
          <div className="aboutme__left">
            <h1>About Me</h1>
            <p>
              I'm a 16-year-old Australian{" "}
              <span className="textcolor font-bold">frontend developer</span>{" "}
              with over{" "}
              <span className="textcolor font-bold">
                6 months of experience
              </span>{" "}
              developing and debugging{" "}
              <span className="textcolor font-bold">high quality websites</span>{" "}
              and solving difficult frontend problems with the use of{" "}
              <span className="textcolor font-bold">HTML</span>,{" "}
              <span className="textcolor font-bold">CSS</span>,{" "}
              <span className="textcolor font-bold">JavaScript</span> and{" "}
              <span className="textcolor font-bold">React</span>. Being
              self-taught, I have built the ability to quickly grasp new
              concepts and apply them in real world situations. I am currently
              open to new oppurtunities
            </p>
          </div>
          <div className="aboutme__right">
            <h1>My Techstack</h1>
            <div className="aboutme__techstack">
              <figure className="aboutme__language">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                  alt=""
                  className="aboutme__language--img"
                />
                <span className="aboutme__language--text">HTML</span>
              </figure>
              <figure className="aboutme__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                  alt=""
                  className="aboutme__language--img"
                />
                <span className="aboutme__language--text">CSS</span>
              </figure>
              <figure className="aboutme__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                  alt=""
                  className="aboutme__language--img"
                />
                <span className="aboutme__language--text">JavaScript</span>
              </figure>
              <figure className="aboutme__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                  alt=""
                  className="aboutme__language--img"
                />
                <span className="aboutme__language--text">React</span>
              </figure>
              <figure className="aboutme__language">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png"
                  alt=""
                  className="aboutme__language--img"
                />
                <span className="aboutme__language--text">Firebase</span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
