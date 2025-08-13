import React, { useEffect } from 'react';
import '../css/LoginPage.css';
import { FaShippingFast } from 'react-icons/fa';

const Login = () => {
  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  return (
    <>
      <div className="page-overlay"></div>
      <div className="login-banner">
        <div className="login-logo">
          <FaShippingFast className="login-icon" />
          <h1 className="login-title">Stake Express</h1>
        </div>
        <p className="login-slogan">
          Your trusted logistics partner for fast and reliable shipping
        </p>
      </div>

      <div className="login-container">
        <div className="login-form-wrapper">
          <form>
            <h2 className="login-form-title">Sign In to Your Account</h2>
            <p className="login-form-subtitle">
              Welcome back! Please enter your credentials to continue
            </p>

            <div className="login-input-group">
              <input type="email" placeholder="Email Address *" />
              <input type="password" placeholder="Password *" />
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/" className="login-forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="login-submit-button">
              Sign In & Continue
            </button>
            <p className="login-footer-text">
              Don’t have an account? <a href="/signup">Sign up here</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
