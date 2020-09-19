import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";

// 1.) The data exists in a database
let bookList = [
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 },
];

// 3.) Data is mapped into individual child components
const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  );
};

// 2.) Data is pumped into a container component
const Library = ({ books }) => {
  return (
    <div>
      {/* <Book title="Steal This Book" author="Anonymous" pages={400} /> */}
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          pages={book.pages}
        />
      ))}
    </div>
  );
};

render(<Library books={bookList} />, document.getElementById("root"));
