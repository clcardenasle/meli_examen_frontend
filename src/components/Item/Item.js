import React from "react";
import styles from "./Item.module.scss";
import { UNIQUE } from "./Item-constants";

const Item = ({price, title, image, cityName, shipping}) => {
  return (
    <>
      <div className={styles.price}>{price}</div>
      <div className={styles.title}>{title}</div>
      <img src={image} alt="item image" className={styles.image} />
      <div className={styles.cityName}>{cityName}</div>
      {shipping ? <img src={"/assets/img/ic_shipping.png"} /> : null}
      <p className={styles.uniqueComplete}>{UNIQUE}</p>
    </>
  );
};

export default Item;