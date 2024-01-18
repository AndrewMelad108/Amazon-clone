import React, { useState } from "react";
import "./OrderInfo.css";
import ProductBasket from "./ProductBasket";
function OrderInfo(props) {
  const [hiddenBtn, setHiddenBtn] = useState(true);
  return (
    <div className="order-info">
      <div className="order-info-items">
        <h3 className="order-info-des">
          {props.basket.map((el) => {
            return <ProductBasket key={el.id} {...el} hiddenBtn={hiddenBtn} />;
          })}
        </h3>
      </div>
      <div className="order-info-section">
        <h3 className="order-info-title">Email</h3>
        <h3 className="order-info-des">{props.userEmail}</h3>
      </div>
      <div className="order-info-section">
        <h3 className="order-info-title">totalPrice</h3>
        <h3 className="order-info-des">
          {props.totalPrice}
          <small>$</small>
        </h3>
      </div>
    </div>
  );
}

export default OrderInfo;
