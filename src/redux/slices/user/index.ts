import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  isLoggedIn: boolean;
}

const initialState: IUser = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
