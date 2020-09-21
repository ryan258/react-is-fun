import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";

let bookList = [
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 },
];

const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? "Yes!" : "No..."}</p>
    </section>
  );
};

class Library extends Component {
  state = {
    open: true,
    freeBookmark: true,
  };

  toggleOpenClosed = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  render() {
    console.log(this.state);
    const { books } = this.props;

    return (
      <div>
        <h1>The library is {this.state.open ? "Open!" : "Closed..."}</h1>

        <button onClick={this.toggleOpenClosed}>
          Click to {this.state.open ? "Close" : "Open"}
        </button>
        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </div>
    );
  }
}

render(<Library books={bookList} />, document.getElementById("root"));
