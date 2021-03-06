// import { red } from "@material-ui/core/colors";
import React, { Component } from "react";
// import React from "react";
// import React, { useState } from "react";
import "./App.css";

// Components
import Person, { OtherPerson } from "./Person/Person";
// import TestStyledComp from "./StyledCompTest/index";
// import Nav from "./components/TwitterProps/Nav";
// import Tweets from "./components/TwitterProps/Tweets";
// import Nav from "./components/TwitterState/Nav";
// import Video from "./components/TwitterState/Video";

// Functional component
/*
function App() {
  // Learnt { useState } functional state from Maximilian
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Asif", age: 26 },
      { name: "Max", age: 30 },
      { name: "Jonas", age: 31 },
    ],
    // otherState: "Some other value",
  });
  console.log(personsState);

  const [otherState, setOtherState] = useState({
    title: "Normal State",
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Asif Newaz", age: 27 },
        { name: "Maximillian", age: 30 },
        { name: "Jonas", age: 31 },
      ],
      // otherState: "Updated state",
    });
  };

  const switchUpdateHandler = () => {
    setOtherState({
      title: "Updated State",
    });
  };
*/

// Learnt state from DevEd
/*
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
*/

// Working with state
// return (
// <div className="App">

/* These component used for learning state from DevEd */

/* <Nav toggle={toggle} />
      <Video nr={counter} setToggle={toggler} />  */

/* This portion of code used for learning state from DevEd */

/* <h1 className={toggle ? "active" : ""}>Counter {counter}</h1>
      <button onClick={increment}>Click me to increment!</button>
      <button onClick={reset}>Reset</button>
      <button onClick={toggler}>Click me!</button> */

/*       
      // These two components used for learning props from DevEd
        <div className="home">
          <Nav />
          <Tweets />
        </div>
      */

/* These components used for learning state from MAXIMILIAN */

//     <h1>I am React App</h1>
//     <button onClick={switchNameHandler}>Update State!</button>
//     <Person
//       name={personsState.persons[0].name}
//       age={personsState.persons[0].age}
//     />
//     <Person
//       name={personsState.persons[1].name}
//       age={personsState.persons[1].age}
//     >
//       My Hobbies: Racing
//     </Person>
//     <Person
//       name={personsState.persons[2].name}
//       age={personsState.persons[2].age}
//     />
//     <OtherPerson
//       otherState={otherState.title}
//       switchUpdateHandler={switchUpdateHandler}
//     />
//   </div>
// );

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
// }

// export default App;

//************ */ CLASS BASED COMPONENT************

class App extends Component {
  state = {
    persons: [
      { name: "Asif", age: 26 },
      { name: "Max", age: 30 },
      { name: "Jonas", age: 31 },
    ],

    otherState: "Some other value",

    country: "Bangladesh is my homeland",
  };

  switchNameHandler = (newName) => {
    console.log("was clicked!");
    //DON'T DO THIS: this.state.persons[1].name = "Asif Newaz";
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: "Max", age: 30 },
        { name: "Jonas", age: 32 },
      ],

      country: "I would like to go to the USA",
    });

    // this.setState({ persons: [{ name: "Asif Newaz", age: 27 }, {undefined}, {undefined}] });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Asif", age: 27 },
        { name: event.target.value, age: 30 },
        { name: "Jonas", age: 31 },
      ],

      country: "I would like to go to the USA",
    });
  };

  //Working with state
  render() {
    const style = {
      backgroundColor: "crimson",
      font: "inherit",
      color: '#fff',
      border: "1px solid purple",
      borderRadius: '4px',
      padding: "8px",
      cursor: "pointer",
    };

    const headingStyle = {
      font: "inherit",
      color: '#fff',
      border: "1px solid purple",
      borderRadius: '4px',
      padding: "8px",
    }


    return (
      <div className="App">
        <h1 style={headingStyle}>Hello world!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Asif Newaz!!!")}
        >
          Update state!
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Asif!!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <OtherPerson country={this.state.country} />
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
