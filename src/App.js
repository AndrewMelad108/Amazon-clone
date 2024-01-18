import "./App.css";
import Header from "./components/header.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/login.jsx";
import SignIn from "./components/SignIn.jsx";
import CheckOut from "./components/CheckOut.jsx";
import { Route, Routes } from "react-router-dom";
import { React, useEffect } from "react";
import { auth } from "./firebase";
import { useAuth } from "./Context/GlobalState";
import Payment from "../src/components/Payment";
import Order from "./components/Order";
import Footer from "./components/Footer";
import ProductInfo from "./components/home-component/ProductInfo";

function App() {
  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/SignIn"
          element={
            <>
              <SignIn />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <CheckOut />
              <Footer />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
              <Footer />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Order />
              <Footer />
            </>
          }
        />

        <Route
          path="/ProductInfo/:ProductId"
          element={
            <>
              <Header />
              <ProductInfo />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>page not found</h1>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
