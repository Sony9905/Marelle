import React from 'react';
import ParticleBackground from '../ReactParticles/ReactParticles';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <ParticleBackground />
      <div className="content">
        <h1>Happy 6-Month Anniversary!</h1>
        <p>Thank you for the wonderful journey together. Just 2 more weeks until I'm the longest!</p>
      </div>
    </div>
  );
};

export default Home;