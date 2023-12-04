/**
 *
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h1 tag</h2>
 *      </div>
 *      <div id="child2">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h1 tag</h2>
 *      </div>
 * </div>
 * React element is an object which converts to html browser understanding documnet
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

// JSX

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello Ayyappa ! Hello Narayana ! Hello Lakshmi Amma"
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// render method convert object to h1 tag or browser readable format
