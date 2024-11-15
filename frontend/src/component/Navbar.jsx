import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/src/assets/logolist.jpg" alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-links">
        <Link to="/explore"><a href="#" className="navbar-link">Explore</a></Link>
        <Link to="/about"><a href="#" className="navbar-link">About</a></Link>
        <Link to="/todolist"><a href="#" className="navbar-link">TodoList</a></Link>
      </div>
      <div className="navbar-actions">
        <Link to="/sign"><a href="#" className="action-link">Sign Up</a></Link>
      </div>
    </nav>
  );
};

export default Navbar;