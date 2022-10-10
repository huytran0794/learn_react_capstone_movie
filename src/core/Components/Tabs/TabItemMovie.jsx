/* import packages */
import React from "react";

import ItemMovie from "./ItemMovie";

export default function TabItemMovie({ dsPhim }) {
  const renderTabMovie = (dsPhim) => {
    return dsPhim.map((phim, phimIdx) => (
      <ItemMovie key={phim.maPhim.toString() + phimIdx} {...phim} />
    ));
  };
  return (
    <div className="tabs__cinema-movie px-8 h-[1000px] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#9CA7CB] scrollbar-track-[#28324A]/50 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      {renderTabMovie(dsPhim)}
    </div>
  );
}
