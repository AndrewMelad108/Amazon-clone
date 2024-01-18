import React, { useState } from "react";
import "./login.css";
import logo from "../images/Amazon-Logo-login.png";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        Navigate("/");
      }
    });
  };
  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        Navigate("/");
      }
    });
  };
  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="logo-amazon" className="image-logo" />
      </Link>

      <div className="login-content">
        <p className="login-title">Sign in </p>
        <label htmlFor="Email" className="login-input-title">
          Email or mobile phone number
        </label>
        <input
          type="text"
          className="login-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password" className="login-input-title">
          password
        </label>
        <input
          type="password"
          className="login-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="loginBtn" onClick={SignIn}>
          Continue
        </button>
        <p className="condition">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="create-account">
        <hr className="lines" />
        <span className="title-create">New to Amazon?</span>
        <hr className="lines" />
        {/* <Link to="/signIn"> */}
        <Link to="/SignIn">
          <button className="createAccountBtn">
            Create your Amazon account
          </button>
        </Link>
        {/* </Link> */}
      </div>
    </div>
  );
};
export default Login;
