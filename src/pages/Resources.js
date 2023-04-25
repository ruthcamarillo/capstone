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
  
    <div className="hero-section">
    <h1 className="resources-header">Disaster Relief Resources</h1>
      <img src={heroimage3} alt="Disaster Relief Fund" className="hero-image" />
    </div>


    <section className="articles-section">
        <div className="conatainer-res">
          <h2 className="section-title">Resources Articles</h2>
          <div className="articles-grid">
            <div className="article-card">
              <img src="https://www.sahf.org/wp-content/uploads/2021/05/program_wesupport.png" alt="Article Image" className="article-image" />
              <div className="article-content">
                <h3 className="article-title">How to Prepare for a Disaster</h3>
                <p className="article-text">Learn how to create an emergency plan, build an emergency kit, stay informed, protect your property, and practice your plan.</p>
                <a href="#" className="article-link">Read More</a>
              </div>
            </div>

            <div className="article-card">
              <img src="https://www.sahf.org/wp-content/uploads/2021/05/program_wepartner.png" alt="Article Image" className="article-image" />
              <div className="article-content">
                <h3 className="article-title">What to Do After a Disaster</h3>
                <p className="article-text">Learn how to assess the damage, avoid hazards, contact family and friends, seek assistance, and begin cleanup and recovery.</p>
                <a href="#" className="article-link">Read More</a>
              </div>
            </div>

            <div className="article-card">
              <img src="https://www.sahf.org/wp-content/uploads/2021/05/program_weaid.png" alt="Article Image" className="article-image" class="right" />
              <div className="article-content">
                <h3 className="article-title">How to Help After a Disaster</h3>
                <p className="article-text">Learn how to donate goods, volunteer, and spread awareness to help those in need after a disaster.</p>
                <a href="#" className="article-link">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="images-section">
        <div className="conatainer-res">
          <h2 className="section-title">Resources Images</h2>
          <div className="images-grid">
            <img src="https://media.istockphoto.com/id/481990146/photo/hurrican-sandy-relief-staten-island.jpg?s=612x612&w=0&k=20&c=nlduR6sA0s0FpERGGsUC56GlxdC-yc1jHUmYwzHOh0A=" alt="Image 1" className="image" />
            <img src="https://media.istockphoto.com/id/180709503/photo/closeup-of-disaster-relief-sign-at-center-handing-out-water.jpg?s=612x612&w=0&k=20&c=dBSA7lawapYhGBmBVyN3h3wPgYh6xpf0NXfvd-NbjAM=" alt="Image 2" className="image" />
            <img src="https://media.istockphoto.com/id/168589271/photo/hispanic-couple-donating-water-and-blankets-at-disaster-relief-charity.jpg?s=612x612&w=0&k=20&c=gmKQ-bG9k363gkDmCTLbNmOPQhfZl6AXo4YcbGHyHaY=" alt="Image 3" className="image" />
            <img src="https://media.istockphoto.com/id/1278451359/photo/emergency-preparedness-natural-disaster-supplies.jpg?s=612x612&w=0&k=20&c=Q81FP11SgrzOtGPtFGfBlgijhZvUSFLhlbqanYm08wQ=" alt="Image 4" className="image" />
            <img src="image-5.jpg" alt="Image 5" className="image" />
            <img src="image-6.jpg" alt="Image 6" className="image" />
          </div>
        </div>
      </section> */}

      <section className="news-section">
  <div className="conatainer-res">
    <h2 className="section-title">Resources News</h2>
    <div className="news-grid">
      <div className="news-card">
        <img src="news-image-1.jpg" alt="News Image" className="news-image" />
        <div className="news-details">
          <h3 className="news-title">New Disaster Relief Fund Launched</h3>
          <p className="news-date">Published on April 22, 2023</p>
          <p className="news-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <a href="#" className="news-link">Read More</a>
        </div>
      </div>
      <div className="news-card">
        <img src="news-image-2.jpg" alt="News Image" className="news-image" />
        <div className="news-details">
          <h3 className="news-title">Volunteers Needed for Disaster Cleanup</h3>
          <p className="news-date">Published on April 19, 2023</p>
          <p className="news-summary">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
          <a href="#" className="news-link">Read More</a>
        </div>
      </div>
      <div className="news-card">
        <img src="news-image-3.jpg" alt="News Image" className="news-image" />
        <div className="news-details">
          <h3 className="news-title">How to Prepare for a Hurricane</h3>
          <p className="news-date">Published on April 15, 2023</p>
          <p className="news-summary">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
          <a href="#" className="news-link">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>
  </main>
  
  
);
}

export default Resources;


