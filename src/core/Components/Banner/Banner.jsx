import clsx from "clsx";
import React from "react";

export default function Banner({ className, pageLocation }) {
  let heroComponent;
  return (
    <div
      className={clsx(
        "banner z-[1]",
        "bg-movies1 bg-cover bg-no-repeat bg-[right_-200px_top]",
        className
      )}
    >
      <div className="overlay bg-bannerOverlay h-full"></div>
    </div>
  );
}
