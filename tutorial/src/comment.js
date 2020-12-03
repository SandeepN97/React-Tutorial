/*
npm => (Node Package Manager)
mkdir -> Create a folder where you want to work 
npm init -> initialize
give app name app
bootstrap -> install bootstrap
npm install bootstrap --save
npx install gatsby -cli -g
npm create-react-app 
cd tutorial 
npm start -> react app will be shown in browser
*/

// stateless function component
// Always return JSX
// JSX rule
// div/ section / article or Fragment
// using camelCase for HTML attribute
//clssName instead of class
//close every element
//formating

//Nested Component, React Tools
//Component, regular function declaration and must have a return type
//BookList is a component which must always be in Capital letter

// we can have a individual children prop as in any on
/*
<Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>What is the name of the book that you want to write...</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
*/

//explicit return
//const Person = () => <h2>Sandeep Nyoupane</h2>
//impleit return
//const Message = () =>
//{
//return<p>This is my message</p>;
//};

//nested component
//creating string veriable outside function showing that we can do so...

//we can pass property or parameter to a funciton
//props here is a object
/*
there are two alternative ways to write a boject
 1. const {img, title, author} = props no need to wirte prop.img in this format
2. const Book = (props) => {
  return (
    <article className = 'book'>
    <img className = "image" src = {props.img} alt = ""/>
    <article/>
3. this is waht I have used below.

  );
}
*/

/*{console.log(props)}*/

/*
    This gives an error Thats what the statement 
    in line 51 to 54 is saying
    <p>{let x = 6}</p>
  */

/*
    But we can do this same as in javasctript
    this will return a value
  */
/*
  <p>{6 + 6}</p>
  */
/*
  "This is for understanding nexted component and implicit and expelic return for JS6 arrow function.""
 <Image />
  <Title />
  <Author />
 */

/*
const Image = () => <img className= 'image' src = "https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._SX258_BO1,204,203,200_.jpg" alt = ""/>
implecit return 
const Title = () => <h1>I love You to the Moon and Back</h1>; 
const Author = () => 
{
  return (
    inline declration of css in javascript
    direct access of javascript in JSX
    <h4 style = {{color:'#617d98', fontSize: '0.75rem',marginTop:'0.25rem'}}> Ann Whitford Paul</h4>
  );
}
*/
/*
const Image = () => <img className= 'image' src = "https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._SX258_BO1,204,203,200_.jpg" alt = ""/>
implecit return 
const Title = () => <h1>I love You to the Moon and Back</h1>; 
const Author = () => 
{
  return (
    inline declration of css in javascript
    direct access of javascript in JSX
    <h4 style = {{color:'#617d98', fontSize: '0.75rem',marginTop:'0.25rem'}}> Ann Whitford Paul</h4>
  );
}
*/