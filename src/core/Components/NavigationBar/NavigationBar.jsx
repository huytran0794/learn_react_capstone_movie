import React from "react";

/* import packages */
import { Menu } from "antd";

export default function NavigationBar({ mode = "horizontal", menuItems }) {
  return (
    <div className="navbar h-full w-2/5">
      <Menu mode={mode} items={menuItems} className="h-full w-full" />
    </div>
  );
}
