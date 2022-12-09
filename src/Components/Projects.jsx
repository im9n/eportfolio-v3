import React from "react";
import Project from "./Project";
import ProjectImg1 from "../Assets/ProjectImg1.png";
import ProjectImg2 from "../Assets/ProjectImg2.PNG";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row project__row">
          <h1 className="projects__title">Projects</h1>
          <div className="projects__wrapper">
            <Project
              image={ProjectImg1}
              title={"Tesla Clone"}
              languages={["React", "Firebase"]}
              description={
                "This website is a multi-page clone of the official Tesla website I made with the purpose of practising React and Firebase. The website features authentication, CRUD functionality, and was made using React best practises."
              }
              liveLink={"https://tesla-clone-iman.vercel.app/"}
              codeLink={"https://github.com/im9n/tesla-clone"}
            />
            <Project
              image={
                ProjectImg2
              }
              title={"Ticket+"}
              languages={["React", "TMDB API"]}
              description={
                "Ticket+ is a multi-page mock streaming site that uses the TMDB API and Axios to fetch and display details of both movies and TV shows. This websites features searching filtering, advanced pagination and searching."
              }
              liveLink={"https://github.com/im9n"}
              codeLink={"https://github.com/im9n"}
            />
            <Project
              image={
                "https://images.macrumors.com/t/7__j_zA889fYW8Z8qT_7fvks1oQ=/1600x900/smart/article-new/2021/08/apple-store-website.jpg"
              }
              title={"Project Name"}
              languages={["React", "Tailwind", "OMDB API"]}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
              }
              liveLink={"https://github.com/im9n"}
              codeLink={"https://github.com/im9n"}
            />
            <Project
              image={
                "https://images.macrumors.com/t/7__j_zA889fYW8Z8qT_7fvks1oQ=/1600x900/smart/article-new/2021/08/apple-store-website.jpg"
              }
              title={"Project Name"}
              languages={["React", "Tailwind", "OMDB API"]}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
              }
              liveLink={"https://github.com/im9n"}
              codeLink={"https://github.com/im9n"}
            />
            <Project
              image={
                "https://images.macrumors.com/t/7__j_zA889fYW8Z8qT_7fvks1oQ=/1600x900/smart/article-new/2021/08/apple-store-website.jpg"
              }
              title={"Project Name"}
              languages={["React", "Tailwind", "OMDB API"]}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
              }
              liveLink={"https://github.com/im9n"}
              codeLink={"https://github.com/im9n"}
            />
                        <Project
              image={
                "https://images.macrumors.com/t/7__j_zA889fYW8Z8qT_7fvks1oQ=/1600x900/smart/article-new/2021/08/apple-store-website.jpg"
              }
              title={"Project Name"}
              languages={["React", "Tailwind", "OMDB API"]}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
              }
              liveLink={"https://github.com/im9n"}
              codeLink={"https://github.com/im9n"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
