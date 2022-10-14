/* import packages */
import React from "react";
import { useLocation } from "react-router-dom";

export default function NavigationBar({ menuItems }) {
  const renderLi = () => {
    return menuItems.map((item, idx) => {
      return (
        <li className="menu-item" key={item.key.toString() + idx}>
          {item.label}
        </li>
      );
    });
  };
  return (
    <div className="menu hidden justify-between items-center w-full md:flex md:w-auto">
      <ul className="flex flex-col md:flex-row md:space-x-8 mb-0">
        {renderLi()}
      </ul>
    </div>
  );
}
