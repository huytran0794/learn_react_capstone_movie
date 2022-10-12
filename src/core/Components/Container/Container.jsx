import React from "react";

export default function Container({ children, className }) {
  let customClass = "";
  className && (customClass = className);
  let wrapperClass = `container mx-auto px-3 ${customClass}`;
  return <div className={wrapperClass}>{children}</div>;
}
