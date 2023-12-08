import React from "react";
import ReactDOM from "react-dom/client";

// React Element ==> it is an object ==> when we render this to dom it becomes an html element

// create react element using core react
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// console.log(heading);

// JSX - Html like or xml like syntax
// create react element using JSX
// JSX code is transpiled before it reaches the JS engine (by parcel using Babel)
// JSX converted to react.createElement (by babel) => JS object => rendered on dom to html element

// Component using normal JS function
const Heading1 = function () {
  return (
    <h1 className="head" tabIndex="5">
      Namaste react
    </h1>
  );
};

// React element
const heading = (
  <h1 id="heading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// changing the above react element to react component

const Heading = () => (
  <h1 id="heading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// React Components
// Class based components - old (uses javascript classes)
// Functional Components - new (uses javascript functions[Just a normal javascript function which returnreact elements- Name it with capital letter])
const HeadingComponent = () => {
  return (
    <h1 className="heading">
      Functional Component React - Swamiye Saranam Ayyappa !
    </h1>
  );
};

const number = 10;

// Component composition (Calling one component inside other component)
// we can write any javascript code inside {}
const HeadingComponent2 = () => (
  <div id="container">
    <Heading />
    {number}
    {heading}
    <h2>{100 + 200}</h2>
    <h1 className="heading">
      Functional Component React - Swamiye Saranam Ayyappa !
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // takes the object react element convert into html and send it to browser - render react element
root.render(<HeadingComponent2 />); // render react functional component - this syntax is understood by babel (brackets)
