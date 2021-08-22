import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  }
});

export const {
  login, logout
} = userSlice.actions
export const selectedIsLoggedIn = state => state.userReducer.isLoggedIn;
export default userSlice.reducer