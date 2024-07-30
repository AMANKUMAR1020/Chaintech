import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
    },
    logoutUser: (state) => {
      state.user = null;
      console.log(state.user)
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setUser } = userSlice.actions;

export default userSlice.reducer;
