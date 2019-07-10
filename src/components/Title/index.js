import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="container">
      <h1 className="title">{props.children}</h1>
      <p>Goal: Click on a character just once! if you click on a charater twice... YOU LOSE! </p>
      <p>Lets Play! start clickin!</p>
    </div>
  );
}

export default Title;
