import { TypeAnimation } from "react-type-animation";
import resume from "../assets/Jeetresume.pdf";
import Terminal from "./Terminal";
import { FaDownload, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";



function Hero() {
 return (
<motion.section
  className="hero"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

    <motion.div
  className="left"
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>


     <p className="hero-greeting"> Hello, I'm</p>

<h1 className="hero-name">
  Jeet Marthak
</h1>

      <TypeAnimation
        sequence={[
          "Cybersecurity Trainee",
          2000,
          "Aspiring Full Stack Developer",
          2000,
          "BCA Student | JG University",
          2000,
        ]}
        wrapper="h2"
        speed={50}
        repeat={Infinity}
      />

      <p className="about">
       Passionate about Cybersecurity, Networking, Cloud Computing, and modern Web Technologies.
      Currently pursuing a BCA at JG University while building practical CyberSecurity skills at TOPS Technologies.
      </p>
<div className="buttons">

  <a
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
    className="primary"
  >
    <FaDownload />
    <span>View Resume</span>
  </a>

  <a
    href="#projects"
    className="secondary"
  >
    <FaRocket />
    <span>View Projects</span>
  </a>

</div>

</motion.div>
<motion.div
  className="right"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
<Terminal />
</motion.div>
  </motion.section>
);
}

export default Hero;