import React from 'react'
import {Carousel} from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from '../assets/sibelly1.jpg'
import img2 from '../assets/sibelly2.jpg' 
import img3 from '../assets/sibelly3.jpg'
import img4 from '../assets/sibelly4.jpg'
import img5 from '../assets/sibelly5.jpg'
import img6 from '../assets/sibelly6.jpg'
import "./Slide.css"
// import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'



const SliderV1 = () => {
   
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
};

  return (
    
    
    <Carousel
      autoPlay
      infiniteLoop
      swipeable={true}
      showArrows={true}
      emulateTouch={true}
      animateIn="fadeIn"
      axis="horizontal"
      centerSlidePercentage
      dynamicHeight={true}
      
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = { marginLeft: 20, color: "white", cursor: "pointer" };
        const style = isSelected
          ? { ...defStyle, color: "red" }
          : { ...defStyle };
        return (
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            {"cust " + index}
          </span>
        );
      }}
    >
      <div key="slide1" >
        <img src={img1} />
      </div>
      <div key="slide1">
        <img src={img2} />
      </div>
      <div key="slide1">
        <img src={img3} />
      </div>
      <div key="slide1">
        <img src={img4} />
      </div>
      <div key="slide1">
        <img src={img5} />
      </div>
      <div key="slide1">
        <img src={img6} />
      </div>
    </Carousel>
    
);
    }


export default SliderV1;