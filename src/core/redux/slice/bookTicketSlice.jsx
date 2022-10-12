import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingTicketInfo: [],
  userBooked: false,
};

const bookTicketSlice = createSlice({
  name: "bookTicketSlice",
  initialState: initialState,
  reducers: {
    selectSeat: (state, action) => {
      let selectingSeats = [...state.bookingTicketInfo];
      let seatIdx = selectingSeats.findIndex(
        (seat) => seat.maGhe === action.payload.maGhe
      );
      if (seatIdx === -1) {
        selectingSeats.push(action.payload);
      }
      state.bookingTicketInfo = selectingSeats;
    },
    unselectSeat: (state, action) => {
      let selectingSeats = [...state.bookingTicketInfo];
      let seatIdx = state.bookingTicketInfo.findIndex(
        (seat) => seat.maGhe === action.payload.maGhe
      );
      if (seatIdx > -1) {
        state.bookingTicketInfo = selectingSeats.filter(
          (seat) => seat.maGhe !== action.payload.maGhe
        );
      }
    },
    checkIsBooked: (state, action) => {
      return state.userBooked;
    },
  },
});

export const bookTicketActions = bookTicketSlice.actions;

const bookTicketReducer = bookTicketSlice.reducer;

export default bookTicketReducer;
