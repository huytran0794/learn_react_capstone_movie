import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CINEMA_SERVICE from "../../core/service/cinemaService";
import SectionBanner from "./SectionBanner/SectionBanner";
import SectionMovieInfo from "./SectionMovieInfo/SectionMovieInfo";

export default function MovieDetailPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    CINEMA_SERVICE.getSingleMovieSchedule(id)
      .then((res) => {
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.error(`>> ERROR !!!!! ${err}`);
      });
  }, []);
  return (
    <div className="movie-detail">
      {/* Section banner */}
      <SectionBanner imgUrl={movie.hinhAnh} />

      {/* Section Movie detail */}
      <SectionMovieInfo movieData={movie} id={id} />
    </div>
  );
}
