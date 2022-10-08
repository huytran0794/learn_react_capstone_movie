/* import packages */
import React from "react";
import { Menu } from "antd";

export default function UserAccountDropdown({
  menuItems = [],
  customClass = "",
}) {
  return <Menu items={menuItems} className="bg-[#1b2130] py-0 block h-full" />;
}
