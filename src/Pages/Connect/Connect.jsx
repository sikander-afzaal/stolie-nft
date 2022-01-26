import React from "react";
import "./Connect.css";
import logo from "../../Assets/logo.png";
function Connect() {
  return (
    <div className="connect">
      <div className="connect-top">
        <div className="connect-box">
          <p>0</p>
          <p>Total Homies Owned</p>
        </div>
        <div className="connect-box">
          <p>0/0</p>
          <p>Number of Homies Staked</p>
        </div>
        <div className="connect-box">
          <p>0</p>
          <p>DRIPCOIN Earnings Per Day</p>
        </div>
        <div className="connect-box longer">
          <div className="longer-top">
            <img className="logo-connect" src={logo} alt="" />
            <p>0</p>
            <button className="claim">Claim</button>
          </div>
          <p>Claimable DRIPCOIN Balance</p>
        </div>
      </div>
      <div className="connect-bottom">
        <button className="wallet">Connect Wallet</button>
      </div>
    </div>
  );
}

export default Connect;
