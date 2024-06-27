import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AuthButton from './AuthButton';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/receipts">Receipts</Link>
        </li>
        <li>
          <AuthButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
