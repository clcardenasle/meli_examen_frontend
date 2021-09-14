import React from "react";
import styles from "./NavBar.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { Grid } from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar className={styles.appBar} style={{ boxShadow: "none" }}>
      <Toolbar className={styles.toolBar} style={{ minHeight: "50px"}}>
        <Grid className={styles.navBarContainer} container xs={12}>
          <Grid item className={styles.logo} xs={1}>
            <img src={"/assets/img/logo_ML.png"} alt="Logo Mercadolibre" />
          </Grid>
          <Grid item className={styles.searchContainer} xs={9}>
            <InputBase
              className={styles.searchBar}
              placeholder="Nunca dejes de buscar"
              inputProps={{ "aria-label": "search" }}
            ></InputBase>
            <img
              className={styles.icSearch}
              src={"/assets/img/ic_Search@2x.png"}
              alt="icono búsqueda"
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
