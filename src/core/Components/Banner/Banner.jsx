import clsx from "clsx";
import React from "react";

export default function Banner({ className, pageLocation }) {
  let heroComponent;

  if (pageLocation.toLowerCase() === "home") {
    heroComponent = "Swiper";
  } else {
    heroComponent = "Other pages";
  }
  console.log("rendering banner" + heroComponent);
  return (
    <div className={clsx("banner z-11", "bg-white", className)}>
      {heroComponent}
    </div>
  );
}
