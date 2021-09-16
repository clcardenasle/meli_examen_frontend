import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import styles from "./DetailContainer.module.scss";
import Skeleton from "@material-ui/lab/Skeleton";
import { API_URL } from "./DetailContainer-constants";

const DetailContainer = ({id}) => {

  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const [description, setDescription] = useState({});

  useEffect(() => {
    fetch(`${API_URL.ITEMS}${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetail(data);
        setLoading(false);
      });
    fetch(`${API_URL.ITEMS}${id}${API_URL.DESCRIPTION}`)
      .then((response) => response.json())
      .then((data) => {
        setDescription(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Paper elevation={0} className={styles.paper}>
          {loading && (
            <>
              <Skeleton
                variant="rect"
                height={118}
                className={styles.skeleton}
              />
            </>
          )}
          {console.log(detail)}
          {console.log(description)}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DetailContainer;