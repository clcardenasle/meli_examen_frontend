import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { Grid } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import { PLACEHOLDER, URL } from "./NavBar-constants";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${URL.ITEMS}${searchValue}`;
    router.push(url);
  };

  const toHome = () => {
    router.push(URL.HOME);
  };

  return (
    <AppBar style={{ boxShadow: "none" }}>
      <Toolbar className={styles.toolBar} style={{ minHeight: "50px" }}>
        <Grid className={styles.navBarContainer} container>
          <Grid item xs={1}>
            <img src={"/assets/img/logo_ML.png"} alt="Logo Mercadolibre" onClick={toHome}/>
          </Grid>
          <Grid item xs={9}>
            <form className={styles.searchBarForm} onSubmit={handleSubmit}>
              <InputBase
                className={styles.searchBar}
                placeholder={PLACEHOLDER}
                inputProps={{ "aria-label": "search" }}
                value={searchValue}
                onChange={handleChange}
              ></InputBase>
              <img
                className={styles.icSearch}
                src={"/assets/img/ic_Search@2x.png"}
                alt="icono búsqueda"
                onClick={handleSubmit}
              />
            </form>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
