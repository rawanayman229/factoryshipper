import React from 'react';
import './css/Login.css';
import { FaShippingFast } from 'react-icons/fa';

const Login = () => {
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
          <h2>Sign In to Your Account</h2>
          <p>Welcome back! Please enter your credentials to continue</p>

          <div className="section">
            <div className="input-group single">
              <input type="email" placeholder="Email Address *" />
            </div>
            <div className="input-group single">
              <input type="password" placeholder="Password *" />
            </div>
            <div className="options-row">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/" className="forgot-link">Forgot password?</a>
            </div>
          </div>

          <button type="submit">Sign In & Continue</button>
        </form>

        <p className="login-link">
          Don’t have an account? <a href="/">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
