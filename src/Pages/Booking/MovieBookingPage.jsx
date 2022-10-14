/* import packages */
import React, { useEffect, useState } from "react";

/* import antd packages */
import { useParams } from "react-router-dom";

/* import services */
import TICKET_SERVICE from "../../core/service/bookingservice";

/* import local components */

import SectionSeats from "./SectionSeats/SectionSeats";
import SectionBookingInfo from "./SectionBookingInfo/SectionBookingInfo";

import { useDispatch } from "react-redux";
import SectionBanner from "./SectionBanner/SectionBanner";
import { spinnerActions } from "../../core/redux/slice/spinnerSlice";
import SectionMovieInfo from "./SectionMovieInfo/SectionMovieInfo";
import Spinner from "../../core/Components/Spinner/Spinner";

export default function MovieBookingPage() {
  let { scheduleId } = useParams();
  let dispatch = useDispatch();
  let [bookingTicketInfo, setBookingTicketInfo] = useState({});

  useEffect(() => {
    dispatch(spinnerActions.setLoadingOn());
    const getData = async () => {
      try {
        let response = await TICKET_SERVICE.getMovieScheduleById(scheduleId);
        setBookingTicketInfo(response.data.content);
        dispatch(spinnerActions.setLoadingOff());
      } catch (err) {
        dispatch(spinnerActions.setLoadingOff());
        if (err.response) {
          // The client was given an error response (5xx, 4xx)
          console.log(err.response.data);
        } else if (err.request) {
          // The client never received a response, and the request was never left
          console.log(err.request);
        } else {
          console.log(err);
          // Anything else
        }
      }
    };
    getData();
  }, []);
  return (
    <>
      <Spinner />
      {Object.keys(bookingTicketInfo).length && (
        <div className="movie-ticket-booking">
          <SectionBanner imgUrl={bookingTicketInfo.thongTinPhim.hinhAnh} />
          <SectionMovieInfo
            bookingTicketInfo={bookingTicketInfo}
            scheduleId={scheduleId}
          />
        </div>
      )}
    </>
  );
}
