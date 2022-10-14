/* import packages */
import React, { useEffect, useState } from "react";

/* import local components */
import MOVIE_SERVICE from "../../core/service/movieService";
import SectionMovies from "./SectionMovies/SectionMovies";
import SectionTabs from "./SectionMovieSchedule/SectionTabs";
import SectionBanner from "./SectionBanner/SectionBanner";
import { spinnerActions } from "../../core/redux/slice/spinnerSlice";
import Spinner from "../../core/Components/Spinner/Spinner";
import { useDispatch } from "react-redux";

export default function Home() {
  console.log("render page home content");
  let dispatch = useDispatch();
  const [movieList, setMovieList] = useState([]);
  let upComingArr = [],
    nowShowingArr = [],
    hotMoviesArr = [];

  useEffect(() => {
    dispatch(spinnerActions.setLoadingOn());
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
      <Spinner />
      {/* Section banner */}
      <SectionBanner className="h-[40vh]" />
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
