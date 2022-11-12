import "./App.css";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <div className="fixed__links">
        <a className="fixed__link" href="#aboutme">
          About
        </a>
        <a className="fixed__link" href="#projects">
          Projects
        </a>
        <a className="fixed__link" href="#testimonials">
          Testimonials
        </a>
        <a className="fixed__link" href="#contact">
          Contact
        </a>
      </div>
      <Landing />
      <AboutMe />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
