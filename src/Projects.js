import React, { useState } from "react";
import "./App.css";

function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  function openVideo(title, url) {
    setActiveVideo({ title, url });
  }

  function closeVideo() {
    setActiveVideo(null);
  }

  return (
    <div className="projects-page">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-intro">
        A few things I’ve built and worked on recently, from backend APIs
        to small web apps and games.
      </p>

      <div className="projects-grid">
        {/* FactSet Fundamentals API */}
        <article className="project-card">
          <div className="project-title-row">
            <h2 className="project-name">FactSet Fundamentals API</h2>
            <span className="project-tag">Backend API</span>
          </div>
          <p className="project-meta">C# · SQL · .NET Aspire · Azure</p>
          <p className="project-desc">
            Cloud-native C#/.NET Aspire service that exposes company
            fundamentals from FactSet. I worked on endpoint design, SQL
            queries over large datasets, and wired in observability so the
            team can see how the service behaves in production.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/arengharibian/"
              target="_blank"
              rel="noreferrer"
            >
            </a>
            <button
              type="button"
              className="video-link-btn"
              onClick={() =>
                openVideo(
                  "FactSet Fundamentals API Demo",
                  "https://www.youtube.com/embed/VIDEO_ID_FACTSET"
                )
              }
            >
            </button>
          </div>
        </article>

        {/* Excludle */}
        <article className="project-card">
          <div className="project-title-row">
            <h2 className="project-name">Excludle</h2>
            <span className="project-tag">Web Game</span>
          </div>
          <p className="project-meta">JavaScript · React · HTML · CSS</p>
          <p className="project-desc">
            A logic-based word guessing game where players try to find
            a target word while navigating an evolving list of banned
            related terms. Designed around simplicity, difficulty scaling,
            and mobile-first accessibility.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/unown-games/excludle"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <button
              type="button"
              className="video-link-btn"
              onClick={() =>
                openVideo(
                  "Excludle Demo",
                  "https://excludle.com"
                )
              }
            >
              Demo ↗
            </button>
          </div>
        </article>

        {/* Swapify */}
        <article className="project-card">
          <div className="project-title-row">
            <h2 className="project-name">Swapify</h2>
            <span className="project-tag">Marketplace App</span>
          </div>
          <p className="project-meta">JavaScript · React · HTML · CSS</p>
          <p className="project-desc">
            A student-to-student marketplace for trading textbooks and
            small goods instead of buying everything new. Minimal React UI,
            category-based listings, and a lightweight backend for persistence
            and user interactions.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/arengharibian/swapify"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <button
              type="button"
              className="video-link-btn"
              onClick={() =>
                openVideo(
                  "Swapify Demo",
                  "https://www.youtube.com/embed/VIDEO_ID_SWAPIFY"
                )
              }
            >

            </button>
          </div>
        </article>

        {/* Portfolio Website */}
        <article className="project-card">
          <div className="project-title-row">
            <h2 className="project-name">Portfolio Website</h2>
            <span className="project-tag">Frontend Website</span>
          </div>
          <p className="project-meta">JavaScript · React · HTML · CSS</p>
          <p className="project-desc">
            The Apple-inspired portfolio you’re viewing right now. Built with
            React, featuring a sticky nav bar, smooth scroll, responsive layout,
            and inline email copy interaction for clean usability.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/arengharibian/arengharibian.github.io"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <button
              type="button"
              className="video-link-btn"
              onClick={() =>
                openVideo(
                  "Portfolio Walkthrough",
                  "https://www.youtube.com/embed/VIDEO_ID_PORTFOLIO"
                )
              }
            >
            </button>
          </div>
        </article>

        {/* Algorithm & Data Structure Visualizer */}
        <article className="project-card">
          <div className="project-title-row">
            <h2 className="project-name">
              Algorithm &amp; Data Structure Visualizer
            </h2>
            <span className="project-tag">Python GUI</span>
          </div>
          <p className="project-meta">Python · Algorithms · Visualization</p>
          <p className="project-desc">
            A desktop tool for visualizing classic sorting algorithms and
            data structures in real time. Includes interactive controls for
            dataset size, animation speed, and algorithm selection, with
            step-by-step highlighting to teach how comparisons and operations
            evolve during execution.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/arengharibian/Algorithm-Data-Structure-Visualizer"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <button
              type="button"
              className="video-link-btn"
              onClick={() =>
                openVideo(
                  "Visualizer Demo",
                  "https://www.youtube.com/embed/xTWjw-aXXKU?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0"
                )
              }
            >
              Video ↗
            </button>
          </div>
        </article>

        {/* terminal-gpt */}
        <article className="project-card">
          <div className="project-title-row">
            <h2 className="project-name">terminal-gpt</h2>
            <span className="project-tag">Local AI Terminal</span>
          </div>
          <p className="project-meta">
            Python · FastAPI · Ollama · HTML · CSS · JavaScript
          </p>
          <p className="project-desc">
            A local-first AI assistant that looks and feels like a vintage
            green-on-black terminal. The backend talks to a local Ollama
            model, and the frontend renders a fake shell with a blinking
            cursor, letting me chat with an LLM from a browser window
            without any external API keys.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/arengharibian/terminal-gpt"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <button
              type="button"
              className="video-link-btn"
              onClick={() =>
                openVideo(
                  "terminal-gpt Demo",
                  "https://www.youtube.com/embed/pyj47UkOGlE?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0"
                )
              }
            >
              Video ↗
            </button>
          </div>
        </article>

        {/* TriviaTrail */}
        <article className="project-card">
          <div className="project-title-row">
            <h2 className="project-name">TriviaTrail</h2>
            <span className="project-tag">Mobile Game</span>
          </div>
          <p className="project-meta">Dart · Flutter · SQLite · Google Maps</p>
          <p className="project-desc">
            A location-aware trivia game built in Flutter as a final course
            project. Players log in, progress through a trail of themed levels,
            and answer multiple-choice questions with animated transitions,
            sound effects, and score tracking persisted locally with SQLite.
            Some levels are tied to real-world locations using GPS and a
            mini trail map view.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/arengharibian/triviatrail"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <button
              type="button"
              className="video-link-btn"
              onClick={() =>
                openVideo(
                  "TriviaTrail Demo",
                  "https://www.youtube.com/embed/VIDEO_ID_TRIVIATRAIL"
                )
              }
            >
              Video ↗
            </button>
          </div>
        </article>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="video-overlay" onClick={closeVideo}>
          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="video-modal-header">
              <span className="video-modal-title">{activeVideo.title}</span>
              <button
                type="button"
                className="video-modal-close"
                onClick={closeVideo}
                aria-label="Close video"
              >
                ✕
              </button>
            </div>
            <div className="video-modal-body">
              <div className="video-responsive">
                <iframe
                  src={activeVideo.url}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
