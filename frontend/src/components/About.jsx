import React from 'react';
import backImage from '../assets/back.jpg';

const About = () => {
  return (
    <section className="about">
      <img src={backImage} data-aos="fade-up" alt="About" />
      <div className="about-text">
        <h2>Designed For Performance and Aero Efficiency</h2>
        <p>
          As an All-Electric Super Car,
          Roadster Maximize the
          Potential of aerodynamic Efficiency Engineering with record-setting performance and efficiency.
        </p>
      </div>
    </section>
  );
};

export default About;
