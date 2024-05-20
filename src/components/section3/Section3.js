import React from "react";
import "./Section3.css";
import watch4 from "../../assets/watch4.png";

function Section3() {
  return (
    <div className="sec3-container">
      <div className="img-div-sec3">
        <img src={watch4} alt="" />
      </div>
      <div className="product-points">
        <div className="line"></div>
        <div className="point">
          <h5>01</h5>
          <p className="point-desc">
            Built to last, our watches offer durability and longevity, making
            them a valuable investment.
          </p>
        </div>

        <div className="point">
          <h5>02</h5>
          <p className="point-desc">
            Built to last, our watches offer durability and longevity, making
            them a valuable investment.
          </p>
        </div>

        <div className="point">
          <h5>03</h5>
          <p className="point-desc">
            Built to last, our watches offer durability and longevity, making
            them a valuable investment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
