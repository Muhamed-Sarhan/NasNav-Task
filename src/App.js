import React, { Component } from 'react';
import GeneralNav from './components/GeneralNav';
import BrandsNav from './components/BrandsNav';
import './styles/app.scss';
import Categories from './components/Categories';
import Breadcrumb from './components/Breadcrumbs';
import { Divider } from '@material-ui/core';
import data from './services/data';
import ProductList from './components/ProductList';
import Home from './components/Home';
import Footer from './components/footer';

const { products } = data;
class App extends Component {
  state = {
    selectedProductId: 1,
    products,
    totalCartProducts: 0,
  };

  handleIncrementCartProducts = (quantity) => {
    const { totalCartProducts } = this.state;
    this.setState({
      ...totalCartProducts.state,
      totalCartProducts: totalCartProducts + quantity,
    });
  };

  handleAddToCart = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };

    products[index].isInCart = !products[index].isInCart;

    this.setState({ products });
  };

  handleSelectedProduct = (id) => {
    console.log(id);
  };

  render() {
    const { selectedProductId, totalCartProducts } = this.state;
    console.log(this.state.products, 'vvxx');
    return (
      <div className='App'>
        <GeneralNav />
        <BrandsNav totalCartProducts={totalCartProducts} />
        <Categories />
        <Breadcrumb />
        <Divider />
        <div className='container'>
          <Home
            products={products}
            id={selectedProductId}
            handleIncermentToCart={this.handleIncrementCartProducts}
          />
          <ProductList
            allProducts={products}
            id={selectedProductId}
            handleSelectedProduct={this.handleSelectedProduct}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
