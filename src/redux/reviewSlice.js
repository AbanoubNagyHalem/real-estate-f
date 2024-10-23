import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem("token") || sessionStorage.getItem("token");

// Fetch reviews
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

    // Check if response is OK
    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }

    const data = await res.json();
    console.log(data);

    return data;
  }
);

// Add a new review
export const addReviews = createAsyncThunk(
  "reviews/addReviews",
  async ({ text, id }) => {
    // Accept an object with text and id
    const res = await fetch(`http://localhost:3000/posts/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
      body: JSON.stringify({ text }),
    });

    // Check if response is OK
    if (!res.ok) {
      throw new Error("Failed to add review");
    }

    const data = await res.json();
    console.log(data);

    return data;
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addReviews.pending, (state) => {
        state.status = "loading"; // You can handle loading state if needed
      })
      .addCase(addReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reviews.push(action.payload); // Assuming the new review is returned
      })
      .addCase(addReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default reviewSlice.reducer;
