import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";
import { bookTicketActions } from "../../redux/slice/bookTicketSlice";

export default function Seat({ className, seat, children }) {
  let dispatch = useDispatch();
  const handleSelectSeat = () => {
    dispatch(bookTicketActions.selectSeat(seat));
  };

  return (
    <button
      className={clsx(
        "seat",
        "w-8 h-8 rounded-md",
        "font-medium text-black",
        "flex items-center justify-center overflow-hidden",
        className,
        "transition-all duration-700"
      )}
      id={seat.maGhe}
      disabled={seat.daDat}
      onClick={handleSelectSeat}
    >
      {children}
    </button>
  );
}
