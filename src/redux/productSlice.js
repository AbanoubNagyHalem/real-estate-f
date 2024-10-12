import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  states : [],
  loading : false,
  error: null,
};
 export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    const res = await fetch('http://localhost:3000/posts')
    const data = await res.json()
    return data
 } )

  export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.states = action.payload;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
  });

export const {  } = productSlice.actions;

export default productSlice.reducer;