import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import VideoPlayer from '../components/player/VideoPlayer';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <VideoPlayer/>
    </div>
  )
}

export default Home