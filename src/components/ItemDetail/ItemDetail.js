import React from "react";
import styles from "./ItemDetail.module.scss";
import { Grid } from "@material-ui/core";
import { moneyFormat } from "../../utils/utils";
import { Button } from "@material-ui/core";

const ItemDetail = ({title, image, stateProduct, quantity, description, price}) => {

  return (
    <>
      <Grid className={styles.detailContainer} container xs={10}>
        <Grid className={styles.imageInfo} item xs={7}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={image} alt="product image"></img>
          </div>
          <Grid className={styles.info} xs={3}>
            <div className={styles.stateQty}>
              <div className={styles.stateProduct}>
                {(stateProduct = "New" ? "Nuevo" : "Usado")}
              </div>
              <div className={styles.hyphen}>-</div>
              <div className={styles.qty}>{quantity} Vendidos</div>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{moneyFormat.format(price)}</div>
            <Button 
              className={styles.button} 
              variant="text">
              Comprar
            </Button>
          </Grid>
        </Grid>
        <Grid className={styles.descriptionContainer} xs={7}>
          <div className={styles.titleDescription}>
            Descripción del producto
          </div>
          <div className={styles.description}>{description}</div>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemDetail;