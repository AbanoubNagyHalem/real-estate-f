import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import filteredPostsReducer from "./filterProductSlice";
import favoritesReducer from "./favoriteSlice";
import reviewReducer from "./reviewSlice";
import postSlice from "./postSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    filteredPosts: filteredPostsReducer,
    favorites: favoritesReducer,
    reviews: reviewReducer,
    post: postSlice,
  },
});
