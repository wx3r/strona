import React from 'react';
import './OurActivity.css';
import healthIcon from '../assets/images/health.png';
import hospitalIcon from '../assets/images/hospital bd.png';
import briefcaseIcon from '../assets/images/briefcase.png';

const OurActivity = () => {
  return (
    <section className="activity">
      <h2>Our Activity</h2>
      <div className="activity-cards">
        <div className="card">
          <img src={hospitalIcon} alt="Emergency Case"className='icon' />
          <h3>Emergency Case</h3>
          <p>The greatest standard of clinical projects.</p>
        </div>
        <div className="card">
          <img src={healthIcon} alt="Health Queries"className='icon' />
          <h3>Health Queries</h3>
          <p>Expert advice for your health-related queries.</p>
        </div>
        <div className="card">
          <img src={briefcaseIcon} alt="Business Procedures" className='icon'/>
          <h3>Business Procedures</h3>
          <p>Solutions for corporate health challenges.</p>
        </div>
      </div>
    </section>
  );
};

export default OurActivity;
