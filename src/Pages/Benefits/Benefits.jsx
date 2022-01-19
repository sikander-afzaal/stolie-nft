import React from "react";
import "./Benefits.css";
import img1 from "../../Assets/Benefits/bene-1.png";
function Benefits() {
  return (
    <div className="benefits">
      <h1>MetaHomies Real World / Next Gen Advanced Utility</h1>
      <p className="bene-desc">
        When you buy a MetaHomie, you’re not only holding a provable one of one
        rare piece of art, it doubles as your membership into the members only
        MetaHomies Club. Whose benefits are as follows.
      </p>
      <hr />
      <div className="benefits-div">
        <div className="benefit-row">
          <img src={img1} alt="" />
          <div className="text-row">
            <h2>The D.R.I.P. by MetaHomies</h2>
            <p>
              Most of our Advanced Holders Benefits will revolve around the
              Decentralized Real Estate Investment Portfolio (D.R.I.P.) This is
              a portfolio of all Real Estate owned and managed by MetaHomies LLC
              and its partners. This consists of over $6.1 million dollars in
              total assets which generate a residual income from rental profits.
              The reward to our holders will be directly affected by how the
              DRIP performs on a monthly/annual basis.
            </p>
          </div>
        </div>
        <div className="benefit-row">
          <img style={{ order: 2 }} src={img1} alt="" />
          <div className="text-row">
            <h2>Advanced Holder Reward - AHR</h2>
            <p>
              Advanced Holder Rewards : After integrating the D.R.I.P. into
              effect, we will receive approximately 24% profit share from our
              partners. 90% of this money goes back to MetaHomie NFT holders.
              The reward share is equal amongst all MetaHomies EXCLUDING the
              lucky 3 holders who mint a *Legendary MetaHomie. For those who are
              lucky enough to hold a Legendary MetaHomie will receive the
              equivalent of $500 a month for LIFE! For as long as the DRIP* is
              up and running. The AHR is a stackable benefit meaning more Homies
              = more profit share! The rewards will be distributed to our
              holders daily in the form of $DRICOIN, that holders can exchange
              for ETH.
            </p>
          </div>
        </div>
        <div className="benefit-row">
          <img src={img1} alt="" />
          <div className="text-row">
            <h2>A New Token - $DRIPCOIN</h2>
            <p>
              $DRIPCOIN is the internal community token of MetaHomies NFT.
              $DRIPCOIN can be claimed daily and even exchanged for ETH. However
              the community token will prove to be much more valuable within the
              MetaHomie Universe.
            </p>
          </div>
        </div>
        <div className="benefit-row">
          <img style={{ order: 2 }} src={img1} alt="" />
          <div className="text-row">
            <h2>Community MetaBank</h2>
            <p>
              MetaBank is a reserve fund exclusive to the MetaHomies community.
              Only Verified MetaHomie Holders are able to compete in weekly
              giveaways / contests to win ETH, $DRIPCOIN, NFT’s, and more.
            </p>
          </div>
        </div>
        <div className="benefit-row">
          <img src={img1} alt="" />
          <div className="text-row">
            <h2>Into the Sandbox Metaverse</h2>
            <p>
              45% of Mint Profits will be set aside to purchase Metaverse land
              in the Sandbox for our holders to claim as their own! The team
              will allocate funds for content development in the Sandbox
              metaverse for our community to enjoy.
            </p>
          </div>
        </div>
        <div className="benefit-row">
          <img style={{ order: 2 }} src={img1} alt="" />
          <div className="text-row">
            <h2>3D VOX MetaHomies</h2>
            <p>
              Members of the community will have the ability to claim a 3D
              variation of their MetaHomie NFT. This will be a 3D VOX Sandbox
              avatar thats playable in the game. Holders can claim their 1:1
              MetaHomie using their earned $DRIPCOIN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
