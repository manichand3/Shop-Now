import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      // console.log(action);
      const existingProduct = state.find((item) => item.id === action.payload);
      console.log(existingProduct);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ id: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          // remove it from cart
          return state.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
