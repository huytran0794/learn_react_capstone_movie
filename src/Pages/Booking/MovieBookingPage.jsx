/* import packages */
import axios from "axios";
import React, { useEffect, useState } from "react";

/* import antd packages */
import { useParams } from "react-router-dom";

/* import services */
import TICKET_SERVICE from "../../core/service/bookingservice";

/* import local components */
import Container from "../../core/Components/Container/Container";
import SectionSeats from "./SectionSeats/SectionSeats";
import SectionBookingInfo from "./SectionBookingInfo/SectionBookingInfo";

export default function MovieBookingPage() {
  let { scheduleId } = useParams();
  let [bookingTicketInfo, setBookingTicketInfo] = useState(null);
  console.log("rendering booking page content");
  useEffect(() => {
    TICKET_SERVICE.getMovieScheduleById(scheduleId)
      .then((res) => {
        res.data.statusCode === 200 && setBookingTicketInfo(res.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="movie-booking text-6xl text-white">
      <Container>
        <div className="flex gap-8 items-center">
          <div className="col--left w-3/4">
            <SectionSeats
              className="bg-red-400"
              seatList={bookingTicketInfo.danhSachGhe}
            />
          </div>
          <div className="col--right w-1/4">
            <SectionBookingInfo
              className="bg-slate-500"
              bookingInfo={bookingTicketInfo.thongTinPhim}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
