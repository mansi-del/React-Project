import React from 'react';
import './Style/aboutus.css';
import aboutImage from './Images/img1.jpg';

const AboutUs = () => (
  <div id="about_us" className="about-us-container"> 
    <h2 className="about-us-heading">About Us</h2>  
    <div className="about-us-content">
      <img src={aboutImage} alt="About Us" className="about-us-image" />  
      <p className="about-us-text">
        Welcome to our coffee house! We serve the finest coffee with freshly roasted beans.
        Our passion for coffee is at the heart of everything we do. Established with a vision to create the perfect space for coffee lovers, we bring together the finest beans, expert baristas, and a cozy environment that feels like home.
        Our coffee is made from carefully selected, freshly roasted beans sourced from the best coffee-growing regions around the world. Whether you prefer a rich espresso, a frothy cappuccino, or a smooth latte, we ensure each cup is brewed to perfection, delivering an unforgettable experience with every sip.
        But we are more than just a coffee shop. We are a community hub — a place where people come to connect, relax, and recharge.
      </p>  
    </div>
  </div>
);

export default AboutUs;
