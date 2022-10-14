import React from "react";
import SectionWrapper from "../../../core/Components/Section/SectionWrapper";

import { Card } from "antd";
import CardCover from "../../../core/Components/Card/CardCover/CardCover";

import { useSelector } from "react-redux";
import SectionBookingInfo from "../SectionBookingInfo/SectionBookingInfo";
import SectionSeats from "../SectionSeats/SectionSeats";
import ItemMovie from "../../../core/Components/Tabs/ItemMovie";
import ItemMovieSchedule from "../../../core/Components/Tabs/ItemMovieSchedule";
import moment from "moment";

export default function SectionMovieInfo({ bookingTicketInfo, scheduleId }) {
  let { thongTinPhim: bookingInfo, danhSachGhe: seatList } = bookingTicketInfo;
  let bookingSeatList = useSelector(
    (state) => state.bookTicketReducer.bookingTicketInfo
  );
  let movieDate = moment(
    bookingInfo.ngayChieu + bookingInfo.gioChieu,
    "DD/MM/YYYY HH:mm"
  );

  const renderMovieInfo = () => {
    return (
      <div className="flex gap-7 movie-info bg-[#28324A]/80 p-10 rounded-xl w-full">
        <div className="col--left w-3/12 flex items-center justify-center">
          <div className="thumb w-[250px] h-[400px]">
            <Card
              bordered={false}
              cover={<CardCover url={bookingInfo?.hinhAnh} />}
              className="card movie-card movie-card-detail rounded-none w-full h-full flex flex-col overflow-hidden"
            />
          </div>
        </div>
        <div className="col--right w-9/12">
          <div className="booking-movie__details flex flex-col gap-7">
            <h4 className="booking-movie__name font-bold text-white text-5xl mb-0">
              {bookingInfo.tenPhim}
            </h4>
            <div className="booking-movie__desc">
              <h5 className="text-[#C8235D] text-3xl uppercase font-bold">
                Schedule information
              </h5>
              <ul className="booking-movie-info font-medium tracking-wide text-2xl mb-0">
                <li className="cinema-branch mb-7 last:mb-0">
                  <p className="text flex items-center mb-0">
                    {bookingInfo.tenCumRap}
                  </p>
                </li>
                <li className="cinema-address mb-7">
                  <p className="text flex items-center mb-0">
                    {bookingInfo.diaChi}
                  </p>
                </li>
                <li className="cinema-room mb-7">
                  <p className="text flex items-center mb-0">
                    {bookingInfo.tenRap}
                  </p>
                </li>
                <li>
                  <ItemMovieSchedule
                    key={bookingInfo.maLichChieu.toString()}
                    maLichChieu={bookingInfo.maLichChieu}
                    ngayChieuGioChieu={movieDate}
                    noLink={true}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderMovieBookingInfo = () => {
    return (
      <>
        <div className="col--left w-8/12 h-full">
          <div className="wrapper bg-[#28324A]/20 p-[30px] rounded-lg border border-solid border-slate-300/20">
            {Object.keys(bookingTicketInfo).length && (
              <SectionSeats
                seatList={seatList}
                bookingSeatList={bookingSeatList}
              />
            )}
          </div>
        </div>
        <div className="col--right w-4/12 h-full">
          <div className="wrapper bg-[#28324A]/20 p-[30px] rounded-lg border border-solid border-slate-300/20">
            {Object.keys(bookingTicketInfo).length && (
              <SectionBookingInfo
                bookingInfo={bookingInfo}
                scheduleId={scheduleId}
                bookingSeatList={bookingSeatList}
              />
            )}
          </div>
        </div>
      </>
    );
  };

  const renderMovieDetail = () => {
    return (
      <div className="movie-booking text-white">
        <div className="wrapper flex flex-col gap-24 items-center">
          {renderMovieInfo()}
          <div className="movie-booking">
            <div className="wrapper flex gap-20">
              {renderMovieBookingInfo()}
            </div>
          </div>
        </div>
      </div>
    );
  };
  if (Object.keys(bookingTicketInfo).length) {
    return (
      <SectionWrapper
        customClass="-mt-[200px]"
        contentCustomClass="relative z-[3]"
        content={renderMovieDetail()}
      />
    );
  } else {
    return <div>Fail</div>;
  }
}
