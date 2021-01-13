// import logo from "./logo.svg";
import "./App.css";
import React, { Component, createElement } from "react";
import Person from "./Person/Person";
// import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grouped from "./AreaSelect/AreaSelect";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, I am a React App</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons: [
      { name: "Asif", age: 20 },
      { name: "Max", age: 30 },
      { name: "Jonas", age: 31 },
    ],
  };

  switchNameHandler = () => {
    // console.log("was clicked!");
    this.state.persons[0].name = "Asif Newaz";
  };

  //Working with state
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          <a href="#">Click Me!</a>
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Grouped />
      </div>
    );

    // Working with props
    /*
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name="Asif" age="26">
          <a href="#">Click Me!</a>
        </Person>
        <Person name="Max" age="30">
          My Hobbies: Racing
        </Person>
        <Person name="Jonas" age="31" />
      </div>
    );
    */

    // How JSX actually works
    /*
    return React.createElement(
      "div",
      {className: App},
      React.createElement("h1", null, "Hi, I'm a React App")
    );
    */
  }
}

export default App;
