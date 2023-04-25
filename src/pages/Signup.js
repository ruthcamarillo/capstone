

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

        <h1>Volunteer Opportunities</h1>
        
        <header>
       

  </header>

  <div className="container">
      <section className="article">
      <h3>What is a Natural Disaster?</h3>
        <p>Natural Disasters are hurricanes, earthquakes, wildfires, and floods, that can strike at any time and can leave devastating effects on communities. The aftermath of these disasters often requires a lot of help, resources, and time to get people back on their feet.  </p>
      </section>
    </div>


        
    <form onSubmit={handleSubmit} className="contact-form">
      <h2> Sign Up to Volunteer!</h2>
       
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
  {/* <h3>Benefits of Volunteering</h3> */}
  <div className="video-container">
    <iframe width="648" height="365" src="https://www.youtube.com/embed/pNY3JWwFL4M" title="What are the benefits for the volunteer?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</section>




    </main>
  );
}

export default Signup;



