import React, { useEffect, useState } from 'react';
import './Hero.css';

import img1 from './assets/banner.png';
import img2 from './assets/banner1.png';

const images = [img1, img2];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
  <div className="hero-images">
    {images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`Slide ${i + 1}`}
        className={`hero-img ${i === index ? 'active' : ''}`}
      />
    ))}
    <div className="hero-overlay" /> {/* ✅ Added */}
  </div>
<div className="hero-content">
  <div className="content-overlay"></div> {/* 🔹 moved inside content */}
  <h1>Experience Excellence in Care</h1>
  <p>Welcome to Shifa Diagnostic & General Hospital</p>
  <button>Book an Appointment</button>
</div>

</section>

  );
};

export default Hero;
