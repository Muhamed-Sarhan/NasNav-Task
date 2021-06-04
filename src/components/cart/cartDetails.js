import React from 'react';

export default function Cartdetails({ productCart }) {
  return (
    <>
      <div className='cart'>
        <div className='img-of-cart'>
          <img src={productCart.mainImg} />
        </div>
        <div className='content-of-cart'>
          <p>{productCart.title}</p>
          <p className='quantity-cart'>Quantity : {productCart.quantity}</p>
          <div className='price-remove'>
            <p>{productCart.currentPrice} LE</p>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </>
  );
}
