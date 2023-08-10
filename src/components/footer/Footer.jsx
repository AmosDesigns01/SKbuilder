import "./FooterStyles.css";
import Logo from "../../assests/sklogo.png";
import { Link } from "react-router-dom";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="head">
            <img src={Logo} alt="logo" width={150} />
            <p>We take great pride in ensuring the satisfaction
                of our customers, which 
            </p>

            <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
       <div className="line" />

        <ul className="footer-menu">
            <Link to="/"><div className="link">HOME</div></Link>
            <Link to="/"><div className="link">ABOUT</div></Link>
            <Link to="/"><div className="link">PROPERTIES</div></Link>
            <Link to="/"><div className="link">BLOG</div></Link>
            <Link to="/"><div className="link">PRICING</div></Link>
        </ul>
        
    </div>
  )
}

export default Footer