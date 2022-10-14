/* import packages */

import React from "react";

import { Collapse } from "antd";
import ItemMovieSchedule from "../../Tabs/ItemMovieSchedule";

const { Panel } = Collapse;

export default function ScheduleAccordion({ panelData, panelId }) {
  let accordionHeader = "";
  const renderPanelData = () => {
    accordionHeader = (
      <>
        <div className="logo w-16 h-16 flex items-center justify-center overflow-hidden">
          <img src={panelData.hinhAnh} alt="" className="w-full h-full" />
        </div>
        <h5 className="cinema-name text-xl font-medium mb-0">
          {panelData.tenCumRap}
        </h5>
      </>
    );
    return (
      <Panel header={accordionHeader} key={panelId + 1}>
        <div className="panel-content" id={`panel-${panelId + 1}`}>
          <div className="wrapper grid grid-cols-4 gap-4 items-center">
            {renderMovieTime(panelData.lichChieuPhim)}
          </div>
        </div>
      </Panel>
    );
  };

  const renderMovieTime = (lichChieuPhim) => {
    return lichChieuPhim.map((item, idx) => {
      return (
        <div className="room-scehdule">
          <ItemMovieSchedule
            key={item.maLichChieu.toString() + idx}
            maLichChieu={item.maLichChieu}
            ngayChieuGioChieu={item.ngayChieuGioChieu}
          />
        </div>
      );
    });
  };

  return <Collapse expandIconPosition={"end"}>{renderPanelData()}</Collapse>;
}
