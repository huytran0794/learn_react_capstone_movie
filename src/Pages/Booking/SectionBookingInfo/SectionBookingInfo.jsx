/* import packages */
import clsx from "clsx";
import React from "react";

/* import local components */
import CustomButton from "../../../core/Components/Button/CustomButton";

import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { bookTicketActions } from "../../../core/redux/slice/bookTicketSlice";
import swalUtils from "../../../core/utils/SweetAlert/index";

/* import icons */
import { IoIosClose } from "react-icons/io";
import { LOCAL_SERVICE } from "../../../core/service/localService";
import BOOKING_SERVICE from "../../../core/service/bookingservice";
import _ from "lodash";

export default function SectionBookingInfo({
  className,
  scheduleId,
  bookingSeatList,
}) {
  let totalPayment = 0;
  let dispatch = useDispatch();
  let data = {
    maLichChieu: scheduleId,
    danhSachVe: [],
  };
  const borderClass = "border-b border-solid border-[#C8235D]";
  const handleCheckout = () => {
    if (!bookingSeatList.length) {
      swalUtils("error", null, "Please select seats to book !!!");
    } else if (!LOCAL_SERVICE.user.get()) {
      swalUtils("error", null, "Please login to finalize your booking !!!");
    } else {
      BOOKING_SERVICE.bookTicket(data)
        .then((res) => {
          swalUtils(
            "success",
            "Congratulations !!",
            "Please go to your booking history in profile to check it"
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const renderSelectedSeatsInfo = (bookingSeatList) => {
    if (bookingSeatList.length) {
      return _.sortBy(bookingSeatList, [
        function (o) {
          return parseInt(o.stt);
        },
      ]).map((bookingSeat, bookingSeatIdx) => {
        totalPayment += bookingSeat.giaVe;
        data.danhSachVe.push({
          maGhe: bookingSeat.maGhe,
          giaVe: bookingSeat.giaVe,
        });
        return (
          <div
            className="selectedSeatItem flex justify-between rounded-md text-white bg-slate-500/20 p-3 relative"
            id={bookingSeat.maGhe}
            key={bookingSeat.maGhe.toString() + bookingSeatIdx}
          >
            <div className="col--left w-3/12">
              <div className="seatName rounded-md flex flex-col justify-center items-center p-4 bg-indigo-400 font-bold text-2xl">
                <p className="mb-0">{bookingSeat.tenGhe}</p>
              </div>
            </div>
            <div className="col--right w-8/12">
              <div className="col-content-wrapper flex flex-col h-full">
                <div className="seat-type text-lg font-semibold tracking-wider flex-1">
                  <p className="type mb-0">
                    Seat type: <span>{bookingSeat.loaiGhe}</span>
                  </p>
                </div>
                <div className="seat-price text-base font-medium tracking-wide mt-auto">
                  <p className="text mb-0">
                    Price: <span className="price">{bookingSeat.giaVe}</span>
                  </p>
                </div>
                <Tooltip
                  title={`Click here to delete seat ${bookingSeat.tenGhe}`}
                  color="#28324A"
                >
                  <button
                    className="btn-delete-seat w-8 h-8 absolute top-3 right-3 group"
                    onClick={() =>
                      dispatch(bookTicketActions.unselectSeat(bookingSeat))
                    }
                  >
                    <IoIosClose className="w-full h-full group-hover:scale-125 transition-all duration-1000" />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="text-center text-2xl text-white uppercase">
          NO SEAT IS SELECTED
        </div>
      );
    }
  };
  return (
    <div className={clsx("section-booking-info", className)}>
      <h4
        className={`text-white text-3xl font-bold tracking-wider uppercase py-4 ${borderClass}`}
      >
        Listing chosen seat
      </h4>
      <div className={`content py-7 ${borderClass}`}>
        <div className="wrapper flex flex-col justify-center gap-11">
          {renderSelectedSeatsInfo(bookingSeatList)}
        </div>
      </div>
      <div className="bottom py-7">
        <div className="content flex flex-col gap-11 justify-center">
          <div className={`total-price text-center ${borderClass}`}>
            <p className="text-white text-xl font-bold tracking-wider uppercase py-4">
              Total payment:
              <span className="ml-7 inline-block text-white text-lg font-semibold tracking-wider uppercase py-4">
                {totalPayment}
              </span>
            </p>
          </div>
          <CustomButton
            btnType="btnPink"
            className="py-5 w-full h-[62px]"
            onClick={handleCheckout}
          >
            Buy ticket
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
