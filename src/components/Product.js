import React from 'react';
import adidas from '../img/addidas.png';
import SimpleRating from './Rating';

export default function Product({ product, handleSelectedProduct }) {
  return (
    <div
      className='cardStyle'
      onClick={() => handleSelectedProduct(product.id)}
    >
      <img src={product.mainImg} className='imgCard' alt='s' />
      <h3>
        <strong>{product.title}</strong>
      </h3>
      <div className='displayCartItems'>
        <div className='price'>
          <h3 className='currentPrice'>
            {product.currentPrice} {product.currency}
          </h3>
          <div className='oldandsale'>
            <h4 className='oldPrice'>
              <strong>
                {product.oldPrice} {product.currency}
              </strong>
            </h4>
            <div className='saleBox'>
              <strong>{product.sale} %</strong>
            </div>
          </div>
        </div>

        <div>
          <img src={adidas} alt='adidas' className='imgBrand' />
        </div>
      </div>
      <div className='ratingBox'>
        <SimpleRating value={product.rate} isReadOnly />
        <h3 className='rateP'>
          <strong>{product.rate} of 5</strong>
        </h3>
      </div>
      <div className='mallBox'>
        <h5>
          PickedUp From <strong className='mallName'>Genena Mall</strong>
        </h5>
      </div>
    </div>
  );
}
