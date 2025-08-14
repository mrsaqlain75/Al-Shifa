import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>Shifa Diagnostic & General Hospital Chitral</h3>
          <p>Providing quality healthcare with compassion and care since 2016.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#features">Services</a></li>
            <li><a href="#pricing">Specialists</a></li>
            <li><a href="#support">Our Message</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p><FaMapMarkerAlt /> PIA Chowk, Chitral Town</p>
          <p><FaPhoneAlt /> +92 307 5144507</p>
          <p><FaEnvelope /> info@shifadiagnostic.com</p>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100063922332309"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Shifa Diagnostic & General Hospital Chitral. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
