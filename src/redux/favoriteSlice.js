import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  states : [],
=======
  favorites : [],
>>>>>>> Stashed changes
  loading : false,
  error: null,
};
 export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async () => {
<<<<<<< Updated upstream
    const res = await fetch('http://localhost:3000/favorites')
    const data = await res.json()
    return data
 } )

  export const favoriteSlice = createSlice({
    name: "products",
=======
    const res = await fetch('http://localhost:3000/posts/all-favorites')
    const data = await res.json()
    return data
 } )
   // remove Favourite post
   export const removeFavorite = createAsyncThunk('favorites/removeFavorite', async (postId) => {
    const res = await fetch('http://localhost:3000/favorites', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, 
      },
      body: JSON.stringify({ postId }),
    });
    const data = await res.json();
    return postId;  // Return the postId so we can remove it from state
  });
  // Add favorite post
    export const addFavorite = createAsyncThunk('favorites/addFavorite', async (postId) => {
    const res = await fetch('http://localhost:3000/posts/add-favorites', {
      method: 'POST',
=======
  favorites: [], // Consistent state for storing favorite posts
  loading: false,
  error: null,
};

// Fetch favorites
export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async () => {
    const res = await fetch("http://localhost:3000/posts/user/favorites", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch favorites");
    }
    const data = await res.json();
    return data; // Expecting an array of favorite posts
  }
);

// Add favorite post
export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (postId) => {
    const res = await fetch("http://localhost:3000/posts/user/favorites", {
      method: "POST",
>>>>>>> Stashed changes
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ postId }),
    });

    if (!res.ok) {
      throw new Error("Failed to add favorite");
    }

    const data = await res.json();
<<<<<<< Updated upstream
    return data;
  });

  export const favoriteSlice = createSlice({
    name: "favorites",
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
          })
          .addCase(addFavorite.fulfilled, (state, action) => {
            state.favorites.push(action.payload);
          })
          .addCase(removeFavorite.fulfilled, (state, action) => {
            state.favorites = state.favorites.filter((post) => post._id !== action.payload);
>>>>>>> Stashed changes
          });
      },
  });

// export const {  } = productSlice.actions;

=======
    return data; // Return the newly added favorite post
  }
);

// Remove favorite post
export const removeFavorite = createAsyncThunk(
  "favorites/removeFavorite",
  async (postId) => {
    const res = await fetch(`http://localhost:3000/user/favorites/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to remove favorite");
    }

    return postId; // Return postId so we can remove it from the state
  }
);

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch favorites
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload; // Store fetched favorites
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add favorite
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.favorites.push(action.payload); // Add new favorite to the state
      })
      // Remove favorite
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (post) => post._id !== action.payload
        ); // Remove the favorite post by id
      });
  },
});

>>>>>>> Stashed changes
export default favoriteSlice.reducer;