import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <nav className="navbar">
                <div className="brand-title">MOOOVE.com</div>
                <div className="navbar-links">
                    <ul>
                        <li>
                            <Link to="/" className="nav-link">HOME</Link>
                        </li>
                        <li>
                            <Link to="/aboutUs" className="nav-link">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/services" className="nav-link">SERVICES</Link>
                        </li>
                        <li>
                            <Link to="/contactUs" className="nav-link">CONTACT US</Link>
                        </li>
                        <li>
                            <Link to="/contactUs" className="nav-link">LOGIN/SIGN UP</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;