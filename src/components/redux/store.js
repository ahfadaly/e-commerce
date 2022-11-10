import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import productsSlice from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: CartSlice,
  },
});
