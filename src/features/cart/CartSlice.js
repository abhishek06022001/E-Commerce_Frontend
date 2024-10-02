import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
  cart: [],
};
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart.quantity > 1) {
        itemInCart.quantity--;
      } else {
        const index = state.cart.indexOf(itemInCart);
        if (index > -1) {
          state.cart.splice(index, 1);
        }
      }
    },
  },
});
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
