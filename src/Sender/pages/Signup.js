import React from 'react'
import './css/Signup.css'
import { FaShippingFast } from 'react-icons/fa';

const Signup = () => {
  return (
    <div className="register-container">
      <div className="company-banner">
        <div className="company-logo">
          <FaShippingFast className="icon" />
          <h1 className="company-name">Stake Express</h1>
        </div>
        <p className="slogan">
          Your trusted logistics partner for fast and reliable shipping
        </p>
      </div>

      <div className="form-box">
        <form>
          <h2>Create Your Account</h2>
          <p>Join thousands of satisfied customers who trust us with their shipping needs</p>

          <div className="section">
            <h3>Personal Information</h3>
            <div className="input-group">
              <input type="text" placeholder="Full Name *" />
              <input type="email" placeholder="Email Address *" />
              <input type="tel" placeholder="Phone Number *" />
            </div>
          </div>

          <div className="section">
            <h3>Company Information</h3>
            <div className="input-group">
              <input type="text" placeholder="Company Name *" />
              <input type="text" placeholder="Company Website" />
              <input type="text" placeholder="City *" />
              <input type="text" placeholder="Street Address *" />
            </div>
          </div>

          <div className="section">
            <h3>Shipping Information</h3>
            <select defaultValue="">
              <option value="" disabled>Select the type of products you typically ship</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Furniture</option>
            </select>
          </div>

          <button type="submit">Create Account & Start Shipping</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  )
}

export default Signup
