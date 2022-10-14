/* import packages */
import React, { useEffect, useState } from "react";

/* import antd packages */
import { useParams } from "react-router-dom";

/* import services */
import TICKET_SERVICE from "../../core/service/bookingservice";

/* import local components */

import SectionSeats from "./SectionSeats/SectionSeats";
import SectionBookingInfo from "./SectionBookingInfo/SectionBookingInfo";
import SectionWrapper from "../../core/Components/Section/SectionWrapper";
import { useSelector } from "react-redux";

export default function MovieBookingPage() {
  let { scheduleId } = useParams();
  let [bookingTicketInfo, setBookingTicketInfo] = useState({});
  let bookingSeatList = useSelector(
    (state) => state.bookTicketReducer.bookingTicketInfo
  );
  useEffect(() => {
    TICKET_SERVICE.getMovieScheduleById(scheduleId)
      .then((res) => {
        res.data.statusCode === 200 && setBookingTicketInfo(res.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const renderMovieBookingInfo = () => {
    return (
      <>
        <div className="col--left w-8/12 h-full">
          <div className="wrapper bg-[#28324A]/20 p-[30px] rounded-lg border border-solid border-slate-300/20">
            {Object.keys(bookingTicketInfo).length && (
              <SectionSeats
                seatList={bookingTicketInfo.danhSachGhe}
                bookingSeatList={bookingSeatList}
              />
            )}
          </div>
        </div>
        <div className="col--right w-4/12 h-full">
          <div className="wrapper bg-[#28324A]/20 p-[30px] rounded-lg border border-solid border-slate-300/20">
            {Object.keys(bookingTicketInfo).length && (
              <SectionBookingInfo
                bookingInfo={bookingTicketInfo.thongTinPhim}
                scheduleId={scheduleId}
                bookingSeatList={bookingSeatList}
              />
            )}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="movie-booking text-white h-full">
      {/* <div className="movie-booking-steps">
        <Container>
          <div className="wrapper">
            <SectionBookingSteps />
          </div>
        </Container>
      </div> */}
      <SectionWrapper
        title="Choose a seat"
        subTitle="Choose the seat you want to occupy"
        customClass="movie-booking-content h-full"
        content={renderMovieBookingInfo()}
        contentCustomClass="flex gap-20"
      />
    </div>
  );
}
