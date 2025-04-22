import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">
          <i className="fas fa-utensils"></i> Recipe Finder
        </h1>
        <p className="header-subtitle">
          Discover and explore your favorite recipes in no time!
        </p>
        <nav className="header-nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#recipes" className="nav-link">
            Recipes
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;