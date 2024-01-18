import React from "react";
import "./Benefits.css";
import Gaming from "../../icons/Prime_Gaming2x._CB655600387_.png";
import Deals from "../../icons//Prime_Deals2x._CB655600387_.png";
import Pharmacy from "../../icons/Prime_Pharmacy2x._CB655600387_.png";
import Reading from "../../icons/Prime_Reading2x._CB655600387_.png";
import Photos from "../../icons/Prime_Photos2x._CB654453160_.png";
import Wardrobe from "../../icons/Prime_Wardrobe2x._CB655600387_.png";

function Benefits() {
  return (
    <div className="Benefits">
      <h1 className="Benefits-title">More Prime benefits</h1>
      <div className="Benefits-content">
        <div className="Benefit">
          <img src={Gaming} alt="Gaming" className="Benefit-icon" />
          <h2 className="Benefit-title">Prime Gaming</h2>
          <p className="Benefit-des">
            Free games, exclusive in-game content, and a free Twitch channel
            subscription every month.
          </p>
        </div>
        <div className="Benefit">
          <img src={Deals} alt="Gaming" className="Benefit-icon" />
          <h2 className="Benefit-title">Exclusive deals</h2>
          <p className="Benefit-des">
            Prime Members save on thousands of items.
          </p>
        </div>
        <div className="Benefit">
          <img src={Pharmacy} alt="Gaming" className="Benefit-icon" />
          <h2 className="Benefit-title">Rx savings</h2>
          <p className="Benefit-des">
            Save on prescriptions at 60,000 pharmacies, including Walgreens,
            CVS, and Amazon Pharmacy.
          </p>
        </div>
        <div className="Benefit">
          <img src={Reading} alt="Gaming" className="Benefit-icon" />
          <h2 className="Benefit-title">Prime Reading</h2>
          <p className="Benefit-des">
            Enjoy hundreds of new books, magazines, and more each month.
          </p>
        </div>
        <div className="Benefit">
          <img src={Photos} alt="Gaming" className="Benefit-icon" />
          <h2 className="Benefit-title">Amazon Photos</h2>
          <p className="Benefit-des">
            Enjoy unlimited, full-resolution photo storage.
          </p>
        </div>
        <div className="Benefit">
          <img src={Wardrobe} alt="Gaming" className="Benefit-icon" />
          <h2 className="Benefit-title">Prime Try Before You Buy</h2>
          <p className="Benefit-des">
            Try on fashion items before you buy, and only pay for what you keep.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
