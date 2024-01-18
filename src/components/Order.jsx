import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useAuth } from "../Context/GlobalState";
import { db } from "../firebase";
import "./Order.css";
import OrderInfo from "./OrderInfo";
function Order() {
  const [order, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      onSnapshot(collection(db, "orders"), (snapshot) => {
        setOrders(snapshot.docs.map((doc) => doc.data()));
      });
    } else {
      setOrders([]);
    }
  }, []);
  console.log(
    order.map((product) => {
      return product.basket;
    })
  );
  return (
    <div className="order">
      <h1 className="order-title">Orders info</h1>
      <hr />
      <div className="order-content">
        {order.map((order) => {
          return <OrderInfo key={order.orderID} {...order} />;
        })}
      </div>
    </div>
  );
}

export default Order;
