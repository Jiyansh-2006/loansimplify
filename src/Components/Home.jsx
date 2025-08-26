import React from 'react';
import { useNavigate } from 'react-router-dom';
import signImg from '../assets/Signeasy.jpg';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navigation Header */}
      <header className="home-header">
        <div className="logo-container">
          <h1 className="logo">SIGN EASY</h1>
        </div>
        <nav className="navigation">
          <a href="#" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">
              Instant<br />
              Aadhaar-Based<br />
              Document<br />
              Verification
            </h2>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/login')}
              >
                Sign In
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => navigate('/register')}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src={signImg} alt="Document Verification" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer" id="contact">
        <div className="footer-content">
          <p>Contact us: support@aadhaarverify.com | +91 98765 43210</p>
          <p className="copyright">&copy; 2025 AadhaarVerify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
