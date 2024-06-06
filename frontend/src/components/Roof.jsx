import React from 'react';
import roofImage from '../assets/top_2.jpg'; // Make sure you have the correct path to your image file

const Roof = () => {
  return (
    <section className="roof">
      <div 
        className="banner-img" 
        data-aos="fade-up" 
        style={{ backgroundImage: `url(${roofImage})` }} 
      ></div>
      <div className="roof-text" data-aos="fade-up">
        <h2>Glass Roof</h2>
        <p>
          Light enters through the roof, creating an airy and open feel inside the car.
        </p>
      </div>
    </section>
  );
};

export default Roof;
