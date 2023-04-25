import React, { useState } from 'react';
import './Resources.css';
import heroimage3 from '../images/heroimage3.gif';

function Resources() {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  const handleVolunteerClick = () => {
    setShowVolunteerForm(!showVolunteerForm);
  };

  return (



    
    <main className="resources-container">
      <h1 className="resources-header">Disaster Relief Resources</h1>
      <div className="hero-section">
        <img src={heroimage3} alt="Disaster Relief Fund" className="hero-image" />
      </div>
    
      <section className="articles-container">
        <h2 className="articles-header"></h2>
        <ul className="articles-list">
          <li className="article-item">
            <div className="article-item-container">
              <img src="https://www.sahf.org/wp-content/uploads/2021/05/program_weaid.png"alt="Image 1" />
              <div className="article-item-content">
                <h3 className="article-item-title">How to Prepare for a Disaster</h3>
                {/* <p className="article-item-description">Disasters can strike at any time, and being prepared can make all the difference in keeping yourself and your loved ones safe. Here are some steps you can take to prepare for a disaster:</p> */}
                <ul>
                  <li>Create an emergency plan </li>
                  <li>Build an emergency kit </li>
                  <li>Stay informed: </li>
                  <li>Protect your property</li>
                  <li>Practice your plan</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="article-item">
            <div className="article-item-container">
              <img src="https://www.sahf.org/wp-content/uploads/2021/05/program_wepartner.png" alt="Image 2" />
              <div className="article-item-content">
                <h3 className="article-item-title">What to Do After a Disaster</h3>
                {/* <p className="article-item-description">After a disaster, there are several things you can do to stay safe and begin the process of recovery. Here are some steps you can take:</p> */}
                <ul>
                  <li>Assess the damage </li>
<li>Avoid hazards</li>
<li>Contact family and friends </li>
<li>Seek assistance</li>
<li>Begin cleanup and recovery</li>
</ul>
</div>
</div>
</li>
<li className="article-item">
<div className="article-item-container">
    <img src="https://www.sahf.org/wp-content/uploads/2021/05/program_wenourish.png" alt="Image 2" />
<div className="article-item-content">
<h3 className="article-item-title">How to Help After a Disaster</h3>
{/* <p className="article-item-description">If you want to help those affected by a disaster, there are many ways you can contribute. Here are some options:</p> */}
<ul>

<li>Donate goods </li>
<li>Volunteer</li>
<li>Spread awareness </li>
</ul>
</div>
</div>
</li>
</ul>
</section>
</main>
);
}

export default Resources;


