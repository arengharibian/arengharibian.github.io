import React, { useState, useEffect } from "react";
import "./App.css";
import Projects from "./Projects";
import Contact from "./Contact";

const EMAIL = "gharibianaren@gmail.com";

function getPageFromHash() {
  const hash = window.location.hash.replace("#", "");
  if (hash === "projects") return "projects";
  if (hash === "contact") return "contact";
  return "home";
}

function App() {
  const [showEmailToast, setShowEmailToast] = useState(false);
  const [copied, setCopied] = useState(false);
  const [page, setPage] = useState(getPageFromHash);

  // ---------- EMAIL HANDLERS ----------
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

  // ---------- SIMPLE NAVIGATION ----------
  function navigateTo(newPage) {
    setPage(newPage);
    if (newPage === "home") {
      window.location.hash = "";
    } else {
      window.location.hash = newPage;
    }
  }

  function goHomeAndScroll(sectionId) {
    navigateTo("home");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      const nav = document.querySelector(".top-nav");
      if (el) {
        const navHeight = nav ? nav.offsetHeight : 0;
        const elTop = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elTop - navHeight, behavior: "smooth" });
      }
    }, 50);
  }

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="page">
      {/* TOP NAV */}
      <div className="top-nav">
        <div className="top-nav-inner">
          <nav className="top-nav-links">
            <button
              type="button"
              className="top-nav-link"
              onClick={() => {
                navigateTo("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </button>

            <button
              type="button"
              className="top-nav-link"
              onClick={() => navigateTo("projects")}
            >
              Projects
            </button>
            <button
              type="button"
              className="top-nav-link"
              onClick={() => goHomeAndScroll("experience")}
            >
              Experience
            </button>
            <button
              type="button"
              className="top-nav-link"
              onClick={() => navigateTo("contact")}
            >
              Contact
            </button>
            <a
              className="top-nav-link"
              href="/Aren-Gharibian-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>
          </nav>
        </div>
      </div>

      <main className="layout">
        {/* ---------- HOME PAGE ---------- */}
        {page === "home" && (
          <>
            <header className="header" id="about">
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
                  Junior Software Engineer
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
                  I am a Junior Software Engineer at Dexian, contracted to
                  Loomis Sayles, and a Syracuse University graduate with a
                  degree in Computer Science. I build C#/.NET workflow
                  platforms and APIs that power client meeting
                  scheduling, calendar management, and investment workflows,
                  with SQL-backed automation running behind the scenes. Before
                  this role, I spent over a year on the same team as a Software
                  Engineering Intern, working on a cloud-native FactSet
                  financial data API. I enjoy working on the backend, solving
                  real problems with clean, reliable code, and learning how
                  technology and markets connect. Outside of work, I like
                  experimenting with side projects, exploring new tools, and
                  continuously improving as a developer.
                </p>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section className="row" id="experience">
              <div className="label">/experience</div>
              <div className="content">
                <div className="job">
                  <p className="job-title">
                    Junior Software Engineer — Dexian (Contracted to Loomis
                    Sayles)
                  </p>
                  <ul>
                    <li>
                      Developed a C#/.NET workflow platform for client meeting
                      scheduling, calendar management, and investment
                      workflows.
                    </li>
                    <li>
                      Built SQL-backed workflow automation to streamline
                      scheduling, task management, and business processes.
                    </li>
                    <li>
                      Implemented scalable application features that improved
                      usability, performance, and operational efficiency.
                    </li>
                    <li>
                      Collaborated in an Agile environment to design, test, and
                      deliver production-ready software.
                    </li>
                  </ul>
                </div>

                <div className="job">
                  <p className="job-title">
                    Software Engineering Intern — Dexian (Contracted to Loomis
                    Sayles)
                  </p>
                  <ul>
                    <li>
                      Developed a cloud-native C#/.NET Aspire API delivering
                      secure access to real-time and historical FactSet
                      financial data.
                    </li>
                    <li>
                      Built Entra-authenticated REST endpoints and optimized
                      SQL queries on Azure for secure, high-performance data
                      retrieval.
                    </li>
                    <li>
                      Collaborated with the CTO using Swagger UI, GitLab, and
                      CI/CD pipelines within an Agile development environment.
                    </li>
                    <li>
                      Prototyped Agentic AI features for automated equity
                      comparisons and custom research insights for investment
                      teams.
                    </li>
                  </ul>
                </div>

                <div className="job">
                  <p className="job-title">
                    ITS Technology Consultant — Syracuse University
                  </p>
                  <ul>
                    <li>
                      Diagnose and troubleshoot hardware and software issues for
                      a large campus community, honing systematic problem-solving
                      and debugging skills.
                    </li>
                    <li>
                      Configure operating systems and software applications to
                      ensure optimal functionality, prioritizing user experience
                      and efficiency.
                    </li>
                    <li>
                      Manage technical inquiries and support tickets, developing
                      prioritization strategies and clear communication skills
                      to resolve issues quickly.
                    </li>
                  </ul>
                </div>

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
                      Lead workshops on diversity, equity, and inclusion to
                      promote intercultural awareness and a welcoming campus
                      culture.
                    </li>
                    <li>
                      Assist faculty in delivering interactive, student-centered
                      learning experiences that support the college transition.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FEATURED PROJECTS ON HOME */}
            <section className="row" id="featured-projects">
              <div className="label">/featured-projects</div>
              <div className="content">
                <p>
                  <strong>FactSet Fundamentals API</strong> — At Dexian
                  (contracted to Loomis Sayles), I helped build a scalable,
                  cloud-native API in C#/.NET Aspire to expose FactSet financial
                  data. I worked on Entra-authenticated endpoint design,
                  optimized SQL queries for large datasets on Azure, and wiring
                  in observability so the team can actually see how the
                  service behaves in production.
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
                  — A web word-guessing game where players must identify a
                  target word while navigating a dynamic set of banned related
                  terms. I implemented the game logic and UI using JavaScript,
                  HTML, and CSS, focusing on clean interactions, difficulty
                  scaling, and accessibility on mobile and desktop.
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
                  new. I used a modern React frontend with a clean minimal UI
                  and a simple backend to handle listings and messages between
                  students.
                </p>
              </div>
            </section>

            {/* CONTACT SECTION ON HOME (you can keep or remove later) */}
            <section className="row" id="contact">
              <div className="label">/contact</div>
              <div className="content">
                <p>
                  I’m interested in software engineering roles where I can work
                  on real products, backend systems, or developer tools. The
                  best way to reach me is by email or LinkedIn.
                </p>
                <p className="signature">— Aren</p>
              </div>
            </section>
          </>
        )}

        {/* PROJECTS PAGE */}
        {page === "projects" && <Projects />}

        {/* CONTACT PAGE */}
        {page === "contact" && <Contact email={EMAIL} />}
      </main>
    </div>
  );
}

export default App;