import moment from "moment";
import React from "react";

export default function ItemTabMovie(props) {
  let FORMAT_MOVIE_DAY = (data) => {
    return moment(data).format("DD-MM-YYYY ~ hh:mm");
  };
  const renderMovieSchedule = (lichChieu) => {
    return lichChieu.slice(0, 10).map((movie, idx) => {
      return (
        <div
          key={"#" + idx}
          className="rounded bg-red-500 text-white text-center px-2 py-1"
        >
          {/* {moment(movie.ngayChieuGioChieu, "DD-MM-YYYY ~ hh:mm")} */}
          {FORMAT_MOVIE_DAY(movie.ngayChieuGioChieu)}
        </div>
      );
    });
  };
  return (
    <div className="p-3 flex gap-2 items-center border border-b-red-300">
      <div className="thumb w-20">
        <img
          src={props.data.hinhAnh}
          alt=""
          className="min-w-full max-w-full min-h-full object-cover object-center"
        />
      </div>
      <div className="info flex flex-col gap-2 flex-grow">
        <h4 className="movie-title">{props.data.tenPhim}</h4>
        <div className="grid grid-cols-2 items-center gap-10 w-2/5">
          {renderMovieSchedule(props.data.lstLichChieuTheoPhim)}
        </div>
      </div>
    </div>
  );
}
