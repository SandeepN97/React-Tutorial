//import from dependency
import React from "react";
import ReactDom from "react-dom";

//CSS, ./if the css is in same folder
import "./index.css";
import {books} from './books'
import Book from './Book'
//setup vars
//when we have many objects,


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;// spread operator {...book}
      })}
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById("root"));
