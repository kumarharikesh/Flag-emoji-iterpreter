import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-header">Connect with me</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a
              className="link"
              rel="noreferrer"
              href="https://github.com/kumarharikesh/"
              target="_blank"
            >
              {" "}
              Github{" "}
            </a>
          </li>
          <span style={{ color: "rgba(205, 200, 200, 0.85)" }}>|</span>
          <li className="list-item-inline">
            <a
              className="link"
              rel="noreferrer"
              href="https://www.hackerrank.com/Harikesh_Patel/"
              target="_blank"
            >
              {" "}
              HackerRank{" "}
            </a>
          </li>
          <span style={{ color: "rgba(205, 200, 200, 0.85)" }}>|</span>
          <li className="list-item-inline">
            <a
              className="link"
              rel="noreferrer"
              href="https://twitter.com/Harikes49467657/"
              target="_blank"
            >
              {" "}
              Twitter{" "}
            </a>
          </li>
          <span style={{ color: "rgba(205, 200, 200, 0.85)" }}>|</span>
          <li className="list-item-inline">
            <a
              className="link"
              rel="noreferrer"
              href="https://www.linkedin.com/in/harikesh-patel-357171191/"
              target="_blank"
            >
              {" "}
              Linkedin
            </a>
          </li>
          <span style={{ color: "rgba(205, 200, 200, 0.85)" }}>|</span>
          <li className="list-item-inline">
            <a
              className="link"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100022095913969"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
        <small>© HarryStyle. All rights reserved</small>
      </footer>
    </div>
  );
}
