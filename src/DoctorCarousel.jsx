import React, { useRef } from 'react';
import './DoctorCarousel.css';
import doctors from './data/doctors.json';

const DoctorCarousel = () => {
  const scrollRef = useRef();

  const scroll = (dir) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    container.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="doctor-carousel" id="doctors">
      <h2>Meet Our Specialists</h2>
      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>&#10094;</button>

<div className="carousel-container" ref={scrollRef}>
  {doctors.map((doc) => (
    <div className="doctor-card" key={doc.id}>
      <img src={doc.image} alt={doc.name} />
      <h4>{doc.name}</h4>
      <p>{doc.qualification}</p>
    </div>
  ))}
</div>

        <button className="scroll-btn right" onClick={() => scroll('right')}>&#10095;</button>
      </div>
    </section>
  );
};

export default DoctorCarousel;
