import React, { useState, useEffect } from "react";
import "./App.css";

const EMAIL = "gharibianaren@gmail.com";

function App() {
  const [showEmailToast, setShowEmailToast] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleEmailClick() {
    setShowEmailToast(true);
    setCopied(false);
  }

  function handleCopyEmail() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).catch(() => {});
    }
    setCopied(true);
  }

  useEffect(() => {
    if (!showEmailToast) return;

    const timer = setTimeout(() => {
      setShowEmailToast(false);
      setCopied(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showEmailToast]);

  return (
    <div className="page">
      <main className="layout">
        {/* HEADER – avatar left on desktop, stacked on mobile */}
        <header className="header">
          <div className="avatar-shell">
            <img
              src="/aren-avatar1.png"
              alt="Aren Gharibian"
              className="avatar"
            />
          </div>

          <div className="text-block">
            <h1 className="name">Aren Gharibian</h1>
            <p className="subtitle">
              Software Engineer &amp; Computer Science Student
            </p>

            <div className="header-buttons">
              <a
                className="btn primary"
                href="/Aren-Gharibian-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume ↗
              </a>

              {/* Email button + inline toast */}
              <div className="email-btn-wrapper">
                <button
                  type="button"
                  className="btn"
                  onClick={handleEmailClick}
                >
                  Email ↗
                </button>

                {showEmailToast && (
                  <div className="email-toast">
                    <span className="email-text">
                      {copied ? "Copied!" : EMAIL}
                    </span>
                    <button
                      type="button"
                      className="copy-btn"
                      onClick={handleCopyEmail}
                      aria-label="Copy email"
                    >
                      {copied ? "✓" : "⧉"}
                    </button>
                  </div>
                )}
              </div>

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
          </div>
        </header>

        {/* ABOUT */}
        <section className="row">
          <div className="label">/about</div>
          <div className="content">
            <p>
              I am a senior Computer Science student at Syracuse University
              with a strong interest in software engineering and finance. This
              past year, I have been working as a Software Engineering Intern at
              Nim-os, where I build C#/.NET APIs that integrate with FactSet
              financial data and Azure services. I enjoy working on the backend,
              solving real problems with clean, reliable code, and learning how
              technology and markets connect. Outside of class and work, I like
              experimenting with side projects, exploring new tools, and
              continuously improving as a developer.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="row">
          <div className="label">/projects</div>
          <div className="content">
            <p>
              <strong>FactSet Fundamentals API</strong> — At Nim-os, I helped
              build a scalable API in C#/.NET Aspire to expose company
              fundamentals from FactSet. I worked on endpoint design, SQL
              queries for large datasets, and wiring in observability so the
              team can actually see how the service behaves in production.
            </p>
            <p>
              <strong>
                <a
                  href="https://github.com/unown-games/excludle"
                  target="_blank"
                  rel="noreferrer"
                >
                  Excludle
                </a>
              </strong>{" "}
              — A web word-guessing game where players must identify a target
              word while navigating a dynamic set of banned related terms. I
              implemented the game logic and UI using JavaScript, HTML, and CSS,
              focusing on clean interactions, difficulty scaling, and
              accessibility on mobile and desktop.
            </p>
            <p>
              <strong>
                <a
                  href="https://github.com/arengharibian/swapify"
                  target="_blank"
                  rel="noreferrer"
                >
                  Swapify
                </a>
              </strong>{" "}
              — A small web app I built to make it easy for students to swap
              items, textbooks, and small goods instead of buying everything
              new. I used a modern React frontend with a clean minimal UI and a
              simple backend to handle listings and messages between students.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="row">
          <div className="label">/experience</div>
          <div className="content">
            {/* Nim-os */}
            <div className="job">
              <p className="job-title">
                Software Engineering Intern — Nim-os (Loomis Sayles)
              </p>
              <ul>
                <li>
                  Work directly under the CTO to build a scalable C# API for
                  delivering structured financial company data.
                </li>
                <li>
                  Write and optimize SQL queries for efficient data extraction
                  and aggregation from large datasets.
                </li>
                <li>
                  Use Swagger UI and GitLab for API documentation, version
                  control, and CI/CD in an Agile environment.
                </li>
              </ul>
            </div>

            {/* ITS */}
            <div className="job">
              <p className="job-title">
                ITS Technology Consultant — Syracuse University
              </p>
              <ul>
                <li>
                  Diagnose and troubleshoot hardware and software issues for a
                  large campus community, honing systematic problem-solving and
                  debugging skills.
                </li>
                <li>
                  Configure operating systems and software applications to
                  ensure optimal functionality, prioritizing user experience and
                  efficiency.
                </li>
                <li>
                  Manage technical inquiries and support tickets, developing
                  prioritization strategies and clear communication skills to
                  resolve issues quickly.
                </li>
              </ul>
            </div>

            {/* TA */}
            <div className="job">
              <p className="job-title">
                Teaching Assistant — First Year Seminar, Syracuse University
              </p>
              <ul>
                <li>
                  Facilitate discussions on university resources, academic
                  programs, and student success strategies for first-year
                  students.
                </li>
                <li>
                  Lead workshops on diversity, equity, and inclusion to promote
                  intercultural awareness and a welcoming campus culture.
                </li>
                <li>
                  Assist faculty in delivering interactive, student-centered
                  learning experiences that support the college transition.
                </li>
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
      </main>
    </div>
  );
}

export default App;
