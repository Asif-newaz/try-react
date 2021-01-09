import React from "react";

const person = (props) => {
  return (
    <>
      <h1>I'm {props.name} and I am {props.age} years old!</h1>
      <p>{props.children}</p>
    </>
  );
};

// console.log(Math.ceil(Math.random() * 30));

export default person;
