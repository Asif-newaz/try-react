import React from "react";

const person = () => {
  return (
    <>
      <h1>I'm a person and I am {Math.floor(Math.random() * 30)} years old!</h1>
      <p>Everything is working just fine!</p>
    </>
  );
};

// console.log(Math.ceil(Math.random() * 30));

export default person;
