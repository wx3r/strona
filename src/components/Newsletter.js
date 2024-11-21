import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>JOIN US</h2>
      <p>Problems trying to resolve the conflict between the two major realms of classical physics: Newtonian mechanics and quantum mechanics.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Your Email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
