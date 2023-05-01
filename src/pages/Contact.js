
import React, { useState } from 'react';
import Axios from 'axios';
import './Contact.css';
import TheNav from '../components/TheNav'

function Contact() {
  // Declare state variables for form fields and submission status
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:3001/contact', {
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
      .then((res) => {
        console.log(res.data);
        // Reset the form after successful submission and set submission status to success
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setSubmissionStatus('success');
      })
      .catch((err) => {
        console.error('Error submitting contact form:', err);
        // Set submission status to error
        setSubmissionStatus('error');
      });
  };

  // Handle input changes
  function handleInputChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  }

  // Render the contact form and submission status message
  return (

    <>
      <TheNav />

      {submissionStatus === 'success' && (
        <p className="confirmation2">Hey {name}, Your message was sent successfully! Thank you for talking with us!</p>
      )}
      {submissionStatus === 'error' && (
        <p className="submission-error">
          There was an error sending your message. Please try again later.
        </p>
      )}
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <h1>Contact Us!</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>

    </>
  );
}

export default Contact;