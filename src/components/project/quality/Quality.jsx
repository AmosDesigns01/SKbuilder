import "./QualityStyles.css"
import AboutImg from "../../../assests/Group 1171274710aboutusimg.png"
import React from 'react'
import QualityImg from "../../../assests/quality.png"

const Quality = () => {
  return (
    <div>
        <div className="quality">
            <div className="head">
                <img src={AboutImg} width={70} alt="image"/>
                <h2>Our Quality</h2>
            </div>
            <div className="quality-text">
                <div className="left">
                    <h1>DESIGN A COZY AND FRESH INTERIOR.</h1>
                    <p>Crafting an Inviting Haven: Unveiling the 
                        Art of Designing a Cozy and Fresh Interior 
                        for Unmatched Comfort and Serenity
                    </p>
                </div>
                <div className="right">
                    <img src={QualityImg} width={700} alt="image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quality