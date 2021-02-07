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

// function App() {
// Learnt { useState } functional state from Maximilian
/*
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Asif", age: 26 },
      { name: "Max", age: 30 },
      { name: "Jonas", age: 31 },
    ],

    otherState: "Some other value",
  });

  console.log(personsState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Asif Newaz", age: 27 },
        { name: "Maximillian", age: 30 },
        { name: "Jonas", age: 31 },
      ],
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
{
  /* 
      // These component used for learning state from DevEd
      <Nav toggle={toggle} />
      <Video nr={counter} setToggle={toggler} /> 
      */
}

{
  /* 
      // This portion of code used for learning state from DevEd
      <h1 className={toggle ? "active" : ""}>Counter {counter}</h1>

      <button onClick={increment}>Click me to increment!</button>
      <button onClick={reset}>Reset</button>

      <button onClick={toggler}>Click me!</button>
       */
}

{
  /*       
      // These two components used for learning props from DevEd
        <div className="home">
          <Nav />
          <Tweets />
        </div>
      */
}

{
  /* 
      // These components used for learning state from Maximilian
      <h1>Hello world!</h1>
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
      /> */
}
// </div>
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

// Class based component
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

  switchNameHandler = () => {
    console.log("was clicked!");
    //DON'T DO THIS: this.state.persons[1].name = "Asif Newaz";
    this.setState({
      persons: [
        { name: "Asif Newaz", age: 27 },
        { name: "Max", age: 30 },
        { name: "Jonas", age: 32 },
      ],

      country: "I would like to go to the USA",
    });

    // this.setState({ persons: [{ name: "Asif Newaz", age: 27 }, {undefined}, {undefined}] });
  };

  //Working with state
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Update state!</button>
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
