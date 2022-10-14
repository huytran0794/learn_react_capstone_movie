import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import BounceLoader from "react-spinners/BounceLoader";

export default function Spinner() {
  let isLoading = useSelector((state) => state.spinnerReducer.isLoading);
  const loadingClass = isLoading
    ? "opacity-100 visible "
    : "opacity-0 invisible";
  return (
    <div
      className={clsx(
        "spinner",
        "fixed left-0 top-0 bg-slate-700 bg-opacity-95 flex justify-center items-center z-50",
        "h-screen w-screen",
        loadingClass,
        "transition-all duration-[1200ms]"
      )}
    >
      <BounceLoader color="#4236d6" size={120} speedMultiplier={0.9} />
    </div>
  );
}
