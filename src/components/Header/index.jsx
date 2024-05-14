import React from "react";
import styles from "./Header.module.scss";

import logo from "../../assets/logo.svg";

const index = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <img width={50} src={logo} alt="logo" />
        <p>Постограм</p>
      </div>
      <div className={styles.header__medium}></div>
      <div className={styles.header__right}></div>
    </div>
  );
};

export default index;
