/* import packages */
import React from "react";
import clsx from "clsx";

/* import local components */
import Container from "../Container/Container";

export default function SectionWrapper({
  title,
  content,
  customClass,
  titleCustomClass,
  contentCustomClass,
}) {
  return (
    <section className={clsx("py-10", customClass)}>
      <Container>
        {title && (
          <div
            className={clsx(
              "section-title",
              "flex items-center",
              "py-4 px-4 mb-20"
            )}
          >
            <h3
              className={clsx(
                "uppercase text-[#fffffffc] text-4xl font-extrabold tracking-wide relative mb-0",
                "before:absolute before:block before:w-5 before:h-[60px] before:-top-2 before:-left-2 before:bg-[#F3842A] before:-z-[1]",
                titleCustomClass
              )}
            >
              {title}
            </h3>
          </div>
        )}
        {content && (
          <div className={clsx("section-content", contentCustomClass)}>
            {content}
          </div>
        )}
      </Container>
    </section>
  );
}
