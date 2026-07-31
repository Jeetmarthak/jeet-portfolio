import FadeIn from "./FadeIn";

function About() {
  return (
        <FadeIn>

    <section className="about-section" id="about">

      <h2>About Me</h2>

        <p>
            <li>
                A Bachelor Of Computer Applications student at JG University with a primary focus on
                Cybersecurity. Currently pursuing
                professional Cybersecurity training at TOPS Technologies, I'm building
                practical expertise in computer hardware, networking, system security,
                and ethical security practices. 
                </li>
        </p>

      <p>
        <li>
        Alongside my cybersecurity journey, I develop modern web applications
        using React, JavaScript, HTML, CSS, and Node.js while now
        learning cloud computing and mobile application development.
        </li>
      </p>

      <p>
        <li>
        My goal is to become a Full Stack Developer with strong cybersecurity
        expertise, capable of building secure, scalable, and modern
        applications that solve real-world problems.
        </li>
      </p>


    </section>
     </FadeIn>
  );
}

export default About;