import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import bgImage from './images/b2.jpg';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth');
  };

  return (
    <div 
      className="landing-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="landing-container">
        <div className="hero-section">
          <h1 className="hero-title">
            Welcome to <span className="highlight">MediCare</span>
          </h1>
          <p className="hero-subtitle">
            Your comprehensive healthcare companion for better medication management
          </p>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">💊</div>
            <h3>Smart Medication Tracking</h3>
            <p>Never miss a dose with our intelligent reminder system</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Easy Access</h3>
            <p>Manage your health from anywhere with our mobile-friendly platform</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Private</h3>
            <p>Your health information is protected with industry-standard security</p>
          </div>
        </div>

        <div className="description-section">
          <h2>About MediCare</h2>
          <p>
            MediCare is a revolutionary healthcare platform designed to simplify your medication management. 
            Our intelligent system helps you stay on track with your treatment plans, provides timely reminders, 
            and gives you complete control over your healthcare journey.
          </p>
          <p>
            Whether you're managing multiple medications or just need help staying organized, 
            MediCare provides the tools and support you need for better health outcomes.
          </p>
        </div>

        <div className="cta-section">
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
          <p className="cta-text">Join thousands of users who trust MediCare with their health</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
