import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState: initialState,
  reducers: {
    setLoadingOn: (state, action) => {
      state.isLoading = true;
    },
    setLoadingOff: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const spinnerActions = spinnerSlice.actions;

const spinnerReducer = spinnerSlice.reducer;

export default spinnerReducer;
