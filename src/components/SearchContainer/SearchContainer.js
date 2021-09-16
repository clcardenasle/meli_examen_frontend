import { Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { API_URL_LOCAL } from "./SearchContainer-constants";
import Skeleton from "@material-ui/lab/Skeleton";
import styles from "./SearchContainer.module.scss"
import Item from "../Item";

const SearchContainer = ({query}) => {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL_LOCAL}${query}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results.slice(0,4));
        setLoading(false);
      });
  }, [query]);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Paper elevation={0} className={styles.paper}>
          {loading && (
            <>
              <Skeleton variant="rect" height={118} className={styles.skeleton} />
              <Skeleton variant="rect" height={118} className={styles.skeleton} />
              <Skeleton variant="rect" height={118} className={styles.skeleton} />
              <Skeleton variant="rect" height={118} className={styles.skeleton} />
            </>
          )}
          {results.map(result => (
            <Item 
              key={result.id}
              price={result.price}
              title={result.title}
              image={result.thumbnail}
              cityName={result.address.state_name}
              shipping={result.shipping.free_shipping}
              id={result.id}
            />
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchContainer;