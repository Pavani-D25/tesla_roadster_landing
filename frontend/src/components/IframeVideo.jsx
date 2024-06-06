import React from 'react';

const IframeVideo = () => {
  return (
    <section className="iframe-video">
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/249563752?h=60746b212b&color=ff0303"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Roadster Video"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <div className="action">
        <p>Watch the Roadster Unveil. November 16, 2017</p>
        <span className="line"></span>
        <a href="#" className="btn">Reserve Now</a>
        <a href="#" className="btn">Get Newsletter</a>
      </div>
    </section>
  );
};

export default IframeVideo;
