

import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [availability, setAvailability] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  }

  return (



    <main className="contact-container">
        {/* <h1>Volunteer Opportunities</h1> */}

    
        
        <header>
       
        <h1>Volunteer</h1>
  </header>

  <div className="container">
      <section className="article">
      <h3>How Can Volunteers Help?</h3>
        <p> Volunteers can play a crucial role in disaster relief efforts. Here are a few ways that volunteers can help:

Donations: Volunteers can donate money, clothing, food, and other necessary items to aid disaster victims.
Volunteering on the ground: Volunteers can help with search and rescue efforts, distributing aid, and offering emotional support to disaster victims. Donating blood: In the aftermath of a disaster, there is often a critical need for blood donations to help those injured.</p>
      </section>
    </div> 


        
    <form onSubmit={handleSubmit} className="contact-form">
      <h2> Sign Up to Help With Disaster Relief!</h2>
       
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="availability">Are you over the age of 18?</label>
        <input
          type="text"
          id="availability"
          value={availability}
          onChange={(event) => setAvailability(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="interest">Interest</label>
        <select
          id="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          required
        >
          <option value="">Select an option</option>
          <option value="
Donations
">
Humanitarian</option>
          <option value="Option 2">
Donations
</option>
          <option value="Option 3">Virtual</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>



    <section className="video-section">
 
  <div className="video-container">
     <h3>Check Out This Video To Learn More About Volunteering</h3>
    <iframe width="648" height="365" src="https://www.youtube.com/embed/pNY3JWwFL4M" title="What are the benefits for the volunteer?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</section>



 

    </main>
  );
}

export default Signup;



