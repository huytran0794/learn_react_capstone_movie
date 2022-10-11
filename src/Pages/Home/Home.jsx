/* import packages */
import React, { useEffect, useState } from "react";

/* import local components */
import MOVIE_SERVICE from "../../core/service/movieService";
import SectionMovies from "./SectionMovies/SectionMovies";
import SectionTabs from "./SectionMovieSchedule/SectionTabs";

export default function Home() {
  console.log("render page home content");
  const [movieList, setMovieList] = useState([]);
  let upComingArr = [],
    nowShowingArr = [],
    hotMoviesArr = [];
  useEffect(() => {
    MOVIE_SERVICE.getAllMovie("GP03")
      .then((res) => {
        setMovieList(res.data.content);
      })
      .catch((err) => {
        console.error(`>> ERROR !!!!! ${err}`);
      });
  }, []);
  upComingArr = movieList.filter((movie) => movie.sapChieu);
  nowShowingArr = movieList.filter((movie) => movie.dangChieu);
  hotMoviesArr = movieList.filter((movie) => movie.hot);
  return (
    <>
      {/* Section - Movie - Premiere  */}
      <SectionMovies title="Premiere" movieList={hotMoviesArr} />

      {/* Section - Movie - Upcoming  */}
      <SectionMovies title="upcoming" movieList={upComingArr} />

      {/* Section - Movie - No showing  */}
      <SectionMovies title="nowshowing" movieList={nowShowingArr} />

      {/* Section - Tabs Movies & Theater */}
      <SectionTabs title="Movie schedule" />
    </>
  );
}
