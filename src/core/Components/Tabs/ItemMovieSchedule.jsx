/* import packages */
import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";

import { convertTimeMovieFormat } from "../../utils/converTime";

export default function ItemMovieSchedule({
  maLichChieu,
  ngayChieuGioChieu,
  noLink = false,
}) {
  const itemClass = clsx(
    "movie-schedule",
    "border border-solid border-slate-400/90 rounded-md",
    "py-2 px-3 transition-all duration-700",
    "bg-[#fff] hover:bg-[#28324A] hover:text-white",
    "text-[#C8235D] text-lg font-semibold",
    "flex items-center justify-center",
    "cursor-pointer"
  );
  if (!noLink) {
    return (
      <NavLink to={`/movies/book-ticket/${maLichChieu}`} className={itemClass}>
        <span>{convertTimeMovieFormat(ngayChieuGioChieu)}</span>
      </NavLink>
    );
  }
  return (
    <div className={itemClass}>
      <span>{convertTimeMovieFormat(ngayChieuGioChieu)}</span>
    </div>
  );
}
