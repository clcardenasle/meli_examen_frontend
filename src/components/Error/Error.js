import { Paper } from "@material-ui/core";
import React from "react";
import styles from "./Error.module.scss";
import { warningError } from "./Error-constants";

const Error = () => {

  return (
    <Paper elevation={0} className={styles.errorContainer}>
      <img
        src={warningError.icError}
        alt="icError"
        className={styles.icError}
      />
      <div className={styles.textError}>
        <div className={styles.titleError}>{warningError.title}</div>
        <ul className={styles.steps}>
          {warningError.steps.map((step, index) => (
            <li key={index}>{step.text}</li>
          ))}
        </ul>
      </div>
    </Paper>
  );
};

export default Error;