import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/Amazon_logo.svg.png";
import searchIcon from "../icons/1080251-200.png";
import cartIcon from "../icons/shopping-cart.png";
import { useAuth } from "../Context/GlobalState.js";
import { auth } from "../firebase";
function Header() {
  const { basket, user } = useAuth();
  const [searchValue, setSearchValue] = useState();
  const handleAuth = () => {
    auth.signOut();
  };
  const handelSearch = (e) => {
    setSearchValue(e.traget.value);
  };
  return (
    <div className="header">
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-image" />
        </Link>
      </div>
      <div className="search-section ">
        <input
          type="text"
          className="searchInput"
          value={searchValue}
          onChange={handelSearch}
        />
        <img src={searchIcon} alt="logo" className="search-icon" />
      </div>
      <div className="header-links">
        <Link to={!user ? "/login" : ""} className="link" onClick={handleAuth}>
          <div className="optionOne">
            Hello {user ? `${user.email}` : "Guest"}
          </div>
          <div className="optiontwo"> {user ? "Log Out" : "Sign In"} </div>
        </Link>
        <Link to="/orders" className="link">
          <div className="optionOne">Returns</div>
          <div className="optiontwo">&orders </div>
        </Link>
        <div className="prime link">
          <div className="optionOne">Your</div>
          <div className="optiontwo">Prime </div>
        </div>
        <div className="link cart-shopping">
          <Link to="/checkout">
            <img src={cartIcon} alt="cart" className="cart-image" />
          </Link>
          <span>{basket.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
