/* import packages */
import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";

/* import local components */
import ItemMovieSchedule from "./ItemMovieSchedule";
export default function ItemMovie({
  maPhim,
  hinhAnh,
  tenPhim,
  lstLichChieuTheoPhim,
  customColClass
}) {
  const renderMovieSchedule = (lstLichChieuTheoPhim) => {
    return lstLichChieuTheoPhim
      .slice(0, 10)
      .map((lichChieu, lichChieuIdx) => (
        <ItemMovieSchedule
          key={lichChieu.maLichChieu.toString() + lichChieuIdx}
          {...lichChieu}
        />
      ));
  };
  return (
    <div className="movie p-11 flex gap-11">
      <div className="thumb flex-1 basis-2/6 overflow-hidden">
        <img
          src={hinhAnh}
          alt=""
          className="min-w-full max-w-full min-h-full object-cover object-center"
        />
      </div>
      <div className="info flex flex-1 basis-4/6 flex-col gap-2 flex-grow">
        <h3 className="movie-title">
          <NavLink
            to={`/movies/detail/${maPhim}`}
            className="inline-block text-3xl font-semibold text-[#9CA7CB] hover:text-white transition-all duration-700"
          >
            {tenPhim}
          </NavLink>
        </h3>
        <div className={clsx("grid grid-cols-2 gap-8 items-center", )}>
          {renderMovieSchedule(lstLichChieuTheoPhim)}
        </div>
      </div>
    </div>
  );
}
