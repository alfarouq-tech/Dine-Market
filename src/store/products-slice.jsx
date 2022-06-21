import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    replaceProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const productsActions = productsSlice.actions;
