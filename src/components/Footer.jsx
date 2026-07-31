import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2 className="footer-logo">
        JM<span>.</span>
      </h2>

      <p className="footer-text">
  Designed & Built by
  <strong> Jeet Marthak</strong>
</p>

      <div className="footer-links">

        <a
          href="https://github.com/Jeetmarthak"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/jeet-marthak-21a851309"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

      <p className="copyright">
        © 2026 Jeet Marthak. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;