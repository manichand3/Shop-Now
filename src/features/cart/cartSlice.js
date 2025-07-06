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
      return state.filter((product) => product.id !== action.payload);
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
