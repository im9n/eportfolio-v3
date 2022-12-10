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

const Projects = React.memo(() => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row project__row">
          <h1 className="projects__title">Projects</h1>
          <div className="projects__wrapper">
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
              codeLink={"https://github.com/im9n"}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default React.memo(Projects);
