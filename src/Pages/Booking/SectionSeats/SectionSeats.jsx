/* import packages */
import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";

/* import local files */
import bgScreen from "../../../core/assets/images/bg-screen.png";

/* import local components */
import Seat from "../../../core/Components/MovieSeat/Seat";

/* import icons */
import { FiUser } from "react-icons/fi";

export default function SectionSeats({ className, seatList, bookingSeatList }) {
  let userInfo = useSelector((state) => state.userReducer.user);
  let tenGhe = "";
  const renderSeatList = (seatList) => {
    return seatList.map((seat, seatIdx) => {
      tenGhe = seat.tenGhe;
      let seatStatusClass = "bg-white hover:bg-red-300 cursor-pointer";

      if (seat.loaiGhe === "Vip") {
        seatStatusClass = "bg-[#F3842A] cursor-pointer";
      }

      if (seat.daDat) {
        seatStatusClass = "bg-slate-700 cursor-not-allowed";
      }

      if (seat.taiKhoanNguoiDat === userInfo.taiKhoan) {
        seatStatusClass = "bg-indigo-400 cursor-not-allowed";
        tenGhe = <FiUser />;
      }

      let bookingIdx = bookingSeatList.findIndex(
        (bookingSeat) => bookingSeat.maGhe === seat.maGhe
      );

      if (bookingIdx > -1) {
        seatStatusClass = "bg-[#C8235D]";
      }
      return (
        <Seat
          key={seat.maGhe.toString() + seatIdx}
          seat={seat}
          className={`${seatStatusClass}`}
        >
          {tenGhe}
        </Seat>
      );
    });
  };
  const renderScreen = (
    <div className="w-full flex items-center">
      <img src={bgScreen} alt="screen background" className="w-full" />
    </div>
  );

  const boxIconClass = clsx(
    "icon",
    "inline-block",
    "border border-solid border-slate-400/25 w-5 h-5"
  );
  return (
    <div className={clsx("section-seats", className)}>
      {renderScreen}
      <div className="seat-list py-10 flex gap-6 justify-center flex-wrap">
        {renderSeatList(seatList)}
      </div>
      <div className="bottom border border-solid border-[#9CA7CB] rounded-md py-4 px-5 mt-9">
        <div className="seat-notice">
          <h4 className="title uppercase text-lg text-white font-bold tracking-wider text-center">
            CHAIR NOTICE
          </h4>
        </div>
        <div className="seat-type-list flex justify-center gap-40">
          <ul className="seat-status-list text-lg mb-0">
            <li className="flex items-center mb-5 gap-8">
              <span className={clsx(boxIconClass, "bg-red-400")}></span>
              <span>Selecting</span>
            </li>
            <li className="flex items-center mb-5 gap-8">
              <span className={clsx(boxIconClass, "bg-[#9CA7CB]")}></span>
              <span>Selected</span>
            </li>
            <li className="flex items-center gap-8">
              <span
                className={clsx(
                  boxIconClass,
                  "bg-[#9CA7CB]",
                  "inline-flex justify-center items-center"
                )}
              >
                X
              </span>
              <span>Not available</span>
            </li>
          </ul>
          <ul className="seat-type-list text-lg mb-0">
            <li className="flex items-center mb-5 gap-8">
              <span className={clsx(boxIconClass, "bg-[#fff]")}></span>
              <span>Normal</span>
            </li>
            <li className="flex items-center mb-5 gap-8">
              <span className={clsx(boxIconClass, "bg-[#F3842A]")}></span>
              <span>VIP</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
