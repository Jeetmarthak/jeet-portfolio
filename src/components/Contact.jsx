import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import FadeIn from "./FadeIn";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <FadeIn>
        <h2>Get In Touch</h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="contact-text">
          I am always open to internships, collaborations, and exciting projects.
          Feel free to connect with me!
        </p>
      </FadeIn>

      <div className="contact-cards">

        <FadeIn delay={0.2}>
          <a
            href="mailto:marthakjeet07@gmail.com"
            className="contact-card"
          >
            <FaEnvelope className="contact-icon" />

            <h3>Email</h3>

            <p>marthakjeet07@gmail.com</p>
          </a>
        </FadeIn>

        <FadeIn delay={0.35}>
          <a
            href="https://www.linkedin.com/in/jeet-marthak-21a851309"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="contact-icon" />

            <h3>LinkedIn</h3>

            <p>View Profile →</p>
          </a>
        </FadeIn>

        <FadeIn delay={0.5}>
          <a
            href="https://github.com/Jeetmarthak"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub className="contact-icon" />

            <h3>GitHub</h3>

            <p>View Repositories →</p>
          </a>
        </FadeIn>

      </div>

    </section>
  );
}

export default Contact;