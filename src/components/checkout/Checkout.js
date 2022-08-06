import React from "react";
import Header from "../header/Header";
import SubTotal from "../subtotal/SubTotal";
import "./Checkout.css";

function Checkout() {
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__add"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Coupons/ART/Diwali-18/stripe_pc._CB483582784_.jpg"
            alt="image"
          />
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
          </div>
        </div>
        <div className="checkout__right">
          <SubTotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
