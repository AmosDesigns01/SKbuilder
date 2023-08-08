import "./AboutStyle.css";
import React from 'react';
import AboutImg from "../../assests/Group 1171274710aboutusimg.png"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutHero">
        <div className="about-text">
            <div className="left">
                <div className="head">
                    <img src={AboutImg} width={70} alt="image"/>
                    <h2> About Us</h2>
                </div>
                <div className="down">
                    <p>We take great pride in ensuring the satisfaction 
                        of our customers. That's why we proudly guarantee 
                        the quality and reliability of our products.
                    </p>
                    <Link to="/"><button>Get Started</button></Link>
                </div>
            </div>
            <div className="right">
                <h1>WE'VE FOUND LUXURY HOMES FOR CLIENTS FOR A DECADE.</h1>
                <p className="rightpara">We take great pride in ensuring the satisfaction of our customers, 
                    which is why we guarantee that the products we sell will bring happiness 
                    to each and every customer. Our genuine care for customer satisfaction is 
                    what sets us apart.
                </p>

                <div className="experience">
                    <div>
                        <h1>10 <i class="fa-solid fa-plus"></i></h1>
                        <p>Award Gained</p>
                    </div>
                    <div>
                        <h1>20 <i class="fa-solid fa-plus"></i></h1>
                        <p>Years Of Experience</p>
                    </div>
                    <div>
                        <h1>598 <i class="fa-solid fa-plus"></i></h1>
                        <p>Rented Home Stay</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About