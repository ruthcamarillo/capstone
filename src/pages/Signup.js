import React, { useState } from 'react';
import './Signup.css';

function VolunteerSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <div>
      <h1>Volunteer Signup</h1>
      <form onSubmit={handleSubmit} method="POST">
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
      </form>
    </div>
  );
}

export default VolunteerSignup;
