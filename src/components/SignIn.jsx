import React, { useState } from "react";
import "./SignIn.css";
import logo from "../images/Amazon-Logo-login.png";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Repassword, setRepassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const register = () => {
    if (email === "" || password === "" || name === "" || Repassword === "") {
    } else {
      createUserWithEmailAndPassword(auth, email, password).then((auth) => {
        if (auth) {
          console.log(auth);
          const docRef = addDoc(collection(db, "users"), {
            id: auth.user.uid,
            name: name,
            password: password,
            email: auth.user.email,
          });
          Navigate("/");
        }
      });
    }
  };

  return (
    <div className="SignIn">
      <Link to="/">
        <img src={logo} alt="logo-amazon" className="image-logo" />
      </Link>

      <div className="SignIn-content">
        <p className="SignIn-title">Create account </p>
        <label htmlFor="name" className="SignIn-input-title">
          Your name
        </label>
        <input
          type="text"
          className="SignIn-input"
          placeholder="First and last name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        <label htmlFor="password" className="SignIn-input-title">
          Password
        </label>
        <input
          type="password"
          className="SignIn-input"
          placeholder="At least 6 charactes"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="password" className="SignIn-input-title">
          Re-enter password
        </label>
        <input
          type="password"
          className="SignIn-input"
          placeholder="At least 6 charactes"
          value={Repassword}
          onChange={(e) => {
            setRepassword(e.target.value);
          }}
        />
        <button type="submit" className="SignInBtn" onClick={register}>
          Continue
        </button>
        <p className="condition">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
    </div>
  );
};
export default SignIn;
