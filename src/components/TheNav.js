import React, { useEffect } from "react";
import "../styles/theNav.css";
import { Link } from "react-router-dom";

function TheNav() {
  useEffect(() => {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menu.onclick = () => {
      console.log(`clicked`);
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("open");
    };
  }, []);

  return (
    <>
      <div className="allnav">
        <div className="navBar">
          <div className="headerr">
            <div className="logo">
              <Link to="/">
                <img src="/logo.png" alt="logo" class="logo"></img>
              </Link>
            </div>
            <nav>
              <ul class="navbar">
                <li>
                  <a href="/home" class="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="Resources">Resources</a>
                </li>
                <li>
                  <a href="/signup">Volunteer</a>
                </li>
              </ul>

              <div class="main">
                {/* <a href="#" class="user"><i class="ri-user-fill"></i>Sign In</a> */}
                {/* <a href="#">Register</a> */}

                <div class="bx bx-menu" id="menu-icon"></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheNav;
