/* import packages */
import clsx from "clsx";
import React from "react";

/* import react router dom packages */
import { NavLink } from "react-router-dom";

export default function NavItem({ toUrl, children }) {
  return (
    <NavLink
      to={toUrl}
      className={clsx(
        "font-medium text-md uppercase md:text-3xl md:font-semibold"
      )}
      activeClassName="isActive"
    >
      {children}
    </NavLink>
  );
}
