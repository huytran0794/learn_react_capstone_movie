/* import packages */
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../slice/userSlice";
import movieReducer from "../slice/movieSlice";

const store = configureStore({
  reducer: { userReducer, movieReducer },
  devTools: true,
});

export default store;
