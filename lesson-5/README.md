Header

- Logo
- Nav Items
  Body
- Search
- RestaurantContainer - Restaurant card - Image - Name of res, star rating, cusine, delivery time
  Footer
- Copyright
- Links
- Address
- Contact

- config driven UI

Two type of export and import

- Default export / import

export default component
import component from "path";

- Named export / import

export const Component;
import {component} from "path";

Hooks is nothing but the normal javascript function
hooks - super powerful variable
It is pre built
state variable in react - super powerful variable
why react is fact - Because it can do faster dom manipulation
react element - plain javascript object
react component - plain javascript function
Most important hooks

- useState() - used to generate superpowerful state variable in react
- useEffect()

Virtual Dom is the representation of the actual dom
Diff algorithm - finds the difference between two virtual dom ( updated virtual dom [after clicking the button - updated list] and previous (old) dom) and calutate the difference and actually update the dom in every render cycle that is how react becomes faster

why react is faster - It is fasting in updating the dom or it is efficient in doing dom manipulation because it has virtual dom.
Reconciliation in react

Finding the difference between two html is slow and tough. But seeing the difference between two objects is fast
React keeps track of all the dom nodes as the virtual dom
React does not touch the html and dom
React updates the dom
incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

React will re render the element once it find the diff between the virtual dom consistently and update the UI
