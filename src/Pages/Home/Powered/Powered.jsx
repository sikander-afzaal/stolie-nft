import React from "react";
import "./Powered.css";
import img1 from "../../../Assets/powered/brand1.svg";
import img2 from "../../../Assets/powered/brand2.svg";
import star from "../../../Assets/powered/star.svg";
function Powered() {
  return (
    <div className="powered">
      <h1>Press About Us</h1>
      <hr />
      <div className="div-wrapper">
        <div className="brand-div">
          <div className="brand-small">
            <img
              src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/61963767743dccc6b625e3fa_1_yahoo.svg"
              alt=""
            />
            <img src={star} alt="" />
          </div>
          <div className="brand-small">
            <img src={img1} alt="" />
            <img src={star} alt="" />
          </div>
          <div className="brand-small">
            <img
              src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/6196378008928c4b8fb8f470_1_coinpedia.svg"
              alt=""
            />
            <img src={star} alt="" />
          </div>
          <div className="brand-small">
            <img
              src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/61963dbf99614199516b5eda_1_Bitcoinist%20(2).svg"
              alt=""
            />
            <img src={star} alt="" />
          </div>
          <div className="brand-small">
            <img
              src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/61964d4dd022418c1e3cfa85_1_NEWSBTC%20(2).svg"
              alt=""
            />
            <img src={star} alt="" />
          </div>
        </div>
        <div className="brand-div">
          <div className="brand-small">
            <img src={img2} alt="" />
            <img src={star} alt="" />
          </div>
          <div className="brand-small">
            <img
              src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/619e255d088979c1e244f5e3_1_nasdaq.svg"
              alt=""
            />
            <img src={star} alt="" />
          </div>
          <div className="brand-small">
            <img
              src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/619e256c9d63276b0759c54f_1_marketwach.svg"
              alt=""
            />
            <img src={star} alt="" />
          </div>
          <div className="brand-small">
            <img
              src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/619e417784f97c253f8a3dec_1_coinspeaker.svg"
              alt=""
            />
            <img src={star} alt="" />
          </div>
          <div className="brand-small">
            <img
              src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/6196378008928c4b8fb8f470_1_coinpedia.svg"
              alt=""
            />
            <img src={star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Powered;
