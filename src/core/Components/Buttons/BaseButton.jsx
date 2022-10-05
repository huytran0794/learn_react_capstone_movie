import React from "react";

export default function BaseButton({
  size = "base",
  fontSize = "",
  textColor = "black",
  bgColor = "white",
  customClass,
  children,
}) {
  let btnSizeWrappClass = `py-2 px-5`;
  let textSizeWrapClass = `text-${fontSize}`;
  let textColorWrapClass =
    textColor.charAt(0) === "#" ? `text-[${textColor}]` : `text-${textColor}`;
  let bgColorWrapClass = `bg-[${bgColor}]`;

  (size === "sm" && (btnSizeWrappClass = `py-2 px-5`)) ||
    (size === "md" && (btnSizeWrappClass = `py-4 px-6`));
  let btnClass = `border border-solid border-[#E4B233] rounded-md inline-flex justify-center items-center ${btnSizeWrappClass} ${textSizeWrapClass} ${textColorWrapClass} ${bgColorWrapClass} text-[#0D0745] bg-[#E4B233] hover:bg-white hover:text-#E4B233 duration-1000 ${customClass}`;
  return <button className={btnClass}>{children}</button>;
}
