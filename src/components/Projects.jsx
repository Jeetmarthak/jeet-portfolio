
import flowerImage from "../assets/flower-project.png";
function Projects() {
  return (
    <section className="projects-section" id="projects">

      <h2>Featured Projects</h2>

      <div className="project-container">

        <div className="project-card">

          <div className="project-image">
            🎬
          </div>

          <h3>Netflix Clone</h3>

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



        <div className="project-card">

          <div className="project-image">
            🌻
          </div>

          <h3>Blooming Flowers Website</h3>

          <p>
            Interactive apology website featuring animated blooming flowers,
            smooth animations and personalized messages.
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



        <div className="project-card">

          <div className="project-image">
            💼
          </div>

         

         
        </div>

      </div>

    </section>
  );
}

export default Projects;