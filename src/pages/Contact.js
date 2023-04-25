import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <div className='Container-form'>
  
      <h1>Contact Us</h1>
     
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">-- Select One --</option>
          <option value="volunteer">Volunteering</option>
          <option value="question">Question</option>
          <option value="comment">Comment</option>
        </select>

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

        <input type="submit" value="Submit" />

        <div className="Container-address">
        <h2>Our Address</h2>
        <p>123 Main Street</p>
        <p>Anytown, USA</p>
        <p>12345</p>
      </div>

      <div className="Container-phone">
        <h2>Call Us</h2>
        <p>Phone: 555-555-5555</p>
        <p>Fax: 555-555-5556</p>
      </div>

      </form>
    </div>
  );
}

export default Contact;


