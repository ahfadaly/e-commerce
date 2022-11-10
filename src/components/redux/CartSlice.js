import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  initialState: [],
  name: "CartSlice",

  reducers: {
    addToCart: (state, action) => {
      const findProfuct = state.find((product) => product.id === action.payload.id);
      if (findProfuct) {
        findProfuct.quantity += 1;
      } else {
        const productCllone = { ...action.payload, quantity: 1 };

        state.push(productCllone);
      }
    },
    rmoveCart: (state, action) => {
      return state.filter((product) => product.id != action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, rmoveCart, clear } = CartSlice.actions;

export default CartSlice.reducer;
