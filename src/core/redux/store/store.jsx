/* import packages */
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../slice/userSlice";
import bookTicketReducer from "../slice/bookTicketSlice";
import spinnerReducer from "../slice/spinnerSlice";
const store = configureStore({
  reducer: { userReducer, bookTicketReducer, spinnerReducer },
  devTools: true,
});

export default store;
