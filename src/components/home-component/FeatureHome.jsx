import React from "react";
import "./FeatureHome.css";
import imageFeature1 from "../../images/Prime_FastFree2x._CB654453399_.png";
import imageFeature2 from "../../images/Prime_Grocery2x._CB656172610_.png";
import imageFeature3 from "../../images/Prime_AmazonDay2x._CB656172610_.png";
import imageFooter from "../../images/amazon-prime-delivery-checkmark._CB659998231_.png";
function FeatureHome() {
  return (
    <div className="FeatureHome">
      <h1 className="title-Feature">Fast, free delivery</h1>
      <div className="FeatureHome-content">
        <div className="Feature">
          <img
            src={imageFeature1}
            alt="imageFeature"
            className="imageFeature"
          />
          <h3 className="title-sub">Convenient options</h3>
          <p className="Feature-des">
            Enjoy Same-Day, One-Day, and Two-Day Delivery on millions of items.
          </p>
        </div>
        <div className="Feature">
          <img
            src={imageFeature2}
            alt="imageFeature"
            className="imageFeature"
          />
          <h3 className="title-sub">Groceries</h3>
          <p className="Feature-des">
            Exclusive Prime member discounts and free shipping on orders of $150
            at Amazon Fresh stores.
          </p>
        </div>
        <div className="Feature">
          <img
            src={imageFeature3}
            alt="imageFeature"
            className="imageFeature"
          />
          <h3 className="title-sub">Amazon Day</h3>
          <p className="Feature-des">
            Enjoy Same-Day, One-Day, and Two-Day Delivery on millions of items.
          </p>
        </div>
      </div>
      <div className="Feature-footer">
        <img src={imageFooter} alt="imageFooter" className="imageFooter" />
        <p className="feature-footer-des">
          Look for the Prime check mark as you shop. It means fast, free
          delivery!
        </p>
      </div>
    </div>
  );
}

export default FeatureHome;
