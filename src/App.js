// import React, { Component } from "react";
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import { Button } from "@material-ui/core";
// import logo from "./logo.svg";
// import { Autocomplete } from "@material-ui/lab";
// import TextField from '@material-ui/core/TextField';

// Functional component
const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Asif", age: 26 },
      { name: "Max", age: 30 },
      { name: "Jonas", age: 31 },
    ],

    otherState: "Some other value",
  });

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    //DON'T DO THIS: this.state.persons[1].name = "Asif Newaz";
    setPersonState({
      persons: [
        { name: "Asif Newaz", age: 27 },
        { name: "Max", age: 30 },
        { name: "Jonas", age: 31 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.name} age={personState.age}>
        <a href="#">Click Me!</a>
      </Person>
      <Person name={personState.name} age={personState.age}>
        My Hobbies: Racing
      </Person>
      <Person name={personState.name} age={personState.age} />
      <Button color="secondary" disabled={false}>
        Hello World
      </Button>

      {/* <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Combo box" variant="outlined" />
          )}
        /> */}
    </div>
  );

  // Working with props
  /*
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
};

export default App;

// Class based component
/*
class App extends Component {
  state = {
    persons: [
      { name: "Asif", age: 26 },
      { name: "Max", age: 30 },
      { name: "Jonas", age: 31 },
    ],

    otherState: "Some other value",
  };

  switchNameHandler = () => {
    console.log("was clicked!");
    //DON'T DO THIS: this.state.persons[1].name = "Asif Newaz";
    this.setState({
      persons: [
        { name: "Asif Newaz", age: 27 },
        { name: "Max", age: 30 },
        { name: "Jonas", age: 31 },
      ],
    });
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
        <Button color="secondary" disabled={false}>
          Hello World
        </Button>
      </div>
    );
  }
  // Working with props
  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Hello world!</h1>
  //       <p>This is really working!</p>
  //       <button>Switch Name</button>
  //       <Person name="Asif" age="26">
  //         <a href="#">Click Me!</a>
  //       </Person>
  //       <Person name="Max" age="30">
  //         My Hobbies: Racing
  //       </Person>
  //       <Person name="Jonas" age="31" />
  //     </div>
  //   );

  // How JSX actually works
  // return React.createElement(
  //   "div",
  //   {className: App},
  //   React.createElement("h1", null, "Hi, I'm a React App")
  // );
}

export default App;
*/
