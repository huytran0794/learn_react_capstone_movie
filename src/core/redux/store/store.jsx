/* import packages */
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../slice/userSlice";
import bookTicketReducer from "../slice/bookTicketSlice";
const store = configureStore({
  reducer: { userReducer, bookTicketReducer },
  devTools: true,
});

export default store;
