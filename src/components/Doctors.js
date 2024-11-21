import React from 'react';
import './Doctors.css';
import doctor1 from '../assets/images/doctor 1.jpg';
import doctor2 from '../assets/images/doctor 2.jpg';
import doctor3 from '../assets/images/doctor 3.jpg';

const Doctors = () => {
  return (
    <section className="doctors">
      <h2>Our Doctors Specialize in You</h2>
      <div className="doctor-cards">
        <div className="card">
          <img src={doctor1} alt="Doctor 1" />
          <h3>English Department</h3>
          <p>Providing expert care for your health.</p>
        </div>
        <div className="card">
          <img src={doctor2} alt="Doctor 2" />
          <h3>Health Specialist</h3>
          <p>Advanced solutions for medical queries.</p>
        </div>
        <div className="card">
          <img src={doctor3} alt="Doctor 3" />
          <h3>Optical Department</h3>
          <p>Precision and care for your eyes.</p>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
