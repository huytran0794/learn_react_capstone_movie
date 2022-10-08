/* import packages */
import React from "react";

/* import react router dom packages */
import { NavLink } from "react-router-dom";

export default function UserNavItem({ toUrl, children }) {
  return (
    <NavLink
      to={toUrl}
      className="text-xl font-medium text-[#fffc] hover:text-[#1b2130] transition-all duration-1000 px-7 overflow-hidden"
    >
      {children}
    </NavLink>
  );
}
