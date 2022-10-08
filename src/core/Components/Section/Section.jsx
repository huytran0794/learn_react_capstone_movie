/* import packages */
import React from "react";
import clsx from "clsx";

/* import local components */
import Container from "../Container/Container";

export default function SectionMovie({
  title,
  content,
  customClass,
  titleCustomClass,
  contentCustomClass,
}) {
  return (
    <section className={`py-20 ${customClass ? customClass : ""}`}>
      <Container>
        {title && (
          <h3
            className={clsx(
              "section-title uppercase text-[#fffffffc] text-4xl font-extrabold tracking-wide mb-20",
              titleCustomClass
            )}
          >
            {title}
          </h3>
        )}
        {content && (
          <div
            className={clsx(
              "section-content grid grid-cols-4 gap-y-10 gap-x-20",
              contentCustomClass
            )}
          >
            {content}
          </div>
        )}
      </Container>
    </section>
  );
}
