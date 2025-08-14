import React from 'react';
import './CEOSection.css';
import ceoImage from './assets/Shuja.jpg'; // Replace with your actual image path

const CEOSection = () => {
  return (
    <section className="ceo-section" id="ceo-section">
      <div className="ceo-image">
        <img src={ceoImage} alt="CEO" />
      </div>
      <div className="ceo-text">
        <h2>Message from Our CEO</h2>
        <p>
          At Shifa Diagnostic & General Hospital, we are committed to providing the highest quality healthcare to our community. Our experienced medical staff, modern facilities, and patient-focused philosophy guide everything we do. Whether you're coming in for a routine checkup or specialized treatment, we ensure that your care is compassionate, efficient, and effective.
        </p>
        <p>
          Thank you for choosing us as your healthcare partner. We pledge to continue evolving and innovating in order to meet your needs and exceed your expectations.
        </p>
        <p>
          — Dr. Shuja, CEO
        </p>
      </div>
    </section>
  );
};

export default CEOSection;
