import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "../features/cart/CartSlice";
import { ProductSlice } from "../features/product/ProductSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice.reducer,
  },
});
