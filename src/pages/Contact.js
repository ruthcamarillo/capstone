import React, { useState } from 'react';


function Contact() {
  // Declare state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission logic here
  }

  // Handle name input change
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Handle email input change
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  // Handle subject input change
  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }

  // Handle message input change
  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  // Render the contact form
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <h1>Contact Us!</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={handleSubjectChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;