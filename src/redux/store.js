import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
<<<<<<< Updated upstream
import favoritesReducer from './favoriteSlice';
=======
import favoritesReducer from "./favoriteSlice"
import reviewsReducer from "./reviewsSlice"
>>>>>>> Stashed changes
export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    favorites: favoritesReducer,
<<<<<<< Updated upstream
=======
    reviews: reviewsReducer
>>>>>>> Stashed changes
  },
});
