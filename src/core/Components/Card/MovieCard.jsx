/* import packages */
import React from "react";

/* import ant design packages */
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

/* import local components */
import CardCover from "./CardCover/CardCover";
import CardTitle from "./CardTitle/CardTitle";
import CardDesc from "./CardDesc/CardDesc";

export default function MovieCard(props) {
  let { maPhim, tenPhim, trailer, hinhAnh, ngayKhoiChieu } = props.data;
  let renderCard = () => (
    <Card
      id={maPhim}
      bordered={false}
      cover={<CardCover url={hinhAnh} />}
      className="card movie-card group rounded-none w-full h-full flex flex-col overflow-hidden"
    >
      <Meta
        className="block"
        title={<CardTitle tenPhim={tenPhim} />}
        description={<CardDesc ngayKhoiChieu={ngayKhoiChieu} />}
      ></Meta>
    </Card>
  );
  return <div>{renderCard()}</div>;
}
