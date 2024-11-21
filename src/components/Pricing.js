import React from 'react';
import './Pricing.css';
import heart from '../assets/images/heart.png';

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-cards">
        <div className="card">
        <img src={heart} alt="heart"className='heart' />
          <h3>Free</h3>
          <p>$0/month</p>
        </div>
        <div className="card">
        <img src={heart} alt="heart" className='heart'/>
          <h3>Pro</h3>
          <p>$19/month</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
