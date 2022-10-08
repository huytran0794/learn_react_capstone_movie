/* import packages */
import clsx from "clsx";
import React from "react";

/* import local components */
import MovieCard from "../../../core/Components/Card/MovieCard";
import SectionMovie from "../../../core/Components/Section/Section";

export default function SectionMovies({ title, movieList }) {
  let renderMovie = () => {
    return movieList.map((item, idx) => {
      return <MovieCard data={item} key={"#" + item.maPhim.toString() + idx} />;
    });
  };
  const titleCustomClass = clsx(
    "relative",
    "before:absolute before:block before:w-5 before:h-[60px] before:-top-2 before:-left-2 before:bg-[#C8235D] before:-z-[1]",
    "after:absolute after:block after:bottom-0 after:right-0 after:bg-[#9CA7CB] after:w-28 after:h-[5px]"
  );
  return (
    <SectionMovie
      title={title}
      content={renderMovie()}
      titleCustomClass={titleCustomClass}
      customClass="movie-upcoming"
    />
  );
}
