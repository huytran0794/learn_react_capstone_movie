/* import packages */
import React from "react";

/* import antd packages */
import { Tabs, Tooltip } from "antd";

/* import react router dom packages */
import { NavLink } from "react-router-dom";

/* import local components */
import TabItemMovie from "./TabItemMovie";

export default function TabsCinema({ tabPosition = "left", cumRap }) {
  const renderTabsCinema = (cumRap) => {
    let labelTabItem;
    return cumRap.map((rap, rapIdx) => {
      labelTabItem = (
        <Tooltip
          title={`Address : ${
            rap.diaChi.charAt(0).toUpperCase() + rap.diaChi.slice(1)
          }`}
          color="#28324A"
        >
          <NavLink to="/" className="link w-full">
            <div className="cinema-branch font-bold h-20 transition-all duration-100 w-full flex items-center">
              <p className="text-xl text-left truncate mb-0">{rap.tenCumRap}</p>
            </div>
          </NavLink>
        </Tooltip>
      );

      return {
        label: labelTabItem,
        key: `cumrap-${rapIdx}`,
        children: <TabItemMovie dsPhim={rap.danhSachPhim} />,
      };
    });
  };
  return (
    <Tabs
      tabPosition={tabPosition}
      className="tabs__cinema-branch h-[1000px]"
      items={renderTabsCinema(cumRap)}
      tabBarGutter={50}
    />
  );
}
