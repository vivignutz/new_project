// Header.js
import React from 'react';

function Header() {
    return (
        <nav id="topnav">
            
{/*   {/* Logo 
            <div className="nav-logo">
                <a href="index.html">
                    <img src={logo} alt="project-logo" className='logo-img' />
                </a>
            </div> */}

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

{/* <!-- Search Box (to me implemented): 
    <div>  
        <form>
            <div>
                    <label> Search Box </label>
                    <input type="text" placeholder="Search...">
                <div>
                    <button type="submit">
                        <span>
                            <i> search icon </i>
                        </span>
                    </button>
                </div>
            </div>    
        </form>
    </div>


    <div className="user-links">
        <ul>
            <li className="user-account">
                <a href="#" id="user-options"></a>
                    <div>
                        <a href="signup">Register</a>
                        <a href="signin">Login</a>
                    </div>                            
            </li>

            <li>
                <a className="basket" href="basket">
                    <div>
                        <div>
                            <i className="basket icon"></i>
                        </div>                                 
                        <p>" €0.00"</p>    
                    </div>
                </a>                    
            </li>
        </ul>
    </div>
--> */}
    </nav>                
    );
}

export default Header;
