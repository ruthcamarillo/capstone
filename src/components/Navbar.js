import React from "react";
import '../styles/NavBar.css'
import { Link } from "react-router-dom";
// BrowserRouter, Route,

function Navbar() {
    return (


        <div className="nav-container">
            <nav>
                <ul>

                    <li class="nav-item"> 
                    {/* <a> */}
                         <Link to="/">Home</Link> 
                         {/* </a> */}
                         </li>

                    <li class="nav-item">
                         {/* <a> */}
                        <Link to="/contact">Contact</Link> 
                        {/* </a>  */}
                        </li>

                    <li class="nav-item"> 
                    {/* <a> */}
                         <Link to="/about">About</Link> 
                    {/* </a>  */}
                         </li>

                    <li class="nav-item"> 
                    {/* <a>  */}
                        <Link to="/Resources">Resources</Link> 
                        {/* </a>  */}
                        </li>

                        <li class="nav-item"> <a> <Link to="/Signup">Volunteer</Link> </a> </li>

            </ul>
        </nav>


</div>

    );
}

export default Navbar;