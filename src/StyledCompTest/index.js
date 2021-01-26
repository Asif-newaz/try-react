import React from "react";
import Div100vh from "react-div-100vh";
import Wrapper from "./styledCompTest.style";
import { Title } from "./styledCompTest.style";
import { SomeText } from "./styledCompTest.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const MyFullHeightComponent = () => {
  return (
    <Div100vh>
      <Wrapper>
        <Title>Hello Mac, this is my first styled component!</Title>
        <SomeText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          suscipit minus totam! Delectus non quam mollitia ullam? Soluta
          asperiores eaque aspernatur tempore sed, quos eveniet culpa, provident
          recusandae quis suscipit.
        </SomeText>
        <div className="nav">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
          <figure>
            <FontAwesomeIcon icon={faCoffee} />
          </figure>
        </div>
      </Wrapper>
    </Div100vh>
  );
};

export default MyFullHeightComponent;
