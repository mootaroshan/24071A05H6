import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Add authentication logic here
  };

  return (
    <div className="auth-page">
      <div className="auth-container glass-panel animate-fade-in">
        <div className="auth-header">
          <h2>Welcome <span className="text-gradient">Back</span></h2>
          <p>Login to your account to book tickets</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
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

          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password text-gradient">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register" className="text-gradient font-bold">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
