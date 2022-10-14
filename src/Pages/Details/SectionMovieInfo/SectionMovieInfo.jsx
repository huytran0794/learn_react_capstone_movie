import clsx from "clsx";
import React, { useEffect, useState } from "react";
import SectionWrapper from "../../../core/Components/Section/SectionWrapper";
import CINEMA_SERVICE from "../../../core/service/cinemaService";
import { Card, Rate } from "antd";
import CardCover from "../../../core/Components/Card/CardCover/CardCover";
import ScheduleAccordion from "../../../core/Components/Accordion/ScheduleAccordion/ScheduleAccordion";

export default function SectionMovieInfo({ movieData, id }) {
  const renderMovieInfo = () => {
    let rating = (movieData.danhGia * 5) / 10;
    console.log(rating);
    return (
      <div className="flex gap-7 movie-info bg-[#28324A] p-10 rounded-xl">
        <div className="col--left w-4/12 flex items-center justify-center">
          <div className="thumb w-[300px] h-[500px]">
            <Card
              id={id}
              bordered={false}
              cover={<CardCover url={movieData.hinhAnh} />}
              className="card movie-card movie-card-detail rounded-none w-full h-full flex flex-col overflow-hidden"
            />
          </div>
        </div>
        <div className="col--right w-8/12">
          <div className="movie-details flex flex-col gap-7">
            <div className="movie__rating">
              <Rate
                allowHalf
                disabled
                value={rating}
                className="text-[#C8235D]"
              />
            </div>
            <h4 className="movie__name font-bold text-white text-4xl mb-0">
              {movieData.tenPhim}
            </h4>
            <p className="movie__desc font-medium tracking-wide text-xl text-[#9CA7CB] mb-0">
              {movieData.moTa}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam, nobis possimus? Incidunt, iure numquam eveniet
              voluptates nihil voluptate sed consequuntur impedit expedita qui
              dolor vel. Excepturi nisi eaque deserunt iste?
            </p>
          </div>
        </div>
      </div>
    );
  };
  const renderMovieScheduleDetail = () => {
    console.log("movieSchedule");
    console.log(movieData.heThongRapChieu);
    if (movieData.heThongRapChieu) {
      return movieData.heThongRapChieu.map((heThong, heThongIdx) => {
        return (
          <div
            className="cinema-brand-item mb-11 last:mb-0"
            key={heThong.maHeThongRap.toString() + heThongIdx}
          >
            <div className="cinema-brand flex items-center gap-4 mb-10">
              <div className="logo w-12 h-12 flex items-center justify-center overflow-hidden">
                <img src={heThong.logo} alt="" className="w-full h-full" />
              </div>
              <h5 className="cinema-brand__name text-white text-3xl mb-0 uppercase font-bold">
                {heThong.tenHeThongRap}
              </h5>
            </div>
            <div className="cinema-schedule">
              {renderCinemaSchedule(heThong.cumRapChieu)}
            </div>
          </div>
        );
      });
    }
  };

  const renderCinemaSchedule = (cumRapChieu) => {
    return cumRapChieu.map((cumRap, cumRapIdx) => (
      <ScheduleAccordion
        panelData={cumRap}
        panelId={cumRapIdx}
        key={cumRap.maCumRap.toString() + cumRapIdx}
      />
    ));
  };

  const renderMovieDetail = () => {
    return (
      <div className="movie-detail">
        <div className="wrapper flex flex-col gap-14">
          {renderMovieInfo()}
          <div className="movie-schedule">
            <div className="content bg-[#28324A] p-10 rounded-xl">
              <h3 className="text-3xl font-medium uppercase text-white mb-20">
                Select showtime
              </h3>
              <div className="cinema-movie-schedule-list">
                {renderMovieScheduleDetail()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  if (movieData) {
    return (
      <SectionWrapper
        customClass="-mt-[200px]"
        contentCustomClass="relative z-[3]"
        content={renderMovieDetail()}
      />
    );
  }
}
