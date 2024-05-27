// Heros.js
import React, { useEffect } from 'react';
import videoSource from '../assets/images/tech-video.mp4';
import './Heros.css';
import OurServices from './OurServices';
import PrestigiousComponent from './PrestigiousComponent';
// import People from './People';
import Portfolio from './Portfolio';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
  useEffect(() => {
    const letters = document.querySelectorAll('.signature-animation');

    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.20}s`;
    });
  }, []);

  return (
    <>
    <div className="hero-section">
        <video className="hero-video" autoPlay loop muted>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="row text-center mt-3">
          <div className="col-md-12 col-12">
            <div className='styles_mainText__mgG0G'
              style={{
                // color: "#ffff",
                fontWeight: "bold",
                // opacity: "0.33",
                marginTop: "110px",
                // paddingBottom: 5
              }}
            >
              Strategise. Design. Develop. Grow.
            </div>
      <h2 className="styles_title__erKnM">We develop. You prosper.</h2>
      <p className="styles_mainText__mgG0G">
      We are a devoted and determined group of developers, designers,<br/> champions of customer satisfaction, <br/> tech aficionados, enthusiasts, <br/> and operational experts. 
      We assist our clients <br/> and collaborators in turning <br/> their concepts into reality.
      </p>
      <div className='display-flex'>
        <Link to="/contact">
          <button className='btn btn-danger btn-lg' style={{ marginRight: '10px' }}>Let's Talk</button>
        </Link>
        <Link to="/middle">
          <button className='btn btn-light btn-lg'>See Our Work</button>
        </Link>
      </div>
    </div>
        </div>
       
    </div>
    
    <PrestigiousComponent/>
    <OurServices/>
    {/* <People/> */}
    <Portfolio/>
    </>
  );
};

export default Home;
