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
        <h2 className="articles-header">Articles</h2>
        <ul className="articles-list">
          <li className="article-item">
            <div className="article-item-container">
              {/* <img src="https://blog-www.pods.com/wp-content/uploads/2020/07/Emergency-Kit-Feature-Resized.jpg.webp" alt="Image 1" /> */}
              <div className="article-item-content">
                <h3 className="article-item-title">How to Prepare for a Disaster</h3>
                <p className="article-item-description">Disasters can strike at any time, and being prepared can make all the difference in keeping yourself and your loved ones safe. Here are some steps you can take to prepare for a disaster:</p>
                <ul>
                  <li>Create an emergency plan: Make a plan with your family or household members about what you will do during an emergency, including evacuation plans, communication methods, and meeting places.</li>
                  <li>Build an emergency kit: Gather supplies that you would need to survive for at least three days without assistance, including food, water, first aid supplies, and medications.</li>
                  <li>Stay informed: Monitor local news and weather reports for updates on potential disasters, and sign up for emergency alerts in your area.</li>
                  <li>Protect your property: Take steps to protect your home from potential damage, such as reinforcing doors and windows, clearing gutters, and securing loose outdoor items.</li>
                  <li>Practice your plan: Regularly review and practice your emergency plan with your family or household members, so that everyone knows what to do if disaster strikes.</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="article-item">
            <div className="article-item-container">
              {/* <img src="https://www.compassion.com/Images/new-disaster-management.jpg" alt="Image 2" /> */}
              <div className="article-item-content">
                <h3 className="article-item-title">What to Do After a Disaster</h3>
                <p className="article-item-description">After a disaster, there are several things you can do to stay safe and begin the process of recovery. Here are some steps you can take:</p>
                <ul>
                  <li>Stay informed: Listen to local news and follow updates from emergency management officials to stay informed about the situation and any potential hazards.</li>
                  <li>Assess the damage: Check your home and property for any damage and document it with photos or videos. Contact your insurance company to report any damage.</li>
<li>Avoid hazards: Be careful when entering your home or any other buildings that may have been affected by the disaster. Look out for hazards such as broken glass, downed power lines, and unstable structures.</li>
<li>Contact family and friends: Let your family and friends know you are safe, and check on their well-being as well. If you have been separated from them, make plans to reconnect as soon as possible.</li>
<li>Seek assistance: If you need assistance with food, shelter, or medical care, contact local emergency management officials or disaster relief organizations for help.</li>
<li>Begin cleanup and recovery: Once it is safe to do so, begin cleaning up and repairing any damage to your property. Be sure to follow all safety guidelines and seek professional help if needed.</li>
</ul>
</div>
</div>
</li>
<li className="article-item">
<div className="article-item-container">
<div className="article-item-content">
<h3 className="article-item-title">How to Help After a Disaster</h3>
<p className="article-item-description">If you want to help those affected by a disaster, there are many ways you can contribute. Here are some options:</p>
<ul>
<li>Donate money: Consider donating to reputable organizations that provide disaster relief and recovery services, such as the American Red Cross, Salvation Army, or local disaster relief funds.</li>
<li>Donate goods: Check with local organizations or shelters to see if they are accepting donations of specific goods, such as non-perishable food, clothing, and blankets.</li>
<li>Volunteer: If you have skills or expertise that could be useful in disaster relief efforts, consider volunteering with organizations that provide disaster relief services.</li>
<li>Spread awareness: Use your social media platforms or other channels to raise awareness about the disaster and ways to help, and encourage others to contribute.</li>
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
