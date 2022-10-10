/* import packages */
import React from "react";

/* import antd packages */
import { Tabs, Tooltip } from "antd";

/* import local components */
import TabsCinema from "./TabsCinema";
import { NavLink } from "react-router-dom";

export default function TabsCinemaBrand({ hethongRapPhim }) {
  const renderTabsCinemaBrand = (hethongRapPhim) => {
    let labelTabItem;
    return hethongRapPhim.map((rapPhim, rapPhimIdx) => {
      labelTabItem = (
        <Tooltip
          title={
            rapPhim.tenHeThongRap.charAt(0).toUpperCase() +
            rapPhim.tenHeThongRap.slice(1)
          }
          color="#28324A"
        >
          <div className="w-full flex items-center justify-center">
            <img src={rapPhim.logo} className="w-20 h-20" />
          </div>
        </Tooltip>
      );

      return {
        label: labelTabItem,
        key: rapPhim.maHeThongRap.toString() + " - " + rapPhimIdx,
        // children: getTheaterTabs(rapPhim.lstCumRap),
        children: <TabsCinema cumRap={rapPhim.lstCumRap} />,
      };
    });
  };

  return (
    <Tabs
      tabPosition="left"
      className="tabs__cinema-brand h-[1000px]"
      items={renderTabsCinemaBrand(hethongRapPhim)}
      tabBarGutter={50}
    />
  );
}
