import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

const savedCart = JSON.parse(localStorage.getItem("cart")) || { items: [] };

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: savedCart,
  },
});

store.subscribe(() => {
  const state = store.getState().cart;
  localStorage.setItem("cart", JSON.stringify(state));
});

export default store;
