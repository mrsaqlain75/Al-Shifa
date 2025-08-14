import React from 'react';
import './Facilities.css';
import { FaXRay, FaHeartbeat, FaFlask, FaStore, FaBrain, FaBed, FaProcedures, FaWaveSquare } from 'react-icons/fa';

const facilities = [
  { name: 'X-RAY', icon: <FaXRay /> },
  { name: 'ECG', icon: <FaHeartbeat /> },
  { name: 'Laboratory', icon: <FaFlask /> },
  { name: 'Medical Store', icon: <FaStore /> },
  { name: 'CT Scan & EEG', icon: <FaBrain /> },
  { name: 'Male & Female Wards', icon: <FaBed /> },
  { name: 'OT', icon: <FaProcedures /> },
  { name: 'Ultra Sound', icon: <FaWaveSquare /> },
];

const Facilities = () => {
  return (
    <section className="facilities" id="facilities">
      <h2>What We Offer?</h2>
      <div className="facility-grid">
        {facilities.map((item, idx) => (
          <div key={idx} className="facility-card">
            <div className="icon">{item.icon}</div>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
