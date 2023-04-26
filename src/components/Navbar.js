import React, { useState } from "react";
import '../styles/NavBar.css'
import { Link } from "react-router-dom";
import Popup from "./Popup";

// BrowserRouter, Route,

function Navbar() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (


        <div className="nav nav-container">
            <div className="logo"><Link to="/"><img src="/logo.png" alt="logo" class="logo"></img></Link></div>
            <nav>
                <ul>
                    <li class="nav-item">
                        <Link to="/">Home</Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/about">About</Link>
                    </li>

                    <li class="nav-item"> <a> <Link to="/Resources">Resources</Link> </a> </li>

                    <li class="nav-item"> <a> <Link to="/Signup">Volunteer</Link> </a> </li>

                    <button onClick={() => setButtonPopup(true)}>Log In</button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    </Popup>

                </ul>
            </nav>

        </div>
    );
}

export default Navbar;