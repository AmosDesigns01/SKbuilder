import "./CtaStyles.css"
import RightImg from "../../assests/Group 1171274718rightimg.png"

import React from 'react'

const Cta = () => {
  return (
    <div className="cta">
        <div className="ctaText">
            <h1>LET'S COMBINE OUR STRENGTHS </h1>
            <img src={RightImg} alt="img" width={500}/>
        </div>
    </div>
  )
}

export default Cta