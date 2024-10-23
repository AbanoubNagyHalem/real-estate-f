import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const token = localStorage.getItem("token") || sessionStorage.getItem("token");
export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    const res = await fetch("http://localhost:3000/posts/user/reviews", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    });

    const data = await res.json();
    
    return data;
  })
// Delete review async action
export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async ({ postId, commentId }, {dispatch}) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const res = await fetch(`http://localhost:3000/posts/${postId}/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to delete the comment");
    }
    // After successful deletion, refetch the comments
    dispatch(fetchPostComments(postId)); // Refetch comments after deletion
    return { postId, commentId };
  }
);




const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reviews = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteReview.fulfilled, (state, action) => {
              const { postId, commentId } = action.payload;
              const post = state.reviews.find((post) => post.postId === postId);
              if (post) {
                post.comments = post.comments.filter((comment) => comment._id !== commentId);
              }
            });
        }
});

export default reviewSlice.reducer;