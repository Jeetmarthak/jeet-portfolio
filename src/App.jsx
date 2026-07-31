import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Background from "./components/Background";
import Footer from "./components/Footer";
import particlesBackground from "./components/particlesBackground";
function App() {

  return (

    <>
      
        <Navbar />
        <particlesBackground />
  <Hero />

  <About />

  <Skills />

  <Projects />

  <Education />

  <Contact />

  <Footer />

    </>

  )

}

export default App