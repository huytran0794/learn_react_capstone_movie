import React from "react";

export default function FlexWrapper({
  align,
  justify,
  wrap,
  dir,
  className,
  children,
}) {
  let alignClass = `items-${align}`;
  let justityClass = justify ? `justify-${justify}` : `justify-between`;
  let flexWrapClass = "flex-nowrap";
  if (wrap) {
    flexWrapClass = wrap === "reverse" ? `flex-wrap-reverse` : `flex-${wrap}`;
  }
  let dirWrapClass = dir ? `flex-${dir}` : `flex-row`;
  let customClass = "";
  className && (customClass = className);
  let wrapperClass = `wrapper flex ${alignClass} ${justityClass} ${flexWrapClass} ${dirWrapClass} ${customClass}`;
  return <div className={wrapperClass}>{children}</div>;
}
