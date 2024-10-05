import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending email via EmailJS
    emailjs
      .send(
        "service_7yceqqi", // Your service ID
        "template_ni7llw8", // Your template ID
        formData,          // This will include name, email, and message
        "w4WCtz120wxevQvTH" // Your user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! Fill out the form below to get in touch.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="button">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;