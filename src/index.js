import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";

let bookList = [
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 },
];

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  );
};

// 0.) It's a good idea to keep state in the root of the tree!
// 1.) Refactor stateless component to a class component
class Library extends Component {
  // 6. Clean up constructor and use a one liner because we're using prevState
  state = { open: false };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: true,
  //   };
  //   // 3. Bind the method to make 'this' accessible in the custom method
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  // }

  // 2. Add a method to change state with setState
  // 7. Bind this since we're not using the constructor, arrow functions will automatically bind this
  toggleOpenClosed = () => {
    // this.setState({
    //   open: !this.state.open,
    // });
    // (5. Use callback functions to track previous state because setState is asynchronous and this will ensure that no matter how long it takes, it will work as expected.)
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
        {/* 4. Use the custom method in a click handler */}
        <button onClick={this.toggleOpenClosed}>
          Click to {this.state.open ? "Close" : "Open"}
        </button>
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
  }
}

render(<Library books={bookList} />, document.getElementById("root"));
