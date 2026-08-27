import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}) {
  return (
    <div
      className={
        center
          ? "section-heading center"
          : "section-heading"
      }
    >

      {eyebrow && (
        <span className="eyebrow">
          {eyebrow}
        </span>
      )}

      <h2
        className="section-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {copy && (
        <p className="section-copy">
          {copy}
        </p>
      )}

    </div>
  );
}