import React from 'react';
import './Header.css';
import doctorImage from '../assets/images/doctor.jpg';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">MedicalFunc</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>
      <div className="hero">
        <div className="hero-left">
          <h2>Welcome</h2>
          <h1>Online Appointment</h1>
          <p>Medical Functional is most focused in helping you discover your most beautiful smile.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Consulted</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-right">
          <img src={doctorImage} alt="Doctor" />
        </div>
      </div>
    </header>
  );
};

export default Header;
