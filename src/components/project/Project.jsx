import "./ProjectStyle.css";
import AboutImg from "../../assests/Group 1171274710aboutusimg.png"
import ImageSlider from '../../components/project/imageslider/ImageSlider';
import SliderData  from '../../components/project/imageslider/SliderData';


import React from 'react'

const Project = () => {
  return (
    <div className="project">
        <div className="project-text">
            <div className="left">
                <div className="head">
                    <img src={AboutImg} width={70} alt="image"/>
                    <h2>Our Project</h2>
                </div>
            </div>
            <div className="right">
                <p>Together, we can conquer challenges, utilize our strengths, 
                    and achieve remarkable success in this ambitious home project.</p>
            </div>
        </div>
        <div className="imgslider">
            <ImageSlider slides={SliderData} />;
        </div>
    </div>
  )
}

export default Project