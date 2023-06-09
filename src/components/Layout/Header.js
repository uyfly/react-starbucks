import { Fragment } from "react";

import mainImage from "../../assets/main.png";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>STARBUCKS</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImage} alt="Welcome to STARBUCKS Coffee!" />
      </div>
    </Fragment>
  );
};

export default Header;
