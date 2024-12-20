import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import {classes} from './Carousel.module.css'
import { img } from './Img/data'

const CarouselEffect = () => {
  return (
    <div>
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
          img.map((imageItemLink) => (
            <div className={classes.hero_img}>
              <img src={imageItemLink} alt="" />
            </div>
          ))
        }
      </Carousel>
    </div>
  );
};

export default CarouselEffect;