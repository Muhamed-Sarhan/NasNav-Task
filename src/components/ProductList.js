import React, { Component } from 'react';
import Product from './Product';

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
        <h2 className='productListHeader'>Products</h2>
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
            <h1>None</h1>
          )}
        </div>
      </main>
    );
  }
}
export default ProductList;
