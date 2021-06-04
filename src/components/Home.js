import React, { Component } from 'react';
import adidas from '../img/addidas.png';
import HomeDataSection from './HomeDataSection';
import HomeImageSection from './HomeImageSection';

class Home extends Component {
  state = {
    theProduct: {},
  };

  selectedProduct(id, theProduct) {
    const itemSelected = theProduct.filter((item) => {
      return item.id === id;
    });
    this.setState({
      theProduct: itemSelected[0],
    });
  }

  componentDidMount() {
    const { products, id } = this.props;
    this.selectedProduct(id, products);
  }

  render() {
    const { theProduct } = this.state;
    const { handleIncermentToCart } = this.props;

    console.log(theProduct, '85xk');
    return (
      <div className='homeAll'>
        <div className='homeImg'>
          <HomeImageSection theProduct={theProduct} />
        </div>
        <div className='homeData'>
          <img src={adidas} alt='adidas' className='homeBrandImg' />
          <HomeDataSection
            theProduct={theProduct}
            handleIncermentToCart={handleIncermentToCart}
          />
        </div>
      </div>
    );
  }
}
export default Home;
