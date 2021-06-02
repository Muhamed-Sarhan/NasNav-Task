import React from 'react';
import adidas from '../img/addidas.png';

export default function Home({ products }) {
  return (
    <div className='homeAll'>
      <div className='homeImg'>Hello</div>
      <div className='homeData'>
        <img src={adidas} className='homeBrandImg' />
        <h3>{products.title}</h3>
      </div>
    </div>
  );
}
