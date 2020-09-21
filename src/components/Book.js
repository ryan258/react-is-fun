import React from "react";

export const Book = ({
  title = "No title provided",
  author = "No author provided",
  pages = 0,
  freeBookmark = false,
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? "Yes!" : "No..."}</p>
    </section>
  );
};
