import React, { useState } from 'react';
import Axios from 'axios';
import './Signup.css';
import TheNav from '../components/TheNav';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [over18, setOver18] = useState('');
  const [interest, setInterest] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleSubmit(event) {
    event.preventDefault(); // prevent the form from reloading the page
    Axios.post('http://localhost:3001/Signup', {
      volunteer_name: name,
      email: email,
      phone_number: phone,
      over18: over18,
      interests: interest
    })
      .then(response => {
        console.log(response.data);
        setShowConfirmation(true);
      })
      .catch(error => {
        console.log(error);
      });
  }


  return (
    <div>
      <TheNav />
      <div className="signup-container5">
        <header className="header">
          <h1 className="title-signup">Volunteer Signup</h1>
        </header>

        <section className="safety-section">
          <div className="container">
            {/* <h2 className="section-title">Inclusive & Diverse Volunteer Opportunities For Everyone!</h2> */}
            <div className="safety-grid">
              <div className="safety-card">
                <img src="https://www.habitatcltregion.org/wp-content/webp-express/webp-images/doc-root/wp-content/files/sites/7/2021/02/wb30-landing-page-projects-e1679602003240.jpg.webp" alt="Disaster Safety Tips" className="safety-image" />
                <h3 className="safety-title">Experienced Volunteers</h3>
                <p className="safety-text">They are often called upon to provide leadership, mentorship, and guidance to new volunteers or less experienced ones.</p>
              </div>
              <div className="safety-card">
                <img src="data:image/jpeg;base64,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" alt="Emergency Kit Checklist" className="safety-image" />
                <h3 className="safety-title">Youth Volunteers</h3>
                <p className="safety-text">Youth volunteers may participate in a range of activities, such as organizing events, providing peer support, fundraising, working with seniors or children, or engaging in advocacy and activism.

                </p>
              </div>
              <div className="safety-card">
                <img src="https://www.habitatcltregion.org/wp-content/webp-express/webp-images/doc-root/wp-content/files/sites/7/2022/10/a-woman-painting.jpg.webp" alt="Hazards to Avoid" className="safety-image" />
                <h3 className="safety-title"> Beginner Volunteers</h3>
                <p className="safety-text">As a beginner volunteer, there are many ways you can get involved in your local community and make a positive impact.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="content-container2">
          <section className="form-section2">
            <h2 className="form-title2">Sign Up to Help With Disaster Relief!</h2>
            {/* <form onSubmit={handleSubmit} className="form2"> */}
            <form onSubmit={handleSubmit} className="form2">
              <div className="form-group2">
                <label htmlFor="name2" className="form-label2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group2">
                <label htmlFor="email" className="form-label2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="form-input2"
                />
              </div>
              <div className="form-group2">
                <label htmlFor="phone" className="form-label2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                  className="form-input2"
                />
              </div>
              <div className="form-group2">
                <label htmlFor="over18" className="form-label2">
                  Are you over the age of 18?
                </label>
                <select
                  id="over18"
                  value={over18}
                  onChange={(event) => setOver18(event.target.value)}
                  required
                  className="form-input2"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-group2">
                <label htmlFor="interest" className="form-label2">
                  Interest
                </label>
                <select
                  id="interest"
                  value={interest}
                  onChange={(event) => setInterest(event.target.value)}
                  required
                  className="form-input"
                >
                  <option value="">Select an option</option>
                  <option value="humanitarian">Humanitarian</option>
                  <option value="donations">Donations</option>
                  <option value="virtual">Virtual</option>
                </select>
              </div>
              <button type="submit" className="form-button2">
                Submit
              </button>
            </form>
            {showConfirmation && (
              <div className="confirmation2">
                <p className="confirmation-text2">
                  Thank you for signing up, {name}! We will contact you soon at{' '}
                  {email} or {phone} regarding your interest in {interest} volunteer work.          </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Signup;

