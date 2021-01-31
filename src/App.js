// import React, { Component } from "react";
import React, { useState } from "react";
// import React from "react";
import "./App.css";
// import Person from "./Person/Person";
// import { Button } from "@material-ui/core";
// import logo from "./logo.svg";
// import { Autocomplete } from "@material-ui/lab";
// import TextField from '@material-ui/core/TextField';
// import Nav from "./components/TwitterProps/Nav";
// import Tweets from "./components/TwitterProps/Tweets";
import Nav from "./components/TwitterState/Nav";
import Video from "./components/TwitterState/Video";

// Functional component
function App() {
  // const [personsState, setPersonsState] = useState({
  //   persons: [
  //     { name: "Asif", age: 26 },
  //     { name: "Max", age: 30 },
  //     { name: "Jonas", age: 31 },
  //   ],

  //   otherState: "Some other value",
  // });

  // console.log(personsState);

  // const switchNameHandler = () => {
  //   setPersonsState({
  //     persons: [
  //       { name: "Asif Newaz", age: 27 },
  //       { name: "Maximillian", age: 30 },
  //       { name: "Jonas", age: 31 },
  //     ],
  //   });
  // };

  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(true);

  const increment = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const toggler = () => {
    setToggle((prev) => !prev);
  };

  // Working with state
  return (
    <div className="App">
      <Nav toggle={toggle}/>
      <Video nr={counter} setToggle={toggler} />
      {/* <h1 className={toggle ? "active" : ""}>Counter {counter}</h1>

      <button onClick={increment}>Click me to increment!</button>
      <button onClick={reset}>Reset</button>

      <button onClick={toggler}>Click me!</button> */}
      {/* <div className="home">
        <Nav />
        <Tweets />
      </div> */}
      {/* <h1>Hello world!</h1>
      <p>This is really working!</p>

      <button onClick={switchNameHandler}>Switch Name</button>

      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        <a href="#">Click Me!</a>
      </Person>

      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>

      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
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
}

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
