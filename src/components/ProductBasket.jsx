import React from "react";
import "./ProductBasket.css";
import { useAuth } from "../Context/GlobalState";
function ProductBasket({
  id,
  title,
  image,
  description,
  rate,
  price,
  hiddenBtn,
}) {
  const { dispatch } = useAuth();

  const removeToBasket = () => {
    console.log("delte");
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="ProductBasket">
      <div className="product-image">
        <img src={image} alt="productImage" className="product-image-basket" />
      </div>
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-des-basket">{description}</p>
        <small>$</small>
        <strong className="price-product">{price}</strong>
        <p>{rate}</p>
        {hiddenBtn ? (
          ""
        ) : (
          <button className="RomveBasketBtn" onClick={removeToBasket}>
            Romve from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductBasket;
