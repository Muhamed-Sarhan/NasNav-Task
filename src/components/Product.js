import React from 'react';
import adidas from '../img/addidas.png';
import SimpleRating from './Rating';

export default function Product({ product }) {
  return (
    <div className='cardStyle'>
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
            <div>
              <strong className='saleBox'>{product.sale} %</strong>
            </div>
          </div>
        </div>

        <div>
          <img src={adidas} className='imgBrand' />
        </div>
      </div>
      <SimpleRating product={product} />
      <div className='mallBox'>
        <h5>
          PickedUp From <strong className='mallName'>Genena Mall</strong>
        </h5>
      </div>
    </div>
  );
}
