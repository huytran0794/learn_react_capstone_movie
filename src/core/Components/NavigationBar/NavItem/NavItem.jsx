import React from "react";
import { NavLink } from "react-router-dom";
export default function NavItem({ toUrl, children }) {
  return (
    <NavLink to={toUrl} className="font-semibold text-xl uppercase">
      {children}
    </NavLink>
  );
}
