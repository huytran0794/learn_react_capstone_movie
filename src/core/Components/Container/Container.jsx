import React from "react";

export default function Container({ children, className }) {
  let customClass = "";
  className && (customClass = className);
  let wrapperClass = `container mx-auto ${customClass} px-3`;
  return <div className={wrapperClass}>{children}</div>;
}
