/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { CartState } from '../../types/CartTypes';
import { addToCart, checkout, deleteFromCart } from './actions';

const initialState: CartState = {
  cartItems: []
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const { payload } = action;
      const itemIndex = state.cartItems.findIndex((item) => item.productId === payload);
      const newCartItems = [...state.cartItems];

      if (itemIndex !== -1) {
        newCartItems[itemIndex] = {
          productId: payload,
          quantity: newCartItems[itemIndex].quantity + 1
        };
      } else {
        newCartItems.push({ productId: payload, quantity: 1 });
      }

      state.cartItems = newCartItems;
    })
    .addCase(deleteFromCart, (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.productId !== action.payload);
    })
    .addCase(checkout, (state) => {
      state.cartItems = [];
    });
});

export default cartReducer;
