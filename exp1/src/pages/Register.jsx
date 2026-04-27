import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', formData);
    // Add registration logic here
  };

  return (
    <div className="auth-page">
      <div className="auth-container glass-panel animate-fade-in">
        <div className="auth-header">
          <h2>Create an <span className="text-gradient">Account</span></h2>
          <p>Join us and start booking events today</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group relative-input">
            <label className="form-label">Full Name</label>
            <div className="input-with-icon">
              <FiUser className="input-icon" />
              <input 
                type="text" 
                name="name"
                className="form-input has-icon" 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group relative-input">
            <label className="form-label">Email Address</label>
            <div className="input-with-icon">
              <FiMail className="input-icon" />
              <input 
                type="email" 
                name="email"
                className="form-input has-icon" 
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group relative-input">
            <label className="form-label">Password</label>
            <div className="input-with-icon">
              <FiLock className="input-icon" />
              <input 
                type="password" 
                name="password"
                className="form-input has-icon" 
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group relative-input">
            <label className="form-label">Confirm Password</label>
            <div className="input-with-icon">
              <FiLock className="input-icon" />
              <input 
                type="password" 
                name="confirmPassword"
                className="form-input has-icon" 
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login" className="text-gradient font-bold">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
