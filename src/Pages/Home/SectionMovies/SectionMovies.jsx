/* import packages */
import clsx from "clsx";
import React from "react";

/* import local components */
import MovieCard from "../../../core/Components/Card/MovieCard";
import SectionWrapper from "../../../core/Components/Section/SectionWrapper";

export default function SectionMovies({ title, movieList }) {
  let renderMovie = () => {
    return movieList.map((item, idx) => {
      return <MovieCard data={item} key={"#" + item.maPhim.toString() + idx} />;
    });
  };
  const titleCustomClass = clsx(
    "after:absolute after:block after:-bottom-3 after:-right-10 after:bg-[#9CA7CB] after:w-28 after:h-[7px]"
  );

  const contentCustomClass = "grid grid-cols-4 gap-y-10 gap-x-20";
  return (
    <SectionWrapper
      title={title}
      customClass="movie-upcoming"
      content={renderMovie()}
      titleCustomClass={titleCustomClass}
      contentCustomClass={contentCustomClass}
    />
  );
}
