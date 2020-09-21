import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";

// let bookList = [
//   { title: "Hunger", author: "Roxane Gay", pages: 320 },
//   { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
//   { title: "White Teeth", author: "Zadie Smith", pages: 480 },
//   { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 },
// ];

// const Book = ({ title, author, pages, freeBookmark }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>by: {author}</p>
//       <p>Pages: {pages} pages</p>
//       <p>Free Bookmark Today: {freeBookmark ? "Yes!" : "No..."}</p>
//     </section>
//   );
// };

// const Hiring = () => (
//   <div>
//     <p>The library is hiring!</p>
//   </div>
// );

// const NotHiring = () => (
//   <div>
//     <p>The library is NOT hiring!</p>
//   </div>
// );

// // 0. Lifecycle methods are only available when using Class components
// class Library extends Component {
//   // Constructor is called before the component is mounted. A good place to initialize local state and bind event handler methods.
//   // constructor() {}
//   state = {
//     open: true,
//     freeBookmark: true,
//     hiring: true,
//     data: [],
//     loading: false,
//   };

//   // 1.  Renders as soon as the component is mounted.
//   // 1a. A good place to fetch some data.
//   componentDidMount() {
//     // console.log("The component is now mounted!");
//     // 1b. We'll load some data
//     this.setState({ loading: true });
//     fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
//       .then((data) => data.json())
//       .then((data) => this.setState({ data, loading: false }));
//   }

//   // 2. Runs when anything changes in the component.
//   componentDidUpdate() {
//     console.log("The component just updated!");
//   }

//   toggleOpenClosed = () => {
//     this.setState((prevState) => ({
//       open: !prevState.open,
//     }));
//   };

//   // Render is the only required lifecycle method.
//   render() {
//     console.log(this.state);
//     const { books } = this.props;

//     return (
//       <div>
//         {this.state.hiring ? <Hiring /> : <NotHiring />}
//         {this.state.loading ? (
//           "loading..."
//         ) : (
//           <div>
//             {this.state.data.map((product, index) => {
//               return (
//                 <section key={index}>
//                   <h3>Library Product of the Week!</h3>
//                   <h4>{product.name}</h4>
//                   <img src={product.image} height={100} alt={product.name} />
//                 </section>
//               );
//             })}
//           </div>
//         )}
//         <h1>The library is {this.state.open ? "Open!" : "Closed..."}</h1>

//         <button onClick={this.toggleOpenClosed}>
//           Click to {this.state.open ? "Close" : "Open"}
//         </button>
//         {books.map((book, index) => (
//           <Book
//             key={index}
//             title={book.title}
//             author={book.author}
//             pages={book.pages}
//             freeBookmark={this.state.freeBookmark}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// render(<Library books={bookList} />, document.getElementById("root"));

class FavoriteColorForm extends Component {
  state = {
    value: "",
  };

  newColor = (e) => this.setState({ value: e.target.value });

  submit = (e) => {
    console.log(`New value: ${this.state.value}`);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <label htmlFor="">
          Favorite Color:
          <input type="color" onChange={this.newColor} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

render(<FavoriteColorForm />, document.getElementById("root"));
