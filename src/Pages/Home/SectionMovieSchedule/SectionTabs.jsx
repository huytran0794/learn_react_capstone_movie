import clsx from "clsx";
import React, { useEffect, useState } from "react";

import SectionWrapper from "../../../core/Components/Section/SectionWrapper";
import MOVIE_SERVICE from "../../../core/service/movieService";

import TabsCinemaBrand from "../../../core/Components/Tabs/TabsCinemaBrand";

export default function SectionTabs({ title }) {
  const [hethongRapPhim, setHethongRapPhim] = useState([]);
  useEffect(() => {
    MOVIE_SERVICE.getMovieByTheater("GP03")
      .then((res) => {
        setHethongRapPhim(res.data.content);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <SectionWrapper
      title={title}
      contentCustomClass="h-[1000px]"
      content={<TabsCinemaBrand hethongRapPhim={hethongRapPhim} />}
    />
  );
}
