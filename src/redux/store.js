import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import favoritesReducer from './favoriteSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    favorites: favoritesReducer,
  },
});
