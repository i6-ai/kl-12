import React, { useState } from "react";
import emailjs from "emailjs-com";
import './contact.css'; // Ensure you have this file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    comments: "",
  });

  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_7yceqqi", "template_ni7llw8", formData, "w4WCtz120wxevQvTH")
      .then((result) => {
        setResponse("Message sent successfully!");
        setFormData({ email: "", comments: "" }); // Clear form
      })
      .catch((error) => {
        setResponse("Error sending message: " + error.message);
      });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="comments" className="label">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            required
            className="textarea"
          ></textarea>
        </div>
        <button type="submit" className="button">Send</button>
      </form>
      {response && <p className="response">{response}</p>}
    </div>
  );
};

export default ContactForm;   