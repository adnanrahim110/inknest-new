import React from "react";

const Heading = ({
  title = "",
  highlight = "",
  primary = false,
  mb = "mb-5",
}) => {
  const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedHighlight = escapeRegex(highlight);
  const parts = title.split(new RegExp(`(${escapedHighlight})`, "gi"));
  return (
    <h2
      className={`title ${
        primary ? "text-primary" : "text-black"
      } font-semibold ${mb}`}
    >
      {parts.map((part, idx) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={idx} className={primary ? "text-black" : "text-primary"}>
            {part}
          </span>
        ) : (
          <span key={idx}>{part}</span>
        )
      )}
    </h2>
  );
};

export default Heading;
