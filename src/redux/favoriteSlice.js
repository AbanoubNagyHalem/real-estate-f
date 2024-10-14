import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  states : [],
  loading : false,
  error: null,
};
 export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async () => {
    const res = await fetch('http://localhost:3000/favorites')
    const data = await res.json()
    return data
 } )

  export const favoriteSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchFavorites.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchFavorites.fulfilled, (state, action) => {
            state.loading = false;
            state.states = action.payload;
          })
          .addCase(fetchFavorites.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
  });

// export const {  } = productSlice.actions;

export default favoriteSlice.reducer;