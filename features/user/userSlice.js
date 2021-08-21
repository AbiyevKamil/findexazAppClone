import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: true,
}

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    
  }
});

export const {

} = userSlice.actions
export const selectedIsLoggedIn = state => state.userReducer.isLoggedIn;
export default userSlice.reducer