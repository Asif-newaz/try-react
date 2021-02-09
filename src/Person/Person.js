import React from "react";
import "./person.css";

const person = (props) => {
  return (
    <>
      <h1 onClick={props.click}>I'm {props.name} and I am {props.age} years old!</h1>
      <p>{props.children}</p>
      <h3>{props.country}</h3>
    </>
  );
};

// class person extends Component {
//   render() {
//     return (
//       <>
//         <h1 onClick={this.props.click}>
//           I'm {this.props.name} and I am {this.props.age} years old!
//         </h1>
//         <p>{this.props.children}</p>
//         <h3>{this.props.country}</h3>
//       </>
//     );
//   }
// }

export const OtherPerson = (props) => {
  return (
    <>
      <h1>{props.otherState}</h1>
      <button onClick={props.switchNameHandler}>Click me!</button>
    </>
  );
};

// console.log(Math.ceil(Math.random() * 30));

export default person;
