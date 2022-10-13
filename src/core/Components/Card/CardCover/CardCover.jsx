/* import packages */
import React from "react";
import clsx from "clsx";

/* import router dom package */
import { NavLink } from "react-router-dom";

/* import react icons package */
import { BsFilm } from "react-icons/bs";

/* import local component */
import CustomButton from "../../Button/CustomButton";

export default function CardCover({ url, detailUrl }) {
  return (
    <div
      className={clsx(
        "card-cover",
        "flex justify-center items-center",
        "relative",
        "rounded-lg",
        "cursor-pointer w-full h-full overflow-hidden",
        "shadow-xl",
        "group"
      )}
    >
      <img
        alt="card__img"
        src={url}
        className={clsx(
          "card-cover__img",
          "block",
          "cursor-pointer",
          "object-cover",
          "max-w-full max-h-full w-full h-full"
        )}
      />
      <div
        className={clsx(
          "overlay",
          "absolute z-[1]",
          "w-full h-full",
          "bg-gradient-to-t from-[#859398]/40 to-[#283048]/60 opacity-0 group-hover:opacity-100",
          "transition-all duration-1000"
        )}
      >
        <ul className="overlay-btn-list absolute top-1/2 w-full -translate-y-1/2 flex flex-col items-center justify-center gap-4 z-[2]">
          <li className="btn-detail opacity-0 group-hover:opacity-100 transition-all duration-1000">
            <NavLink to={detailUrl} className="block min-w-[140px] h-12">
              <CustomButton
                btnType="btnPink"
                className="rounded-[30px] w-[140px] h-full"
              >
                Book now
              </CustomButton>
            </NavLink>
          </li>
          <li className="btn-play opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000">
            <CustomButton
              btnType="btnGreyBordered"
              className="justify-start gap-2 py-2 px-5 rounded-[30px] h-12 w-[140px]"
            >
              <BsFilm className="w-5 h-5" />
              <span>Trailer</span>
            </CustomButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
