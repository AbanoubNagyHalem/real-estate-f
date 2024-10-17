import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import favoritesReducer from './favoriteSlice';
=======
import favoritesReducer from "./favoriteSlice"
import reviewsReducer from "./reviewsSlice"
>>>>>>> Stashed changes
=======
import filteredPostsReducer from "./filterProductSlice"
import favoritesReducer from './favoriteSlice'
import postReducer from './postSlice';
import reviewsReducer from './reviewSlice';

>>>>>>> Stashed changes
export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    favorites: favoritesReducer,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
    reviews: reviewsReducer
>>>>>>> Stashed changes
=======
    post: postReducer,
    reviews: reviewsReducer,
>>>>>>> Stashed changes
  },
});
