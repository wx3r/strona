import React from 'react';
import './Testimonials.css';
import manInSuit from '../assets/images/man in suit.jpg';
import smilingWoman from '../assets/images/smiling woman.jpg';
import green from '../assets/images/green.jpg';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Each and Every Client is Important</h2>
      <div className="testimonial-cards">
        <div className="card">
          <img src={smilingWoman} alt="Testimonial 1" />
          <p>"Take team experts' help and see improvements immediately."</p>
          <h4>Design Mark</h4>
          <p>Chicago</p>
        </div>
        <div className="card">
          <img src={manInSuit} alt="Testimonial 2" />
          <p>"Perfect solutions to your queries and amazing support."</p>
          <h4>Graphics Mike</h4>
          <p>Texas</p>
        </div>
        <div className="card">
        <img src={green} alt="Testimonial 3" />
          <p>"Precise and affordable medical solutions to everyone."</p>
          <h4>Mike Smith</h4>
          <p>New York</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
