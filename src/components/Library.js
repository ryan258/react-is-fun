import React, { Component } from "react";
import { Book } from "./Book";
import { Hiring } from "./Hiring";
import { NotHiring } from "./NotHiring";
import PropTypes from "prop-types";

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

export default Library;
