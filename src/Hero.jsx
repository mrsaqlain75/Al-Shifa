import React, { useEffect, useState } from 'react';
import './Hero.css';

import img1 from './assets/hero1.webp';
import img2 from './assets/hero1.webp';
import img3 from './assets/hero1.webp';

const images = [img1, img2, img3];

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
      </div>

      <div className="hero-content">
        <h1>Experience Excellence in Care</h1>
        <p>Welcome to Shifa Diagnostic & General Hospital</p>
        <button>Book an Appointment</button>
      </div>
    </section>
  );
};

export default Hero;
