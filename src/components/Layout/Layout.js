import React from "react";
import NavBar from "../NavBar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.generalBackground}>
        <NavBar />
        {children}
      </div>
    </>
  );
};

export default Layout;
