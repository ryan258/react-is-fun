import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import PropTypes from "prop-types";

// let bookList = {};
let bookList = [
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 },
];

const Book = ({
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

const Hiring = () => (
  <div>
    <p>The library is hiring!</p>
  </div>
);

const NotHiring = () => (
  <div>
    <p>The library is NOT hiring!</p>
  </div>
);

class Library extends Component {
  static defaultProps = {
    books: [
      {
        title: "Needful Things",
        author: "Stephen King",
        pages: 690,
      },
    ],
  };

  state = {
    open: true,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then((data) => data.json())
      .then((data) => this.setState({ data, loading: false }));
  }

  componentDidUpdate() {
    console.log("The component just updated!");
  }

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
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading ? (
          "loading..."
        ) : (
          <div>
            {this.state.data.map((product, index) => {
              return (
                <section key={index}>
                  <h3>Library Product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img src={product.image} height={100} alt={product.name} />
                </section>
              );
            })}
          </div>
        )}
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

Library.propTypes = {
  books: PropTypes.array,
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool,
};

render(<Library books={bookList} />, document.getElementById("root"));
