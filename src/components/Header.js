// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
    <nav id="topnav">
        {/* Navbar links */}
        <div className="nav-links">
        <ul className="navbar-links">
            {/* Link "Shop" */}
            <li className="nav-item">
            <Link to="/" className="active">
                Shop
            </Link>
            </li>
              {/* Link "About" */}
            <li className="nav-item">
            <Link to="/about" className="active">
                About
            </Link>
            </li>

            {/* Link "Form" */}
            <li className="nav-item">
            <Link to="/form" className="active">
                Contact
            </Link>
            </li>
        </ul>
        </div>
    </nav>
    );
};

export default Header;
