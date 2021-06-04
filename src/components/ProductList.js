import React, { Component } from 'react';
import Product from './Product';
import Skeleton from 'react-loading-skeleton';

class ProductList extends Component {
  state = {
    products: [],
    isLoading: true,
  };

  filterProducts(id, products) {
    const dataFiltered = products.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      products: dataFiltered,
      isLoading: false,
    });
    console.log('----', dataFiltered);
  }
  componentDidMount() {
    const { allProducts, id } = this.props;
    setTimeout(() => {
      this.filterProducts(id, allProducts);
    }, 3000);
  }
  render() {
    const { handleSelectedProduct } = this.props;
    const { products, isLoading } = this.state;
    console.log(products, 'kjhgfd');
    return (
      <main className='productList'>
        <h2 className='productListHeader'>Similar Products</h2>
        <h4 className='productListP'>you may like these products also</h4>
        <div className='productListGrid'>
          {!isLoading ? (
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleSelectedProduct={handleSelectedProduct}
              />
            ))
          ) : (
            <div className='skelton'>
              <div className='skeltonItem'>
                <Skeleton duration={3} height={400} width={1000} />
                <div>
                  <h2>
                    <Skeleton duration={3} width={500} />
                  </h2>
                  <p>
                    <Skeleton duration={3} width={800} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={700} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={400} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={900} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={800} />
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    );
  }
}
export default ProductList;
