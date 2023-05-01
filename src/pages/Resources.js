import React, { useState } from 'react';
import './Resources.css';
import heroimage3 from '../images/heroimage3.gif';
import TheNav from '../components/TheNav'


function Resources() {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  const handleVolunteerClick = () => {
    setShowVolunteerForm(!showVolunteerForm);
  };

  return (
    <div>
      <TheNav />



      <main className="resources-container">

        <div className="hero-section">
          <h1 className="resources-header">Disaster Relief Resources</h1>
          {/* <img src={heroimage3.gi} alt="Disaster Relief Fund" className="hero-image3" /> */}
        </div>


        <section className="articles-section">
          <div className="conatainer-res">
            <h2 className="section-title11">Disaster Preparedness Tips</h2>
            <div className="articles-grid">
              <div className="article-card">
                <img src="https://static.vecteezy.com/system/resources/previews/004/449/836/original/first-aid-kit-2d-isolated-illustration-paramedic-bag-doctor-supplies-medical-help-equipment-flat-composition-on-cartoon-background-emergency-situation-assistance-tools-colourful-scene-vector.jpg" alt="Article Image" className="article-image" />
                <div className="article-content">
                  <h3 className="article-title">How to Prepare for a Disaster</h3>
                  <p className="article-text">Learn how to create an emergency plan, build an emergency kit, stay informed, protect your property, and practice your plan.</p>
                  <a href="https://www.ready.gov/kit?gclid=EAIaIQobChMIx8Wow4vL_gIV4vbjBx1_2g8QEAAYASAAEgJkCPD_BwE" className="article-link">Read More</a>
                </div>
              </div>

              <div className="article-card">
                <img src="https://media.istockphoto.com/id/1179769290/vector/women-who-feel-anxious-about-disaster.jpg?s=612x612&w=0&k=20&c=AR6IwRkNzvJujylTbE4owekk20n1Fspw33UlkJhzIcE=" alt="Article Image" className="article-image" />
                <div className="article-content">
                  <h3 className="article-title">What to Do After a Disaster</h3>
                  <p className="article-text">Learn how to assess the damage, avoid hazards, contact family and friends, seek assistance, and begin cleanup and recovery.</p>
                  <a href="https://stories.globalcommunities.org/crisis-to-resilience/index.html?utm_source=google_adwords&utm_medium=paid&utm_campaign=shorthand&gad=1&gclid=EAIaIQobChMI2cXp2IvL_gIVwoJbCh1QlQC7EAAYASAAEgKboPD_BwE" className="article-link">Read More</a>
                </div>
              </div>

              <div className="article-card">
                <img src="https://media.istockphoto.com/id/1263052067/vector/tsunami-consequences-rescue-male-female-character-evacuation-save-inflatable-boat-people.jpg?s=612x612&w=0&k=20&c=Q4ndN2BcqaK5thkGTFdbuxLYgZBI-tXTYf1Bx-XxUms=" alt="Article Image" className="article-image" />
                <div className="article-content">
                  <h3 className="article-title">How to Help After a Disaster</h3>
                  <p className="article-text">Learn how to donate goods, volunteer, and spread awareness to help those in need after a disaster.</p>
                  <a href="How to Help After a Disaster" className="article-link">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>



        <h2>Check Out These Resources That Provide Relief!</h2>
        <div class="news-card">
          <div class="news-content">
            <h3 class="news-title1">Habitat for Humanity  </h3>
            <p class="news-text">
              Habitat for Humanity is a non-profit organization that aims to provide affordable housing solutions for families and individuals in need. The organization works by partnering with these families and individuals, providing them access to financing, materials, and volunteer labor to help build or repair homes.
            </p>
            <a href="https://www.habitatcltregion.org/?gclid=EAIaIQobChMIpveyqIzL_gIVNvfjBx2gKQDbEAAYAiAAEgJLm_D_BwE" class="news-link">Read More</a>
          </div>
          <div class="news-image-container">
            <img src="https://i0.wp.com/sammyapproves.com/wp-content/uploads/2021/10/Habitat-for-Humanity-MOB-small-6.gif" alt="News Image" class="news-image" />
          </div>
        </div>



        <div class="news-card1">
          <div class="news-image-container1">
            <img src="https://better.net/chicago/wp-content/uploads/sites/2/2017/08/Rebuilding-Together.jpg" alt="News Image" class="news-image1" />
          </div>
          <div class="news-content1">
            <h3 class="news-title1">Rebuilding Together</h3>
            <p class="news-text1">Rebuilding Together is a nonprofit organization that aims to provide safe and healthy housing for low-income families and individuals in need in the United States.
              Rebuilding Together works by mobilizing volunteers and community resources to help repair homes and improve living conditions for people in need.


            </p>
            <a href="#" class="news-link1">Read More</a>
          </div>
        </div>

        {/* 
<h2>Financial Resources</h2> */}
        <div class="news-card">
          <div class="news-content">
            <h3 class="news-title"> Federal Emergency Management Agency</h3>
            <p class="news-text">
              In the wake of natural disasters, the Federal Emergency Management Agency (FEMA) steps up to provide financial aid to those who have been affected. Through its Individuals and Households Program, FEMA offers temporary housing assistance, home repair and replacement, and other forms of financial aid to individuals and families in need.  </p>
            <a href="https://www.fema.gov/" class="news-link">Read More</a>
          </div>
          <div class="news-image-container">
            <img src="https://s3.amazonaws.com/resources-govwin-com/blog/Image/FEMA%20PA%20Grants%20June8.PNG" alt="News Image" class="news-image" />
          </div>
        </div>

        <section className="images-section4">
          <div className="conatainer-res4">
            <h2 className="section-title4">"Swift & Decisive Action After Natural Disasters Occur"</h2>
            <div className="images-grid4">
              <img src="https://media.istockphoto.com/id/481990146/photo/hurrican-sandy-relief-staten-island.jpg?s=612x612&w=0&k=20&c=nlduR6sA0s0FpERGGsUC56GlxdC-yc1jHUmYwzHOh0A=" alt="Image 1" className="image4" />
              <img src="https://media.istockphoto.com/id/180709503/photo/closeup-of-disaster-relief-sign-at-center-handing-out-water.jpg?s=612x612&w=0&k=20&c=dBSA7lawapYhGBmBVyN3h3wPgYh6xpf0NXfvd-NbjAM=" alt="Image 2" className="image4" />
              <img src="https://media.istockphoto.com/id/168589271/photo/hispanic-couple-donating-water-and-blankets-at-disaster-relief-charity.jpg?s=612x612&w=0&k=20&c=gmKQ-bG9k363gkDmCTLbNmOPQhfZl6AXo4YcbGHyHaY=" alt="Image 3" className="image4" />
              <img src="https://media.istockphoto.com/id/1278451359/photo/emergency-preparedness-natural-disaster-supplies.jpg?s=612x612&w=0&k=20&c=Q81FP11SgrzOtGPtFGfBlgijhZvUSFLhlbqanYm08wQ=" alt="Image 4" className="image4" />
              {/* <img src="https://www.sahf.org/wp-content/uploads/2021/05/WeAid_-_COVID_RELIEF.jpg" alt="Image 5" className="image4" />
            <img src="https://oip.charlotte.edu/sites/oip.charlotte.edu/files/media/StudentVolunteer_0.png" alt="Image 6" className="image4" />  */}
            </div>
          </div>
        </section>








        {/* <div className="news-card">
        <img src="https://www.sahf.org/wp-content/uploads/2021/05/program_wesupport.png" alt="News Image" className="news-image" />
        <div className="news-details">
          <h3 className="news-title">How to Prepare for a Hurricane</h3>
          <p className="news-date">Published on April 15, 2023</p>
          <p className="news-summary">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
          <a href="#" className="news-link">Read More</a>
        </div>
      </div> */}


      </main>
    </div>
  );
}

export default Resources;


