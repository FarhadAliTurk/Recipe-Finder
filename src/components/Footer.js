import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-title">Connect with Me!</p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61551771230717&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://linkedin.com/in/farhad-ali-turk-135369305"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/FarhadAliTurk"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:369farhadali@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon email"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Farhad Ali Turk. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;