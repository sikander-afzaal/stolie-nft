import React from "react";
import "./Benefits.css";
import img1 from "../../../Assets/Benefits/bene-1.png";
function Benefits() {
  return (
    <div id="bene" className="benefits">
      <h1>MetaHomies Rewards and Utility</h1>
      <p className="bene-desc">
        When you buy a MetaHomie, you’re not only holding a provably one of one
        rare piece of art, it doubles as your membership access into the members
        only MetaHomies Club. Whose benefits are as follows
      </p>
      <hr />
      <div className="benefits-div">
        <div className="benefit-row">
          <img src={img1} alt="" />
          <div className="text-row">
            <h2>DIAMOND MetaHomie = $100,000</h2>
            <p>
              Once the collection is sold out and revealed, one lucky minter
              will hold the 1 of 1 DIAMOND MetaHomie. This is not only the
              rarest piece in the collection but also the “JACKPOT” to being
              rewarded $100,000.
            </p>
          </div>
        </div>
        <div className="benefit-row">
          <img style={{ order: 2 }} src={img1} alt="" />
          <div className="text-row">
            <h2>A$500 EVERY MONTH</h2>
            <p>
              4 MetaHomies are LEGENDARY and automatically generate $500 every
              month to their owners for LIFE! For as long as the DRIP is up and
              running.
            </p>
          </div>
        </div>
        <div className="benefit-row">
          <img src={img1} alt="" />
          <div className="text-row">
            <h2>Advanced Holders Reward - AHR</h2>
            <p>
              Advanced Holder Rewards : After integrating the D.R.I.P. into
              effect, we will receive approximately 24% commission from our
              partners. 90% of this money goes back to MetaHomie NFT holders.
              Staking your MetaHomie will allow you to start earning rewards
              daily.The passive reward share is equal amongst all MetaHomies.
              The AHR is a stackable benefit meaning more Homies = more reward
              share! Rewards will be distributed to our holders in the form of
              DRIPCOIN, that holders can exchange for ETH
            </p>
          </div>
        </div>
        <div className="benefit-row">
          <img style={{ order: 2 }} src={img1} alt="" />
          <div className="text-row">
            <h2>4 Green Houses and a Red Hotel</h2>
            <p>
              Much like the classic board game, if you collect 4 MetaHomies you
              can claim a MetaHotel. Breeding for a MetaHotel will multiply the
              passive rewards for the holder.
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
              <br />
              Members of the community will have the ability to claim a 3D
              variation of their MetaHomie NFT playable in the Sandbox
              Metaverse. Holders can claim their 1:1 MetaHomie using their
              earned $DRIPCOIN.
            </p>
          </div>
        </div>
        <div className="benefit-row">
          <img style={{ order: 2 }} src={img1} alt="" />
          <div className="text-row">
            <h2>IT PAYS TO BE A WHALE</h2>
            <p>
              After the collection is sold out, we will select the person who
              will holds the highest number of MetaHomies. The selected WHALE
              will receive a reserved legendary MetaHomie and thus be able to
              benefit from the advantages ($500 per month for life)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
