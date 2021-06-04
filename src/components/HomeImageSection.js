import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../img/1.jpeg';
import img2 from '../img/2.jpeg';
import img3 from '../img/3.jpeg';
import img4 from '../img/4.jpeg';
export default function HomeImageSection({ theProduct }) {
  const carouselImages = theProduct.image;
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
        <div className='carousel-image'>
          <img src={img1} alt='product' />
        </div>
        <div className='carousel-image'>
          <img src={img2} alt='product' />
        </div>
        <div className='carousel-image'>
          <img src={img3} alt='product' />
        </div>
        <div className='carousel-image'>
          <img src={img4} alt='product' />
        </div>
      </Carousel>
    </div>
  );
}
