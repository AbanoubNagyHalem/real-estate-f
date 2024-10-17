// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   token: null,
// };

//   export const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//       setLogin: (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       },
//       setLogout: () => {
//         localStorage.setItem('token', '')
//       },
//     },
//   });

// export const { setLogin, setLogout } = userSlice.actions;

// export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};


export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3000/users', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`
      },
    });
    const data = await response.json();
    console.log(data)
    return data;
  }
);


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: () => {
      localStorage.removeItem('token');
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export const { setLogin, setLogout } = userSlice.actions;


export default userSlice.reducer;
