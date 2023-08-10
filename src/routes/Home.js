import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import VideoPlayer from '../components/player/VideoPlayer';
import Project from '../components/project/Project';
import Cta from '../components/cta/Cta'
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <VideoPlayer/>
      <Project/>
      <Cta />
      <Footer/>
    </div>
  )
}

export default Home