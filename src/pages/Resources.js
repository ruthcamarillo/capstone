

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
    
      <section class="articles-container">
  <h2 class="articles-header">Articles</h2>
  <ul class="articles-list">
    <li class="article-item">
      <div class="article-item-container">
        {/* <img src="https://blog-www.pods.com/wp-content/uploads/2020/07/Emergency-Kit-Feature-Resized.jpg.webp" alt="Image 1" /> */}
        <div class="article-item-content">
          <h3 class="article-item-title">How to Prepare for a Disaster</h3>
          <p class="article-item-description">Disasters can strike at any time, and being prepared can make all the difference in keeping yourself and your loved ones safe. Here are some steps you can take to prepare for a disaster:

Create an emergency plan: Make a plan with your family or household members about what you will do during an emergency, including evacuation plans, communication methods, and meeting places.
Build an emergency kit: Gather supplies that you would need to survive for at least three days without assistance, including food, water, first aid supplies, and medications.
Stay informed: Monitor local news and weather reports for updates on potential disasters, and sign up for emergency alerts in your area.
Protect your property: Take steps to protect your home from potential damage, such as reinforcing doors and windows, clearing gutters, and securing loose outdoor items.
Practice your plan: Regularly review and practice your emergency plan with your family or household members, so that everyone knows what to do if disaster strikes.</p>
        </div>
      </div>
    </li>
    <li class="article-item">
      <div class="article-item-container">
        {/* <img src="https://www.compassion.com/Images/new-disaster-management.jpg" alt="Image 2" /> */}
        <div class="article-item-content">
          <h3 class="article-item-title">What to Do After a Disaster</h3>
          <p class="article-item-description">After a disaster, there are several things you can do to stay safe and begin the process of recovery. Here are some steps you can take:

Stay informed: Listen to local news and follow updates from emergency management officials to stay informed about the situation and any potential hazards.
Assess the damage: Check your home and property for any damage and document it with photos or videos. Contact your insurance company to report any damage.
Avoid hazards: Be careful when entering your home or any other buildings that may have been affected by the disaster. Look out for hazards such as broken glass, downed power lines, and unstable structures.
Contact loved ones: Let your family and friends know that you're safe and where you are.
Seek medical attention: If you or anyone in your family is injured, seek medical attention immediately.
Clean up: Begin cleaning up your home and property as soon as it is safe to do so. Wear protective gear such as gloves and masks to avoid exposure to harmful substances.
Contact disaster relief organizations: Reach out to organizations such as the Red Cross or FEMA for assistance with food, shelter, and other necessities.</p>
        </div>
      </div>
    </li>
    <li class="article-item">
      <div class="article-item-container">
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1TWQhmGBZsDGV0iYG0oeKhs4RXwq2XTFww&usqp=CAU" alt="Image 3" /> */}
        <div class="article-item-content">
          <h3 class="article-item-title">How to Help Your Community After Natural Disasters</h3>
          <p class="article-item-description">After a natural disaster, there are many ways to help your community and those affected. Here are a few ideas:

Donate money: Many organizations and relief agencies need funding to help provide supplies, food, shelter, and medical aid to those affected by the disaster. Look for reputable organizations and donate what you can.
Volunteer: Depending on the situation and location, there may be opportunities to volunteer with disaster relief efforts. Check with local organizations or relief agencies to see how you can help.
Donate goods: In some cases, organizations may be accepting donations of supplies, such as water, non-perishable food, clothing, and toiletries. Check with local organizations or relief agencies to see what they are accepting and where to drop off donations.
Offer support: If you know someone who has been affected by the disaster, offer your support in any way you can. This may include offering a place to stay, providing emotional support, or helping them navigate the recovery process.
Spread the word: Share information about the disaster and relief efforts on social media, and encourage others to get involved and donate. Every little bit helps, and raising awareness can make a big difference.</p>
        </div>
      </div>
    </li>
  </ul>
</section>
 <section className="volunteer-container">
        <h2 className="volunteer-header">Volunteer Oportunities</h2>
        {showVolunteerForm ? (
          <form className="volunteer-form">
            <label htmlFor="name" className="volunteer-label">Name:</label>
            <input type="text" id="name" name="name" className="volunteer-input" />
            <label htmlFor="email" className="volunteer-label">Email:</label>
            <input type="email" id="email" name="email" className="volunteer-input" />
            <label htmlFor="phone" className="volunteer-label">Phone:</label>
            <input type="tel" id="phone" name="phone" className="volunteer-input" />
            <label htmlFor="availability" className="volunteer-label">Availability:</label>
            <textarea id="availability" name="availability" className="volunteer-textarea"></textarea>
            <button type="submit" className="volunteer-button">Submit</button>
          </form>
        ) : (
          <button onClick={handleVolunteerClick} className="volunteer-button">Sign up to Volunteer</button>
        )}
      </section> 

<section className="videos-container">
  <h2 className="videos-header">Watch video to learn more about disaster preparedness!</h2>
  <div className="video-wrapper">
  <iframe width="950" height="534" src="https://www.youtube.com/embed/LnMGN2k6NxA" title="Emergency Preparedness Introduction | CODSN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</section>

    
      {/* <section className="donate-container">
        <h2 className="donate-header">
        Donate to Disaster Relief
</h2>
<p className="donate-paragraph">
Your donation can help provide much-needed resources and support to those affected by natural disasters. Click the button below to make a donation today.
</p>
<button className="donate-button">Donate Now</button>
</section> */}
</main>
);
}

export default Resources;