import React from 'react';
import Header from './components/Header.js';
import OurActivity from './components/OurActivity.js';
import LeadingMedicine from './components/LeadingMedicine.js';
import Doctors from './components/Doctors.js';
import Pricing from './components/Pricing.js';
import Testimonials from './components/Testimonials.js';
import Newsletter from './components/Newsletter.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <OurActivity />
      <LeadingMedicine />
      <Doctors />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
