import React from 'react';

const VideoSection = () => {
  return (
    <section id="video">
      <video
        autoPlay
        muted
        loop
        data-aos="fade-up"
      >
        <source src="assets/roadster-loop.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
