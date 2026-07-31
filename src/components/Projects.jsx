import FadeIn from "./FadeIn";
import flowerImage from "../assets/flower-project.png";

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <FadeIn>
        <h2>Featured Projects</h2>
      </FadeIn>

      <div className="project-container">

        <FadeIn delay={0}>
          <div className="project-card">

            <div className="project-image">
              🎬
            </div>

            <h3>Netflix Clone (Under Development)</h3>

            <p>
              A responsive Netflix-inspired streaming platform with a modern UI,
              authentication pages, and dynamic layouts.
            </p>

            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>

            <div className="project-buttons">
              <button>GitHub</button>
              <button>Live Demo</button>
            </div>

          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="project-card">

            <div className="project-image">
              🌻
            </div>

            <h3>Blooming Flowers Website</h3>

            <p>
              Interactive apology website featuring animated blooming flowers,
              smooth animations made for fun and to showcase creativity.
            </p>

            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-buttons">
              <button>GitHub</button>
              <button>Live Demo</button>
            </div>

          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="project-card">
            <div className="project-image">
              🔜
            </div>
            <h3>More Projects Coming Soon! </h3>
            <p>
               Stay tuned for updates and new additions to my portfolio.
            </p>

          </div>
        </FadeIn>

      </div>

    </section>
  );
}

export default Projects;