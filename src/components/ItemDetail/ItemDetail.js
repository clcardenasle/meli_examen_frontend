import React from "react";
import styles from "./ItemDetail.module.scss";
import { Grid } from "@material-ui/core";
import { moneyFormat } from "../../utils/utils";
import { Button } from "@material-ui/core";
import { itemDescriptionText } from "./ItemDetail-constants"

const ItemDetail = ({title, image, stateProduct, quantity, description, price}) => {

  return (
    <>
      <Grid className={styles.detailContainer} container justifyContent="center">
        <Grid className={styles.imageInfo} item xs={7}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={image} alt="product image"></img>
          </div>
          <Grid className={styles.info} item xs={3}>
            <div className={styles.stateQty}>
              <div className={styles.stateProduct}>
                {(stateProduct === "new" ? "Nuevo" : "Usado")}
              </div>
              <div className={styles.hyphen}>-</div>
              <div className={styles.qty}>
                {quantity} {itemDescriptionText.sold}
              </div>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{moneyFormat.format(price)}</div>
            <Button className={styles.button} variant="text">
              {itemDescriptionText.buy}
            </Button>
          </Grid>
        </Grid>
        <Grid className={styles.descriptionContainer} item xs={7}>
          <div className={styles.titleDescription}>
            {itemDescriptionText.titleDescription}
          </div>
          <div className={styles.description}>{description}</div>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemDetail;