import React from 'react';
import interiorImage from '../assets/interior.jpg';

const Interior = () => {
  return (
    <section className="interior">
      <img src={interiorImage} data-aos="fade-up" alt="Interior" />
      <div>
        <h2>Interior</h2>
        <p>The First supercar to Set Ultimate Performance in the World</p>
      </div>
    </section>
  );
};

export default Interior;
