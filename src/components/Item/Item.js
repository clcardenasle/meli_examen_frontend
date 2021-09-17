import React from "react";
import styles from "./Item.module.scss";
import { UNIQUE, ITEM_URL } from "./Item-constants";
import { Grid } from "@material-ui/core";
import { moneyFormat } from "../../utils/utils";
import { useRouter } from "next/dist/client/router";

const Item = ({price, title, image, cityName, shipping, id}) => {

  const router = useRouter();
  
  const toDetail = () => {
    router.push(`${ITEM_URL}${id}`);
  };

  return (
    <>
      <div className={styles.itemContainer} onClick={toDetail}>
        <div className={styles.imageContainer}>
          <img src={image} alt="item image" className={styles.image} />
        </div>
        <Grid className={styles.infoContainer} item xs={8}>
          <div className={styles.priceContainer}>
            <div className={styles.priceShipping}>
              <div className={styles.price}>{moneyFormat.format(price)}</div>
              {shipping ? <img className={styles.icShipping} src={"/assets/img/ic_shipping.png"} /> : null}
            </div>
            <div className={styles.cityName}>{cityName}</div>
          </div>
          <div className={styles.titleContainer}>
            <div>{title}</div>
            <p className={styles.uniqueComplete}>{UNIQUE}</p>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default Item;