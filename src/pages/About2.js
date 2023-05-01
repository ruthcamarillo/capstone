import React from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import TheNav from '../components/TheNav';
import '../styles/About2.css';

// import SearchBar from "../components/Card";
// import Card from "../components/Card";
// import { getByTitle } from '@testing-library/react';
import ruthimg from "../images/ruth.png"
import adriannimg from "../images/adriann.png"
import breimg from "../images/bre.png"
import jorgeimg from "../images/PicOfMe.png"

// THIS IS NOT THE ABOUT PAGE
function About() {
  return (


    <div className='about'>
      <TheNav />

      <section id="aboutus">

        <h1>Meet The Team!</h1>
        <div class="our_team">
          <div class="team_member">
            <div class="member_img">
              <img src={ruthimg} alt="our_team"></img>
            </div>
            <h3>Ruth Camarillo</h3>
            {/* <span>Team Lead</span> */}
            <p>My name is Ruth Camarillo and I'm a coding apprentice. I'm passionate about learning new things and giving back to the community.
              I am eager to continue my learning and grow as a software engineer to be able to mentor others to achieve the same!</p>
          </div>
          <div class="team_member">
            <div class="member_img">
              <img src={breimg} alt="our_team"></img>
            </div>
            <h3>Breana Young</h3>
            {/* <span>Front-End Engineer</span> */}
            <p>Hello, my name is Breana Young and I'm a Software Engineer apprentice. I'm passionate about designing user-friendly interfaces that make UI more accessible.
              In addition to my technical skills, I'm also a strong communicator and collaborator. I'm always eager to learn and take on new challenges in order to improve my skills and create the best possible </p>
          </div>
          <div class="team_member">
            <div class="member_img">
              <img src={adriannimg} alt="our_team"></img>
            </div>
            <h3>Adriann Harris</h3>
            {/* <span>Front-End Engineer</span> */}
            <p>I’m 23 , outside of coding I focus on designing skateboards and painting. I also play instruments. I like building things from the ground up and I have found that within code.</p>
          </div>
          <div class="team_member">
            <div class="member_img">
              <img src={jorgeimg} alt="our_team"></img>
            </div>
            <h3>Jorge Medina</h3>
            {/* <span>Back-End Engineer</span> */}
            <p>Hey! My name is Jorge and I love creating projects to help individuals in need. My passion is to make the world a better place and I believe that I can achieve that through this website. I love finding solutions and working in new environments with new technologies.</p>
          </div>
        </div>
      </section>

      {/* <SearchBar data={Card} /> */}

      {/* <Card data ={Card} /> */}

    </div>

  );
}

export default About;
