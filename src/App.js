import React from "react";
import "./App.css";

function App() {
  return (
    <div className="page">
      <main className="layout">
        {/* HEADER */}
        <header className="header">
          <img
            src="/aren-avatar1.png" // white background avatar in public/
            alt="Aren Gharibian"
            className="avatar"
          />
          <div className="headline">
            <h1>Aren Gharibian</h1>
            <p className="subtitle">
              Software Engineer & Computer Science Student
            </p>
          </div>
        </header>

        {/* ABOUT */}
        <section className="row">
          <div className="label">/about</div>
          <div className="content">
            <p>
              I’m a senior Computer Science student at Syracuse University who
              likes building simple, fast products that feel good to use. I’m
              comfortable working across the stack—from React frontends to .NET
              and Python backends—and I care a lot about clean code,
              maintainable systems, and thoughtful UX.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="row">
          <div className="label">/projects</div>
          <div className="content">
            <p>
              I’m currently building <strong>GourmAI</strong>, a cooking and
              recipe subscription platform focused on user-generated content and
              subscription analytics.
            </p>
            <p>
              I also created <strong>Synonymle</strong>, a Wordle-style game
              that uses synonyms instead of letters, with a React frontend and
              Python backend (
              <a
                href="https://github.com/arengharibian/Synonymle"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              ).
            </p>
            <p>
              During my internship, I worked on a{" "}
              <strong>FactSet Fundamentals API</strong> built with .NET Aspire,
              integrating FactSet data with SQL and modern telemetry.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
<section className="row">
  <div className="label">/experience</div>
  <div className="content">

    {/* Nim-os / Loomis Sayles */}
    <div className="job">
      <p className="job-title">
        Software Engineering Intern — Nim-os (Loomis Sayles)
      </p>
      <ul>
        <li>Work directly under the CTO to build a scalable C# API for delivering structured financial company data.</li>
        <li>Write and optimize SQL queries for efficient data extraction and aggregation from large datasets.</li>
        <li>Use Swagger UI and GitLab for API documentation, version control, and CI/CD in an Agile environment.</li>
      </ul>
    </div>

    {/* ITS Tech Consultant */}
    <div className="job">
      <p className="job-title">
        ITS Technology Consultant — Syracuse University
      </p>
      <ul>
        <li>Diagnose and troubleshoot hardware and software issues for a large campus community, honing systematic problem-solving and debugging skills.</li>
        <li>Configure operating systems and software applications to ensure optimal functionality, prioritizing user experience and efficiency.</li>
        <li>Manage technical inquiries and support tickets, developing prioritization strategies and clear communication skills to resolve issues quickly.</li>
      </ul>
    </div>

    {/* FYS Teaching Assistant */}
    <div className="job">
      <p className="job-title">
        Teaching Assistant — First Year Seminar, Syracuse University
      </p>
      <ul>
        <li>Facilitate discussions on university resources, academic programs, and student success strategies for first-year students.</li>
        <li>Lead workshops on diversity, equity, and inclusion to promote intercultural awareness and a welcoming campus culture.</li>
        <li>Assist faculty in delivering interactive, student-centered learning experiences that support the college transition.</li>
      </ul>
    </div>

  </div>
</section>

        {/* CONTACT */}
        <section className="row">
          <div className="label">/contact</div>
          <div className="content">
            <p>
              I’m interested in software engineering internships and entry-level
              roles where I can work on real products, backend systems, or
              developer tools. The best way to reach me is by email or
              LinkedIn.
            </p>
            <p className="signature">— Aren</p>
          </div>
        </section>

        {/* BUTTONS */}
        <div className="buttons">
          <a
            className="btn primary"
            href="/Aren-Gharibian-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
          <a className="btn" href="mailto:arengharibian@gmail.com">
            Email ↗
          </a>
          <a
            className="btn"
            href="https://github.com/arengharibian"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/aren-gharibian/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
