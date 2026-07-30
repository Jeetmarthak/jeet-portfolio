function Terminal() {
  return (
    <div className="terminal-card">

      <div className="terminal-top">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>

      <div className="terminal-body">

        <p>{"> whoami"}</p>

        <br />

        <p><span>Name :</span> Jeet Marthak</p>

        <p><span>Role :</span> Cybersecurity Trainee</p>

        <p><span>Training :</span> TOPS Technologies</p>

        <p><span>Education :</span> Pursuing Bachelor of Computer Applications</p>

        <p><span>University :</span> JG University</p>


      </div>

    </div>
  );
}

export default Terminal;