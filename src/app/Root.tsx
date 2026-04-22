import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import "./App.css";

export default function Root() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () =>
      document.removeEventListener(
        "mousemove",
        handleMouseMove,
      );
  }, []);

  return (
    <div className="app-root">
      {/* Custom cursor */}
      <div
        className="cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />

      {/* MASTHEAD */}
      <header className="masthead">
        <Link to="/" className="masthead-logo">
          <strong>AgentWatch</strong> / Privacy Evaluation
          Framework
        </Link>
        <ul className="masthead-nav">
          <li>
            <NavLink
              to="/framework"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Framework
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contribute"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Contribute
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Research
            </NavLink>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScUNDc3vSb5R3P8Pbq_jAVfMPkGoE6xmZZk2a_5lkWcBJg-uA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="masthead-issue">
          <div>UC Berkeley — MICS Capstone</div>
          <div>April 2026</div>
        </div>
      </header>

      {/* Page Content */}
      <Outlet />

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-left">
          AgentWatch / UC Berkeley MICS Capstone · 2026
          <br />
          <span style={{ opacity: 0.5 }}>
            Research for the public interest.
          </span>
        </div>
        <div className="footer-right">
          <Link
            to="https://github.com/berkeley-team-best/agent-testing"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            to="/research"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Research Paper
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScUNDc3vSb5R3P8Pbq_jAVfMPkGoE6xmZZk2a_5lkWcBJg-uA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}