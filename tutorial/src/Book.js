import React from 'react'

const Book = ({ img, title, author }) => {
  //console.log(props);
  //string veriable
  //const { img, title, author } = props;

  //attribute, eventHandler
  // onClick, onMouseOver

  function clickHandler() {
        alert("Hello world");
    }
  return (
    <article className="book">
      <img className="image" src={img} alt="" />
      {/*going back to javascript
       one rule of setting javascript in JSX is that 
       it must return a value so it has to be a expression
       not a statement 
    */}
      <h1>{title}</h1>
      {/*we can do more with this it becomes more dynamic that we can include javascript within JSX*/}
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Buy Now
      </button>
    </article>
  );
};

export default Book
