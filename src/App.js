import logo from './logo.svg';
import "./App.css";
import React, { Component, createElement } from "react";
import Person from './Person/Person';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, I am a React App</h1>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Person />
        <Person />
        <Person />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   {className: App},
    //   React.createElement("h1", null, "Hi, I'm a React App")
    // );
  }
}

export default App;
