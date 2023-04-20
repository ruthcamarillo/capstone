import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (


        <nav className="nav">
            <ul>

                <li class="nav-item"> <a> <Link to="/">Home</Link> </a></li>

                <li class="nav-item"> <a><Link to="/contact">Contact</Link> </a> </li>

                <li class="nav-item"> <a> <Link to="/about">About</Link> </a> </li>

                <li class="nav-item"> <a> <Link to="/Resources">Resources</Link> </a> </li>

                <li class="nav-item"> <a> <Link to="/Signup">Volunteer</Link> </a> </li>


            </ul>
        </nav>




    );
}

export default Navbar;