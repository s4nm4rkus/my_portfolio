import { useState } from "react";
import "./home.nav.css";
import mylogo from "../../assets/logo/my-logo.svg";

function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img src={mylogo} alt="Logo" className="mylogo" />
      </div>

      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a
            href="#contact"
            className="contact-btn"
            style={{
              color: hovered ? "white" : "white",
              fontWeight: hovered ? "200" : "200",
              transform: hovered ? "scale(1.03)" : "scale(1)",
              boxShadow: hovered
                ? "0 4px 12px rgba(138, 0, 0, 0.47)"
                : "0 2px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HomeNav;
