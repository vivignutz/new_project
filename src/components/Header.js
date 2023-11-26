// Header.js
import React from 'react';

function Header() {
    return (
        <nav id="topnav">
            
        {/* Navbar links */}
        <div className="nav-links">
            <ul className="navbar-links">
                {/* Link "Shop" */}
                <li className="nav-item">
                    <a href="#" className="active">Shop</a>
                </li>

                {/* Link "About" */}
                <li className="nav-item">
                    <a href="#" className="active">About</a>
                </li>

                {/* Link "Form" */}
                <li className="nav-item">
                    <a href="./Form" className="active">Contact</a>
                </li>
            </ul>
        </div>
    </nav>                
    );
}

export default Header;
