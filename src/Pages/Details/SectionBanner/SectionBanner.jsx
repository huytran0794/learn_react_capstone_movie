import clsx from "clsx";
import React from "react";

export default function SectionBanner({ className, imgUrl }) {
  return (
    <div
      className={clsx(
        "banner h-[700px]",
        className,
        "bg-cover bg-no-repeat bg-center",
        "relative",
        "before:absolute before:bg-slate-400/40 before:w-full before:h-full before:z-[2]"
      )}
      style={{ backgroundImage: `url(${imgUrl})` }}
    ></div>
  );
}
