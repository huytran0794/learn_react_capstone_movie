/* import packages */
import React from "react";

/* import local components */
export default function Footer({ bgColor }) {
  return (
    <footer>
      <div className="footer-content"></div>
      <div className="footer-bottom flex justify-between items-center border-t-[0.5px] border-[#ccc]">
        <div className="left copyright text-[#fffffc] text-lg py-4">
          <p>All rights reserved &copy; 2021-20121 Plex Movie Booking System</p>
        </div>
      </div>
    </footer>
  );
}
