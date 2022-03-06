import { createAction } from '@reduxjs/toolkit';
import { CART_ADD, CART_CHECKOUT, CART_DELETE } from './constants';

export const addToCart = createAction<number>(CART_ADD);
export const deleteFromCart = createAction<number>(CART_DELETE);
export const checkout = createAction<void>(CART_CHECKOUT);
