/* import packages */
import React from "react";
import clsx from "clsx";

/* import utils */
import { convertTimeOnlyYear } from "../../../utils/convertime";

/* import local components */

// This is a dummny data card desc due to api not supported enough info for movie, to be udpated
export default function CardDesc({ ngayKhoiChieu }) {
  const type = "Action";
  const movieLength = "1h30";
  const language = "English";
  const movieReleaseTime = convertTimeOnlyYear(ngayKhoiChieu);
  return (
    <div className="text-[#9CA7CB] text-xs w-full flex items-center justify-between py-3">
      <div className="left-col flex items-center gap-4">
        <div className="movie__type">{type}</div>
        <span className="char char-vertical-divider">|</span>
        <div className="movie__length">{movieLength}</div>
        <span className="char char-vertical-divider">|</span>
        <div className="movie__lang">{language}</div>
      </div>
      <div className="right-col">
        <div
          className={clsx(
            "movie__year",
            "flex items-center justify-center",
            "border border-solid border-[#C8235D] min-w-[70px] max-w-[120px] py-1 px-3"
          )}
        >
          {movieReleaseTime}
        </div>
      </div>
    </div>
  );
}
