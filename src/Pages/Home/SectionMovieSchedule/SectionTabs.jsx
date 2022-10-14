import clsx from "clsx";
import React, { useEffect, useState } from "react";

import SectionWrapper from "../../../core/Components/Section/SectionWrapper";
import MOVIE_SERVICE from "../../../core/service/movieService";

import TabsCinemaBrand from "../../../core/Components/Tabs/TabsCinemaBrand";
import { useDispatch } from "react-redux";
import { spinnerActions } from "../../../core/redux/slice/spinnerSlice";

export default function SectionTabs({ title }) {
  let dispatch = useDispatch();
  const [hethongRapPhim, setHethongRapPhim] = useState([]);
  useEffect(() => {
    MOVIE_SERVICE.getMovieByTheater("GP03")
      .then((res) => {
        setHethongRapPhim(res.data.content);
        dispatch(spinnerActions.setLoadingOff());
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <SectionWrapper
      title={title}
      contentCustomClass="h-[1000px]"
      customClass="tabs-cinema-movies"
      content={<TabsCinemaBrand hethongRapPhim={hethongRapPhim} />}
    />
  );
}
