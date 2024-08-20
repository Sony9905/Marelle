import React from 'react';
import ParticleBackground from '../ReactParticles/ReactParticles';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <ParticleBackground />
      <div className="content">
        <h1>Happy 8-Month Anniversary!</h1>
        <p>Sorry it was down for so long!</p>
      </div>
    </div>
  );
};

export default Home;