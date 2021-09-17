import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Breadcrumb.module.scss"

const Breadcrumb = ({query, category}) => {

  return (
    <Grid className={styles.breadcrumbContainer} container justifyContent="center">
      <Grid item xs={10}>
        <div>{category} {" > "} {query}</div>
      </Grid>
    </Grid>
  );
};

export default Breadcrumb;