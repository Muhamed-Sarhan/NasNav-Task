import React from 'react';
import Product from './Product';

export default function ProductList({ products }) {
  return (
    <main className='productList'>
      <h2 className='productListHeader'>Products</h2>
      <div className='productListGrid'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
