import React from 'react';
import './LeadingMedicine.css';
import syringeImage from '../assets/images/syringe.png';

const LeadingMedicine = () => {
  return (
    <section className="leading-medicine">
      <div className="content">
        <h2>Leading Medicine</h2>
        <p>Driven in helping to discover the best clinical solutions. Focus on the essence of clinical projects and improve outcomes.</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="image">
        <img src={syringeImage} alt="Syringe" className='syringe'/>
      </div>
    </section>
  );
};

export default LeadingMedicine;
