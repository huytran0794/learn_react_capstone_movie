/* import packages */
import React from "react";
import { Link } from "react-router-dom";

/* import local files */
import logo from "../../img/logo.svg";

export default function Logo({ className }) {
  return (
    <div className="logo-container flex justify-center items-center">
      <div className={`logo-wrapper w-40 h-full ${className}`}>
        <Link to="/" className="w-full h-full link">
          <img
            src={logo}
            alt="Plex"
            className="object-cover object-center max-w-full min-h-full"
          />
        </Link>
      </div>
    </div>
  );
}
