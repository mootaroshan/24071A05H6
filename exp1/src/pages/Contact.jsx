import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact message sent:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page container">
      <div className="page-header animate-fade-in">
        <h1 className="page-title">Get in <span className="text-gradient">Touch</span></h1>
        <p className="page-subtitle">We'd love to hear from you. Drop us a line!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info glass-panel animate-fade-in delay-100">
          <h3>Contact Information</h3>
          <p className="info-desc">Fill out the form and our team will get back to you within 24 hours.</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon"><FiMail /></div>
              <div>
                <h4>Email</h4>
                <p>support@eventvibe.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FiPhone /></div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FiMapPin /></div>
              <div>
                <h4>Office</h4>
                <p>123 Innovation Drive,<br/>Tech City, TC 10010</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container glass-panel animate-fade-in delay-200">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-input" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group half">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  className="form-input" 
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input 
                type="text" 
                name="subject"
                className="form-input" 
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                name="message"
                className="form-input textarea" 
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
