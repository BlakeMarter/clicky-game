import React from "react";
import "./style.css";

function Navbar(props) {
  return (
<nav className="navbar navbar-expand-lg navbar-dark indigo">
  <div className="navbar-brand">Clicky Game</div>
    <span className="navbar-text white-text scores">
     Current Score: {props.score} | Top Score: {props.topscore}
    </span>
</nav>
  );
}

export default Navbar;