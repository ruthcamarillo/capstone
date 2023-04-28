import React from "react";
import '../styles/theNav.css'
// import React, { useState } from "react";
// import '../styles/NavBar.css'
import { Link } from "react-router-dom";


function TheNav () {
//     let menu = document.querySelector('#menu-icon')
// let navbar = document.querySelector('.navbar')

// menu.onclick = () => {
//     console.log(`clicked`)
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// }

    return (
<>
     {/* <div className="body">
    <header> */}
    <div className="header">
        <div className="logo"><Link to="/"><img src="/logo.png" alt="logoimg" className="logo"></img></Link></div>
    <nav>
        <ul className="navbar">
            <Link to="/" className="active navtxt">Home</Link>
            <Link to="/contact" className="navtxt" >Contact</Link>
            {/* <li className="navbar"><a href="#">Services</a></li> */}
            <Link to="/about" className="navtxt">About</Link>
            {/* <li className="navbar"><a href="#">Blog</a></li> */}
            <Link to="/Resources" className="navtxt">Resources</Link>
            {/* <li className="navbar"><a href="#">Contact</a></li> */}
            <Link to="/Signup" className="navtxt">Volunteer</Link>
        </ul>

        <div className="main">
            {/* <a href="#" className="user"><i className="ri-user-fill"></i>Sign In</a> */}
            <Link to="Sign-In" className="user navtxt popup"><i className="ri-user-fill"></i>Sign In</Link>
            {/* <a href="#">Register!</a> */}
            <Link to="Sign-up" className="navtxt popup">Register</Link>
            <div className="bx bx-menu" id="menu-icon"></div>

            {/* <button onClick={() => setButtonPopup(true)}>Log In</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            </Popup> */}
        </div>
    </nav>
    {/* </header>
 </div> */}
 </div>
</>
    )
}


export default TheNav;