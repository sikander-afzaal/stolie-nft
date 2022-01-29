import React from "react";
import "./MetaBox.css";
function MetaBox() {
  return (
    <div className="metaBox">
      <div className="meta-top">
        <h1>0 / 3,333</h1>
        <p>0xe7D864D11bD14</p>
        <h2>Mint Cost 0.16 ETH</h2>
        <p>Max 5 per wallet</p>
      </div>
      <div className="meta-bottom">
        <button className="wallet">CONNECT</button>
        <p>Install Meta Mask</p>
      </div>
    </div>
  );
}

export default MetaBox;
