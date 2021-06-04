import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  display: block;
  margin: 0 5px;
  cursor: pointer;
  position: relative;
`;

export const Icon = styled(FontAwesomeIcon)`
  padding: 5px;
  font-size: 30px;
  color: #000000;
`;
export const IconX = styled(FontAwesomeIcon)`
  padding: 5px;
  font-size: 30px;
  color: #000000;
  position: relative;
  right: -50%;
  top: 3%;
`;

export const CartCount = styled.span`
  position: absolute;
  bottom: 20px;
  right: -10px;
  padding: 3px 7px;
  border-radius: 50px;
  background: #fff100;
  color: #000000;
  font-size: 12px;
  font-weight: 600;
`;

export const CartSideBar = styled.div`
  z-index: 100000000000000;
  width: 350px;
  background: #ffffff;
  top: 0;
  right: 0;
  padding: 25px;
  position: fixed;
  overflow: auto;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all ease-in-out 0.3s;
  &.expand {
    transition: all ease-in-out 0.3s;
    right: 0;
  }
  &.shrink {
    transition: all ease-in-out 0.3s;
    right: -400px;
  }
`;

export const EmptyCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`;

export const SideBarHeader = styled.div`
  font-weight: 600;
  font-size: 26px;
  color: #542e90;
  position: relative;
  padding: 15px 0;
`;
