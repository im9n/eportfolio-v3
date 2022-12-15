import React from "react";
import Project from "./Project";
import TeslaImg1 from "../Assets/TeslaImg1.png";
import TeslaImg2 from "../Assets/TeslaImg2.PNG";
import TeslaImg3 from "../Assets/TeslaImg3.PNG";
import TeslaImg4 from "../Assets/TeslaImg4.PNG";
import TeslaImg5 from "../Assets/TeslaImg5.PNG";
import MovieImg1 from "../Assets/MovieImg1.PNG";
import MovieImg2 from "../Assets/MovieImg2.PNG";
import MovieImg3 from "../Assets/MovieImg3.PNG";
import MovieImg4 from "../Assets/MovieImg4.PNG";
import MovieImg5 from "../Assets/MovieImg5.PNG";
import AutoImg1 from "../Assets/AutoImg1.PNG";
import AutoImg2 from "../Assets/AutoImg2.PNG";
import AutoImg3 from "../Assets/AutoImg3.PNG";

const Projects = React.memo(() => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row project__row">
          <h1 className="projects__title">Projects</h1>
          <div className="projects__wrapper">
          <Project
              images={[AutoImg1, AutoImg2, AutoImg3]}
              title={"Automotive Affection"}
              languages={["React", "EmailJS"]}
              description={
                "Automotive Affection is a fully-functional website I developed for an Australian car detailing company using React. The site features a completely responsive design, as well as online appointment booking."
              }
              liveLink={"https://automotive-affection.vercel.app/"}
            />
            <Project
              images={[TeslaImg1, TeslaImg2, TeslaImg3, TeslaImg4, TeslaImg5]}
              title={"Tesla Clone"}
              languages={["React", "Firebase"]}
              description={
                "This website is a multi-page clone of the official Tesla website I made with the purpose of practising React and Firebase. The website features authentication, CRUD functionality, and was made using React best practises."
              }
              liveLink={"https://tesla-clone-iman.vercel.app/"}
              codeLink={"https://github.com/im9n/tesla-clone"}
            />
            <Project
              images={[MovieImg1, MovieImg2, MovieImg3, MovieImg4, MovieImg5]}
              title={"Ticket+"}
              languages={["React", "TMDB API"]}
              description={
                "Ticket+ is a multi-page mock streaming site that dynamically displays details of both movies and TV shows with the use of the TMDB API and Axios. This websites features filtering, advanced pagination and searching."
              }
              liveLink={"https://ticketplus-react.vercel.app/"}
              codeLink={"https://github.com/im9n/ticketplus-react-v3"}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default React.memo(Projects);
