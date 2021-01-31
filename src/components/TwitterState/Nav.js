import React from "react";

const Nav = (props) => {
  return <nav>{props.toggle ? <h1>Nav</h1> : <h1>Not a Nav</h1>}</nav>;
};

export default Nav;
