import { TypeAnimation } from "react-type-animation";
import Terminal from "./Terminal";

function Hero() {
 return (
  <section className="hero">

    <div className="left">


      <p className="terminal">{" > whoami"}</p>

      <h1>
        Jeet <span>Marthak</span>
      </h1>

      <TypeAnimation
        sequence={[
          "Cybersecurity Trainee @TOPS Technologies",
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
        Passionate about Cybersecurity, Networking, Secure Software Development, and modern Web Technologies. I enjoy building secure and user-friendly applications while continuously expanding my technical knowledge
      </p>

      <div className="buttons">

        <button className="primary">
          Download Resume
        </button>

        <button className="secondary">
          View Projects
        </button>

      </div>

    </div>

    <div className="right">

      <Terminal />

    </div>

  </section>
);
}

export default Hero;