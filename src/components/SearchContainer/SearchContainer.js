import { Grid, Paper } from "@material-ui/core";
import React from "react";

const SearchContainer = ({query}) => {



  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Paper elevation={0} style={{width: "100%", height: "100%", padding: "16px"}}>
          {query}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchContainer;