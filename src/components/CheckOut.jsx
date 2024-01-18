import React from "react";
import "./CheckOut.css";
import image from "../images/checkoutAd.jpg";
import { useAuth } from "../Context/GlobalState";
import ProductBasket from "./ProductBasket.jsx";
import Subtotal from "./Subtotal";

function CheckOut() {
  const { user, basket } = useAuth();

  let products = basket.map((product) => {
    return <ProductBasket key={product.id} {...product} />;
  });
  return (
    <div className="CheckOut">
      <div>
        <img src={image} alt="checkoutAd" className="checkout-image" />
        <h4 className="user-email-basket">
          hello , {user ? user.email : "Guest"}
        </h4>
        <h3 className="basket-title">your shopping basket</h3>
        <hr />
        <div className="productsInBasket">{products}</div>
      </div>
      <div className="Subtotal">
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckOut;
