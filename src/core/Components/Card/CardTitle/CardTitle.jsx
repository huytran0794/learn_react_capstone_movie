/* import packages */
import React from "react";

/* import router dom package */
import { NavLink } from "react-router-dom";

export default function CardTitle({ tenPhim, detailUrl }) {
  return (
    <NavLink className="block" to={detailUrl}>
      <div className="card-title font-bold text-base md:text-xl tracking-wide text-[#9CA7CB] truncate hover:text-[white] transition-all duration-1000">
        {tenPhim}
      </div>
    </NavLink>
  );
}
