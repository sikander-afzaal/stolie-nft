import React from "react";
import "./Hero.css";
import ship from "../../Assets/ship.png";
import robo from "../../Assets/robo1.png";
function Hero() {
  return (
    <div className="hero">
      <img src={ship} className="ship" alt="" />
      <div className="hero-left">
        <h1>MetaHomies NFT Launch! </h1>
        <p>
          A 5 YR $6MM+ Existing Real Estate Investment Portfolios' Immersion
          into the METAVERSE | $100MM Track Record
        </p>
        <div className="btn-div-hero">
          <button className="hero-btn twitter">
            <i className="fab fa-twitter header-social"></i>
            Follow Us
          </button>
          <button className="hero-btn discord">
            <i className="fab fa-discord header-social"></i>
            Join Us
          </button>
          <button className="hero-btn telegram">
            <i className="fab fa-telegram header-social"></i>
            Telegram
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={robo} alt="" />
      </div>
      <div className="arrow-container">
        <div className="arrow-down"></div>
      </div>
    </div>
  );
}

export default Hero;
