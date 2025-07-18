import React from 'react';
import Header from './Header'
import Hero from './Hero'
import './App.css'
import Facilities from './Facilities';
import DoctorCarousel from './DoctorCarousel';
import CEOSection from './CEOSection';


import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Facilities />
      <DoctorCarousel />
      <CEOSection />
      <Footer /> {/* 👈 Add the Footer at the end */}
    </>
  );
}

export default App;
