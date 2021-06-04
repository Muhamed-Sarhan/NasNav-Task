import React, { Component } from 'react';
import SimpleRating from './Rating';
import image from '../img/1.jpeg';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Divider } from '@material-ui/core';

class HomeDataSection extends Component {
  state = {
    selectedSize: '',
    selectedColor: 0,
    quantity: 1,
  };

  handleAddToCart = () => {
    const { handleIncermentToCart, theProduct } = this.props;
    const { quantity, selectedColor, selectedSize } = this.state;
    handleIncermentToCart(quantity);
    /* add product to local storge */
    const newCartItem = {
      ...theProduct,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    };
    console.log('------!!!!!!-----', newCartItem);
    const productfromStorage = localStorage.getItem('cart');
    if (productfromStorage) {
      let carTProducts = JSON.parse(productfromStorage);
      carTProducts.push(newCartItem);
      localStorage.setItem('cart', JSON.stringify(carTProducts));
      console.log('11111', carTProducts);
    } else {
      localStorage.setItem('cart', JSON.stringify([newCartItem]));
    }
  };

  handleIncreaseQuantity = () => {
    console.log(this.state.quantity);
    this.setState({
      quantity: this.state.quantity++,
      ...this.state,
    });
  };

  handleDecreaseQuantity = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({
        quantity: this.state.quantity--,
        ...this.state,
      });
    }
  };

  render() {
    const { theProduct } = this.props;
    const {
      title,
      gender,
      rate,
      totalReview,
      currentPrice,
      oldPrice,
      sale,
      color,
      size,
    } = theProduct;

    console.log(theProduct, 'TmT');

    return (
      <div>
        <h3>{title}</h3>
        <h4>{gender}</h4>
        <div className='ratingBoxHome'>
          <SimpleRating value={4} isReadOnly />
          <h3 className='rateD'>
            <strong>{rate} of 5</strong>
          </h3>
          <h3 className='ratingTotal'>
            <strong>{totalReview} Rates</strong>
          </h3>
        </div>

        <div className='ratingBoxHome'>
          <h2 className='currenrPriceHome'>{currentPrice} LE</h2>
          <h3 className='oldPriceHome'>{oldPrice} LE</h3>
          <h3 className='saleOnHome'>
            <strong className='saleBox'>{sale} %</strong>
          </h3>
        </div>
        <Divider className='line' />
        <div>
          <h2>Size</h2>

          <div className='circleSize'>
            <p className='size'>
              <strong>small</strong>
            </p>
          </div>
        </div>
        <Divider className='line' />
        <div>
          <h2>Colors</h2>

          <div className='imgShape'>
            <img src={image} alt='color1' className='imgSize' />
          </div>
        </div>
        <Divider className='line' />
        <div className='quantity'>
          <h2>Quantity</h2>
          <div className='quantity-control'>
            <button
              className='plusIcon'
              onClick={() => this.handleIncreaseQuantity()}
            >
              <AddIcon />
            </button>
            <div>
              <strong>{this.state.quantity}</strong>
            </div>
            <button
              className='plusIcon'
              onClick={() => this.handleDecreaseQuantity()}
            >
              <RemoveIcon />
            </button>
          </div>
          <div>
            <button
              onClick={() => this.handleAddToCart()}
              className='add-to-cart'
            >
              <strong>Add to Cart</strong>
            </button>
            <button className='pick-up'>
              <strong>Pick up from store</strong>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeDataSection;
