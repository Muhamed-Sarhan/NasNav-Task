import React, { Component } from 'react';
import { faShoppingBasket, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Wrapper,
  Icon,
  CartCount,
  CartSideBar,
  EmptyCart,
  SideBarHeader,
  IconX,
} from './styles';
import Cartdetails from './cartDetails';

class Cart extends Component {
  state = {
    data: [],
  };
  render() {
    const sliderData = JSON.parse(localStorage.getItem('cart'));

    const { isToggle, setIsToggle, totalCartProducts } = this.props;
    return (
      <>
        <Wrapper onClick={() => setIsToggle(!isToggle)}>
          <Icon icon={faShoppingBasket} />
          <CartCount>{totalCartProducts}</CartCount>
        </Wrapper>
        <CartSideBar className={isToggle ? 'expand' : 'shrink'}>
          <IconX icon={faTimes} onClick={() => setIsToggle(!isToggle)} />
          <SideBarHeader>My Cart</SideBarHeader>
          <h6 className='headerCart'>Card Summary</h6>
          {totalCartProducts === 0 ? (
            <EmptyCart>Empty Cart</EmptyCart>
          ) : (
            sliderData.map((productCart) => (
              <>
                <Cartdetails productCart={productCart} />
                <h5 className='total'>
                  Total : {productCart.quantity * productCart.currentPrice} L.E
                </h5>
                <div className='buttonsInCart'>
                  <button className='okBtn'>Review Cart</button>
                  <button className='cancelBtn'>Complete Checkout</button>
                </div>
              </>
            ))
          )}
        </CartSideBar>
      </>
    );
  }
}
export default Cart;
