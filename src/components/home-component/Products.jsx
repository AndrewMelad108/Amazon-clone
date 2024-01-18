import React from "react";
import "./Products.css";
import { useAuth } from "../../Context/GlobalState";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BadgeIcon from "@mui/icons-material/Badge";
import Rating from "@mui/material/Rating";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import Tooltip from "@mui/material/Tooltip";
function Products(props) {
  const { dispatch, basket } = useAuth();

  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        description: props.description,
        price: props.price,
        image: props.images[0],
        rating: props.rating,
      },
    });
  };
  return (
    <div className="Prdoucts">
      <div className="product-info">
        <p className="product-title">{props.title}</p>
        <p className="product-des">{props.description}</p>
        <div className="price">
          <small>$</small>
          <strong>{props.price}</strong>
        </div>
        <Rating defaultValue={props.rating} disabled />
      </div>
      <div className="product-image">
        <img
          src={props.images[0]}
          alt="productIamge"
          className="imageProduct"
        />
      </div>
      <div className="group-icon">
        <Tooltip title="addToBasket" placement="top">
          <AddShoppingCartIcon
            className="icon"
            color="primary"
            onClick={addToBasket}
          />
        </Tooltip>
        <Tooltip title="Detials" placement="top">
          <BadgeIcon className="icon icon-info" color="primary" />
        </Tooltip>
        <Tooltip title="favorite" placement="top">
          <LocalFireDepartmentIcon className="icon" color="primary" />
        </Tooltip>
      </div>
    </div>
  );
}

export default Products;
