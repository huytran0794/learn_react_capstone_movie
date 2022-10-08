import clsx from "clsx";
import React from "react";

export default function Label({ className, children }) {
  return <span className={clsx("custom-label", className)}>{children}</span>;
}
