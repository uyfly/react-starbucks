import { Fragment } from "react";

import mainImage from "../../assets/main.png";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>STARBUCKS</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImage} alt="Welcome to STARBUCKS Coffee!" />
      </div>
    </Fragment>
  );
};

export default Header;
