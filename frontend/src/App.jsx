import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoSection from './components/VideoSection';
import Specs from './components/Specs';
import About from './components/About';
import Interior from './components/Interior';
import Roof from './components/Roof';
import IframeVideo from './components/IframeVideo';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <header className="header-body">
        <h1 className="title">Roadster</h1>
        <p>
          The quickest car in the world,
          with record-setting acceleration,
          range and performance.
        </p>
        <div className="stats">
          <div>
            <div className="gauge">
              <img src="assets/speedometer.png" alt="Speedometer" />
              <h2>1.9<span>s</span></h2>
            </div>
            <small>0-60 mph</small>
          </div>
          <div>
            <h2><span>+</span>250<span>mph</span></h2>
            <small>Top Speed</small>
          </div>
          <div>
            <h2>620<span>miles</span></h2>
            <small>Range</small>
          </div>
        </div>
        <a href="#" className="btn">Reserve Now</a>
        <a href="#" className="btn btn-mobile">Reserve Now</a>
        <a href="#video">
          <img src="assets/arrow-down.svg" className="arrow" alt="Arrow down" />
        </a>
      </header>
      <VideoSection />
      <Specs />
      <About />
      <Interior />
      <Roof />
      <IframeVideo />
      <Footer />
    </div>
  );
}

export default App;
