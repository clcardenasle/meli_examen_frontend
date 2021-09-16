import React from "react";

const ItemDetail = ({title, image, stateProduct, quantity, description}) => {

  return (
    <>
      <div>{title}</div>
      <img src={image} alt="product image"></img>
      <div>{stateProduct = "New" ? "Nuevo" : "Usado"}</div>
      <div>{quantity}</div>
      <div>{description}</div>
    </>
  );
};

export default ItemDetail;