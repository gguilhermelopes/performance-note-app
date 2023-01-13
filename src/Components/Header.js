import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as SVG } from "../img/gym.svg";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Link to="/">
          <SVG />
        </Link>
      </header>
    </div>
  );
};

export default Header;
