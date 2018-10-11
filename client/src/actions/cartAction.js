import axios from 'axios';
import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, USER_CHECKOUT } from './types';

export const getCart = () =>  {
  return {
    type: GET_CART
  }
}

// addToCart
export const addToCart = (id, count, name, price) => (
  {
    type: ADD_TO_CART,
    id,
    count,
    name,
    price
  }
);

// removeFromCart
export const removeFromCart = (id) => (
  {
    type: REMOVE_FROM_CART,
    id,
  }
);

// updateCartItem
export const updateCartItem = (id, count) => (
  {
    type: UPDATE_CART_ITEM,
    id,
    count,
  }
);

// checkoutCartItem
export const userCheckout = (id, email, phone, address, count, name, price) => dispatch => {
    axios.post('/api/transactions', {
      id,
      email,
      phone,
      address,
      count,
      name,
      price
    })
      .then(res => {
        dispatch({
          type: USER_CHECKOUT,
          payload: res.data
        })
      })
  };
