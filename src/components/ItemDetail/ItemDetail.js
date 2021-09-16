import React from "react";
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({title, image, stateProduct, quantity, description, price}) => {

  return (
    <>
      <div className={styles.detailContainer}>
        <div className={styles.imageInfo}>
          <img className={styles.image} src={image} alt="product image"></img>
          <div className={styles.info}>
            <div className={styles.stateQty}>
              <div className={styles.stateProduct}>{(stateProduct = "New" ? "Nuevo" : "Usado")}</div>
              <div className={styles.qty}>{quantity}</div>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}</div>
            <div className={styles.button}>button</div>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.titleDescription}>Descripción del producto</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;