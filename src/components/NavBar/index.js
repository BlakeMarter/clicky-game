import React from "react";
import "./style.css";

function Navbar(props) {
  return (
<nav className="navbar navbar-expand-lg navbar-dark indigo">
  <div className="navbar-brand">Navbar w/ text</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <span className="navbar-text white-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
  );
}

export default Navbar;