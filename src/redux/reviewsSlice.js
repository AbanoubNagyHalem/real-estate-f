import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch all user reviews from the backend
export const fetchUserReviews = createAsyncThunk('reviews/fetchUserReviews', async () => {
  const res = await fetch('http://localhost:3000/posts/user-reviews');
  const data = await res.json();
  return data;
});

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviews = action.payload;
      })
      .addCase(fetchUserReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reviewsSlice.reducer;
