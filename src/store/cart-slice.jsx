import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    isVisible: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
    toggleCart(state) {
      state.isVisible = !state.isVisible;
    },
    addItemtoCart(state, action) {
      const cartItem = action.payload;
      const existingItem = state.items.find((item) => item.id === cartItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: cartItem.id,
          name: cartItem.name,
          src: cartItem.src,
          price: cartItem.price,
          category: cartItem.category,
          itemQuantity: cartItem.itemQuantity,
          size: cartItem.size,
        });
      } else {
        existingItem.itemQuantity++;
        existingItem.price = existingItem.price + cartItem.price;
      }
      state.totalPrice = state.totalPrice + cartItem.price;
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const removedItem = state.items.find((item) => item.id === itemId);
      state.items = state.items.filter((item) => item.id !== itemId);
      state.totalQuantity = state.totalQuantity - removedItem.itemQuantity;
      state.totalPrice = state.totalPrice - removedItem.price;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
