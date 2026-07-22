import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" aria-label="Bradley Condon homepage">
          <img
            src="/images/bc-logo.png"
            alt="Bradley Condon — Salesforce Administrator"
            className="navbar-logo-image"
          />
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            HOME
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            ABOUT
          </Link>
        </li>

        <li>
          <Link
            to="/certifications"
            className={
              location.pathname === '/certifications' ? 'active' : ''
            }
          >
            CERTIFICATIONS
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            PROJECTS
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;