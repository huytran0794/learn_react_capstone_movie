import React, { useEffect } from "react";
import { Tabs } from "antd";
import MOVIE_SERVICE from "../../service/movieService";
import { useState } from "react";
import ItemTabMovie from "./ItemTabMovie";

export default function TabsMovie() {
  const [dataMovies, setDataMovies] = useState([]);
  useEffect(() => {
    MOVIE_SERVICE.getMovieByTheater("GP05")
      .then((res) => {
        setDataMovies(res.data.content);
      })
      .catch((err) => console.error(err));
  }, []);

  const renderMovieTheaterBrand = () => {
    let brandTabList = () => {
      return dataMovies.map((hethong, hethong_idx) => {
        // let dsCumRap = renderMovieTheater(hethong.lstCumRap);
        return {
          label: <img className="w-16 h-16" src={hethong.logo} />,
          key: { hethong_idx },
          // children: dsCumRap,
        };
      });
    };
    return (
      <Tabs className="h-[500px]" tabPosition="left" items={brandTabList()} />
    );
  };
  const renderMovieTheater = (dsCumRap) => {
    let cumRapTabList = () => {
      return dsCumRap.map((cumRap, cumRap_idx) => {
        let id = `cum-rap-${cumRap_idx}`;
        return {
          label: (
            <div className="">
              <p className="text-gray-700 truncate">{cumRap.tenCumRap}</p>
              <p className="">{cumRap.diaChi}</p>
            </div>
          ),
          key: { id },
          children: renderMovie(cumRap.danhSachPhim),
        };
      });
    };
    return (
      <Tabs
        className="h-[500px]"
        tabPosition="left"
        items={cumRapTabList()}
        tabBarStyle={{ backgroundColor: "red!important" }}
      />
    );
  };

  const renderMovie = (dsPhim) => {
    return (
      <div className="h-[500px] scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {dsPhim.map((phim, phim_idx) => {
          return <ItemTabMovie key={phim_idx} data={phim} />;
        })}
      </div>
    );
  };
  return <>{renderMovieTheaterBrand()}</>;
}
