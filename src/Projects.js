import React from "react";
import "./App.css";

function Projects() {
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
          <p className="project-meta">
            C# · SQL · .NET Aspire · Azure
          </p>
          <p className="project-desc">
            Cloud-native C#/.NET Aspire service that exposes company
            fundamentals from FactSet. I worked on endpoint design, SQL
            queries over large datasets, and wired in observability so the
            team can see how the service behaves in production.
          </p>
        </article>

        {/* Excludle */}
        <article className="project-card">
          <div className="project-title-row">
            <h2 className="project-name">Excludle</h2>
            <span className="project-tag">Web Game</span>
          </div>
          <p className="project-meta">
            JavaScript · React · HTML · CSS
          </p>
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
          </div>
        </article>

        {/* Swapify */}
        <article className="project-card">
          <div className="project-title-row">
            <h2 className="project-name">Swapify</h2>
            <span className="project-tag">Marketplace App</span>
          </div>
          <p className="project-meta">
            JavaScript · React · HTML · CSS
          </p>
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
          </div>
        </article>

        {/* Portfolio Website */}
        <article className="project-card">
          <div className="project-title-row">
            <h2 className="project-name">Portfolio Website</h2>
            <span className="project-tag">Frontend Website</span>
          </div>
          <p className="project-meta">
            JavaScript · React · HTML · CSS
          </p>
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
          </div>
        </article>

      </div>
    </div>
  );
}

export default Projects;
