import React from "react";
import classes from "./Logo.css";
import burgerLogo from "../../assets/images/burger-logo.png";

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger_Builder" />
  </div>
);

export default logo;
