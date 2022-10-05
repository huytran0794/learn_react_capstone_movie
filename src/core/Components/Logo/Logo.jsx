/* import packages */
import React from "react";
import { Link } from "react-router-dom";

/* import local files */
import logo from "../../img/logo.svg";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

export default function Logo() {
  return (
    <FlexWrapper className="logo-container" align="center" justity="center">
      <div className="logo-wrapper w-40 h-full">
        <Link to="/">
          <img
            src={logo}
            alt="Plex"
            className="object-cover object-center max-w-full min-h-full"
          />
        </Link>
      </div>
    </FlexWrapper>
  );
}
