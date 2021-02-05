import React, { Children, Component } from "react";

// const person = (props) => {
//   return (
//     <>
//       <h1>I'm {props.name} and I am {props.age} years old!</h1>
//       <p>{props.children}</p>
//     </>
//   );
// };

class person extends Component {
  render() {
    return (
       <>
       <h1>I'm {this.props.name} and I am {this.props.age} years old!</h1>
       <p>{this.props.children}</p>
       <h3>{this.props.country}</h3>
       </>
    );
  }
}

// console.log(Math.ceil(Math.random() * 30));

export default person;
