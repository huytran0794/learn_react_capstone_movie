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
  const DETAIL_ROUTE = `movies/detail/${maPhim}`;
  let renderCard = () => (
    <Card
      id={maPhim}
      bordered={false}
      cover={<CardCover url={hinhAnh} detailUrl={DETAIL_ROUTE} />}
      className="card movie-card rounded-none w-full h-full flex flex-col overflow-hidden"
    >
      <Meta
        className="block"
        title={<CardTitle tenPhim={tenPhim} detailUrl={DETAIL_ROUTE} />}
        description={<CardDesc ngayKhoiChieu={ngayKhoiChieu} />}
      ></Meta>
    </Card>
  );
  return <div>{renderCard()}</div>;
}
