import FadeIn from "./FadeIn";

function Education() {
  return (
    <section className="education-section" id="education">

      <FadeIn>
        <h2>Education</h2>
      </FadeIn>

      <FadeIn delay={0}>
        <div className="education-card">

          <h3>Bachelor of Computer Applications (BCA)</h3>

          <h4>JG University, Ahmedabad</h4>

          <p>
            Currently pursuing a Bachelor of Computer Applications with a focus on
            Web Development, Cloud Computing, Networking, and Mobile Application
            Development.
          </p>

        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="education-card">

          <h3>Cybersecurity Training</h3>

          <h4>TOPS Technologies</h4>

          <p>
            Learning Computer Hardware, Networking, Cybersecurity Fundamentals,
            and practical security concepts through hands-on training.
          </p>

        </div>
      </FadeIn>

    </section>
  );
}

export default Education;