import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Event<span className="text-gradient">Vibe</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className={`nav-link ${isActive('/events')}`} onClick={closeMenu}>Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <Link to="/login" className="btn btn-outline" onClick={closeMenu}>
            <FiUser /> Login
          </Link>
          <Link to="/register" className="btn btn-primary" onClick={closeMenu}>
            Register
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="nav-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass-panel animate-fade-in">
          <ul className="mobile-nav-menu">
            <li className="mobile-nav-item">
              <Link to="/" className={`mobile-nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/events" className={`mobile-nav-link ${isActive('/events')}`} onClick={closeMenu}>Events</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/contact" className={`mobile-nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/login" className="mobile-nav-link" onClick={closeMenu}>Login</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/register" className="mobile-nav-link text-gradient" onClick={closeMenu}>Register</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
