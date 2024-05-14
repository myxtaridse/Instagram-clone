import React from "react";
import styles from "./Comment.module.scss";

const index = ({ text, nickname }) => {
  return (
    <div className={styles.comments}>
      {/* <div className={styles.comments__user}></div> */}
      {/* <h3 className={styles.comments__name}>Full Name: </h3> */}
      <h3 className={styles.comments__name}>{nickname.toLowerCase()}: </h3>
      {/* <p className={styles.comments__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        laboriosam mollitia ratione quidem molestiae ex, adipisci sequi,
        perspiciatis magnam ab non earum consequuntur, modi ipsam obcaecati at
        assumenda expedita omnis.
      </p> */}
      <p className={styles.comments__text}>{text}</p>
    </div>
  );
};

export default index;
