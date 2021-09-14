import React from "react";
import styles from './NavBar.module.scss';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { Grid } from "@material-ui/core";

const NavBar = () => {
  return (
    <Grid container xs={12}>
      <AppBar>
        <Toolbar className={styles.navBar}>
          <Grid item xs={1}>
            Icon
          </Grid>
          <Grid item xs={9}>
            <InputBase
              placeholder="Nunca dejes de buscar"
              inputProps={{ "aria-label": "search" }}
            >
            </InputBase>
              <div>boton</div>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default NavBar;
