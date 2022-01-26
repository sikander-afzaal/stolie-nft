import React from "react";
import "./Hero.css";
import ship from "../../Assets/ship.png";
import robo from "../../Assets/robo1.png";
function Hero() {
  return (
    <div className="hero">
      <img src={ship} className="ship" alt="" />
      <div className="hero-left">
        <h1>Welcome To MetaHomies NFT</h1>
        <p>
          Become a digital landlord in a $6,000,000 existing Real Estate
          investment portfolio.
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
