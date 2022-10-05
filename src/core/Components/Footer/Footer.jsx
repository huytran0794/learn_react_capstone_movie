import React from "react";
import Container from "../Container/Container";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
export default function Footer({ bgColor }) {
  return (
    <footer>
      <div className="footer-content"></div>
      <FlexWrapper
        justify="between"
        align="center"
        className="footer-bottom border-t-[0.5px] border-[#ccc]"
      >
        <div className="left copyright text-[#fffffc] text-lg py-4">
          <p>All rights reserved &copy; 2021-20121 Plex Movie Booking System</p>
        </div>
      </FlexWrapper>
    </footer>
  );
}
