/* import packages */
import React, { useEffect, useState } from "react";
import CarouselWrapper from "../../../core/Components/Carousel/CarouselWrapper";
import MOVIE_SERVICE from "../../../core/service/movieService";

export default function SectionBanner() {
  const [bannerList, setBannerList] = useState([]);
  useEffect(() => {
    MOVIE_SERVICE.getAllBanner()
      .then((res) => {
        setBannerList(res.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="banner h-screen mb-6">
      <CarouselWrapper data={bannerList} />
    </div>
  );
}
