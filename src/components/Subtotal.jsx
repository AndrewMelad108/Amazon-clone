import React from "react";
import "./Subtotal.css";
import { useAuth } from "../Context/GlobalState";
import { Link } from "react-router-dom";
// import { Checkbox } from "@mui/material";

function Subtotal() {
  const { basket } = useAuth();
  const getBasketTotal = basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
  return (
    <div className="Subtotals">
      <p className="Total-basket">
        Subtotal({basket.length}items):<strong>${getBasketTotal} </strong>
      </p>
      <p>
        {/* <Checkbox checked={checked} onChange={handleChange} /> */}
        this order contains a gift
      </p>
      <Link to="/payment" className="AddPaymentBtn">
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default Subtotal;
