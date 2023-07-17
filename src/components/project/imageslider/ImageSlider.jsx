import "./ImageSliderStyles.css";
import SliderData from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import React, {useState} from 'react'

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
      <section className='slider'>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='travel image' className='image' />
              )}
            </div>
          );
        })}

        <div className="imagebtn">
            <FaArrowAltCircleLeft size={45} className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight size={45} className='right-arrow' onClick={nextSlide} />
        </div>
        
      </section>
  )
}

export default ImageSlider