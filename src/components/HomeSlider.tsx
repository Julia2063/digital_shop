import React from 'react';
import Slider from 'react-slick';

import slider_1 from '../assets/images/slider_1.png';
import slider_2 from '../assets/images/slider_2.png';
import slider_3 from '../assets/images/slider_3.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function HomeSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="slider-container">
        <Slider
          {...settings}
          autoplay
          autoplaySpeed={3000}
          className="slider"
        >
          <img
            src={slider_1}
            alt="mobile"
            className="slider__image"
          />
          <img
            src={slider_2}
            alt="mobile"
            className="slider__image"
          />
          <img
            src={slider_3}
            alt="mobile"
            className="slider__image"
          />
        </Slider>
      </div>
    </>
  );
}
