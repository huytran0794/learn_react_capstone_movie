import React, { useEffect, useState } from "react";
import SectionWrapper from "../core/Components/Section/SectionWrapper";
import TabsCinemaBrand from "../core/Components/Tabs/TabsCinemaBrand";
import { useDispatch } from "react-redux";
import { spinnerActions } from "../core/redux/slice/spinnerSlice";
import MOVIE_SERVICE from "../core/service/movieService";

export default function CinemaPage() {
  let dispatch = useDispatch();
  const [hethongRapPhim, setHethongRapPhim] = useState([]);
  useEffect(() => {
    dispatch(spinnerActions.setLoadingOn());
    MOVIE_SERVICE.getMovieByTheater("GP03")
      .then((res) => {
        setHethongRapPhim(res.data.content);
        dispatch(spinnerActions.setLoadingOff());
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="cinemas-page">
      <SectionWrapper
        title="List of partner(s)"
        contentCustomClass="h-full"
        customClass="tabs-cinema-movies"
        content={
          <TabsCinemaBrand tabPosition="top" hethongRapPhim={hethongRapPhim} />
        }
      />
    </div>
  );
}
