import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    loginSuccess: (state, action) => {},
    loginFail: (state, action) => {},
  },
});

export const useActions = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
