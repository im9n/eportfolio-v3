import { WindowSharp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function backToTop(){
    window.scrollTo(0, 0)
  }

  return (
    <div className="App">
     {scrollPosition > 700 && ( 
      <div className="back-to-top" data-aos="fade-in" onClick={() => backToTop()}>
      <KeyboardArrowUpIcon />
      </div>
     )}
      <Landing />
      <AboutMe />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
