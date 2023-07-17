import "./HeroStyles.css"
import React from 'react'
import Praise from "../../assests/Grouppraise.png"
import RightImg from "../../assests/Group 1171274718rightimg.png"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='homeHero'>
        <div className="hero-text">
          <div className="left">
            <h1>EXPERIENCE THE EPITOME OF HOME COMFORT.</h1>
            <p>Our international brand specializes in property 
              appraisal, sales, purchases, and investments. Trust 
              us to deliver exceptional service and help you find 
              your perfect real estate opportunity.
            </p>
            <img src={Praise} alt="image" width={150}/>
          </div>
          <div className="right">
            <img src={RightImg} alt="img" width={600}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero